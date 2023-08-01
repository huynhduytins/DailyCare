import Patient from "../modules/Patient.js";
import User from "../modules/User.js";
import Doctor from "../modules/Doctor.js";
import { StatusCodes } from "http-status-codes";

export const getPatient = async (req, res) => {
  res.send("get user");
};

export const getAllPatients = async (req, res) => {
  console.log(req.query);
  const { levelDis, gender, search, sort } = req.query;
  const { userId } = req.user;
  const user = await User.findOne({ _id: userId });

  const queryObject = {
    myDoctors: user.email,
  };

  if (levelDis && levelDis !== "Tất cả") {
    console.log(levelDis);
    queryObject.levelDis = levelDis;
  }

  if (gender && gender !== "Tất cả") {
    queryObject.gender = gender;
  }

  if (search) {
    queryObject.firstName = { $regex: search, $options: "i" };
  }

  let result = Patient.find(queryObject);

  if (sort === "a-z") {
    result = result.sort("firstName");
  }

  if (sort === "z-a") {
    result = result.sort("-firstName");
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const myPatients = await result;

  const totalMyPatients = await Patient.find(queryObject);
  const numberOfPatientPages = Math.ceil(totalMyPatients.length / limit);

  res.status(StatusCodes.OK).json({
    myPatients,
    totalPatients: myPatients.length,
    numberOfPatientPages,
  });
};

export const connectPatient = async (req, res) => {
  res.send("Connecting to patient...");
};

export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    let doctor = await User.findOne({ _id: userId });
    let patient = await Patient.findOne({ _id: id });

    let arr = patient.myDoctors;
    arr = arr.filter((el) => el !== doctor.email);
    patient.myDoctors = arr;

    patient.save();

    doctor = await Doctor.findOne({ userId });
    patient = await User.findOne({ _id: patient.userId });

    if (!patient) return res.send("done");

    arr = doctor.myPatients;
    arr = arr.filter((el) => el !== patient.email);

    doctor.myPatients = arr;
    doctor.save();
    res.status(StatusCodes.OK).json({ mgs: "done" });
  } catch (error) {
    console.log(error.response);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mgs: "fail" });
  }
};

export const acceptPatient = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  let doctor = await User.findOne({ _id: userId });
  let patient = await Patient.findOne({ _id: id });

  let arr = patient.waiting;
  arr = arr.filter((el) => el !== doctor.email);
  patient.waiting = arr;

  patient.save();

  doctor = await User.findOne({ _id: userId });
  patient = await Patient.findOne({ _id: id });

  arr = patient.myDoctors;
  arr.push(doctor.email);
  patient.myDoctors = arr;
  patient.save();

  doctor = await Doctor.findOne({ userId });
  patient = await User.findOne({ _id: patient.userId });

  if (!patient) return res.send("done");

  doctor.save();
  res.status(StatusCodes.OK).json({ mgs: "done" });
};

export const declinePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const doctor = await User.findOne({ _id: userId });
    const patient = await Patient.findOne({ _id: id });

    let arr = patient.waiting;
    arr = arr.filter((el) => el !== doctor.email);
    patient.waiting = arr;

    patient.save();
    res.status(StatusCodes.OK).json({ mgs: "done" });
  } catch (error) {
    console.log(error.response);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ mgs: "fail" });
  }
};

export const getStats = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findOne({ _id: userId });

    const waitingPatients = await Patient.find({ waiting: user.email });
    const urgentPatients = await Patient.find({ myDoctors: user.email });
    const data = {
      urgentPatient: 0,
      schedule: urgentPatients.length ? 5 : 0,
      pending: waitingPatients.length,
      "0-22": 0,
      "23-35": 0,
      "36-60": 0,
      ">60": 0,
      monthlyUrgent: [6, 4, 5, 3, 6, 7],
    };

    urgentPatients.forEach((patient) => {
      if (patient.levelDis === "Khẩn cấp") {
        data.urgentPatient += 1;
      }
      if (patient.age > 0 && patient.age <= 22) {
        data["0-22"] += 1;
      } else if (patient.age <= 35) {
        data["23-35"] += 1;
      } else if (patient.age <= 60) {
        data["36-60"] += 1;
      } else {
        data[">60"] += 1;
      }
    });

    res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getWaitingList = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findOne({ _id: userId });
    const myPatients = await Patient.find({ waiting: user.email });
    res.json({ myPatients });
  } catch (error) {
    console.log(error);
  }
};

export const addPatient = async (req, res) => {
  try {
    const { name, age, email, gender, detail, emailDoctor } = req.body;
    const password = "111111";
    const role = "Patient";
    let patient = await User.create({ name, email, password, role });

    patient = await Patient.create({
      firstName: name,
      age,
      email,
      gender,
      detail,
      userId: patient._id,
    });

    patient.myDoctors = [emailDoctor];
    patient.save();

    let doctor = await User.findOne({ email: emailDoctor });
    doctor = await Doctor.findOne({ userId: doctor._id });
    const myPatients = doctor.myPatients;

    myPatients.push(email);
    doctor.myPatients = myPatients;

    doctor.save();

    console.log(doctor);
    res.status(StatusCodes.CREATED).json({ email, password });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};
