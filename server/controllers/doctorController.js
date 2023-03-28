export const getPatient = async (req, res) => {
  res.send("get patient");
};

export const getAllPatients = async (req, res) => {
  // try {
  //   const doctor = await Doctor.find();
  //   res.status(200).json(doctor);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  res.send("get all patients");
};

export const connectPatient = async (req, res) => {
  res.send("Connecting to patient...");
};

export const deletePatient = async (req, res) => {
  res.send("deleting patient");
};

export const updateDoctor = async (req, res) => {
  res.send("Updating doctor");
};
