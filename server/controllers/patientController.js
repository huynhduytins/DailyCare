import Doctor from "../modules/Doctor.js";

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
  // try {
  //   const { id } = req.params;
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.send("get my doctors");
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
