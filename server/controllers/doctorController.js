import Patient from "../modules/Patient.js";
import User from "../modules/User.js";
import Doctor from "../modules/Doctor.js";
import { StatusCodes } from "http-status-codes";

export const getPatient = async (req, res) => {
  res.send("get user");
};

export const getAllPatients = async (req, res) => {
  res.send("get all patients");
};

export const connectPatient = async (req, res) => {
  res.send("Connecting to patient...");
};

export const deletePatient = async (req, res) => {
  res.send("deleting patient");
};

export const addPatient = async (req, res) => {
  try {
    const { name, age, email, gender, detail, emailDoctor } = req.body;
    const password = "111111";
    const role = "Patient";
    let patient = await User.create({ name, email, password, role });

    patient = await Patient.create({
      name,
      age,
      email,
      gender,
      detail,
      userId: patient._id,
    });

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
