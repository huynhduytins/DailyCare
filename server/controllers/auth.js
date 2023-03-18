import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Patient from "../modules/Patient.js";

// REGISTER PATIENT
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      address,
      phoneNumber,
      gender,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newPatient = new Patient({
      firstName,
      lastName,
      email,
      password,
      picturePath,
      address,
      phoneNumber,
      gender,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    res.status(500).json(err);
  }
};

// LOGIN FOR PATIENT
export const login = async (req, res) => {
  try {
    const { email, password } = res.body;
    const patient = await Patient.findOne({ email });

    if (!patient)
      return res.status(400).json({ msg: "Username or Password is invalid." });

    const isMatch = await bcrypt.compare(password, patient.password);

    if (!isMatch)
      return res.status(400).json({ msg: "Username or Password is invalid." });

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET);
    delete patient.password; //This will not be resent to the client

    res.status(200).json({ token, patient });
  } catch (err) {
    res.status(500).json(err);
  }
};
