import Doctor from "../modules/Doctor.js";
import Patient from "../modules/Patient.js";
import User from "../modules/User.js";

export const getDoctor = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   const doctor = await Doctor.findById(id);
  //   res.status(200).json(doctor);
  // } catch (err) {
  //   res.status(404).json({ err });
  // }
  res.send("get doctor");
};

export const getAllDoctors = async (req, res) => {
  // try {
  //   const doctor = await Doctor.find();
  //   res.status(200).json(doctor);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.send("get all doctors");
};

export const getMyDoctors = async (req, res) => {
  try {
    const { userId } = req.user;

    const myDoctors = await Patient.find({ userId: userId });
    const user = await User.findOne({ email: myDoctors[0].myDoctors[0] });
    const doctor = await Doctor.findOne({ userId: user._id });
    const { specialist, address, age, phone } = doctor;

    const doctorInfo = {
      name: user.name,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      specialist,
      address,
      age,
      phone,
    };

    res.json({ doctorInfo });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const connectDoctor = async (req, res) => {
  res.send("Connecting to doctor...");
};

export const deleteDoctor = async (req, res) => {
  res.send("deleting doctor");
};

export const updatePatient = async (req, res) => {
  res.send("Updating patient");
};
