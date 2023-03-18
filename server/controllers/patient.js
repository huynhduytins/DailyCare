import Doctor from "../modules/Doctor";

// READ
export const getDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    res.status(200).json(doctor);
  } catch (err) {
    res.status(404).json({ err });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.find();
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getMyDoctors = async (req, res) => {
  try {
    const {id} = req.params;
    // const 
  }catch(err) {
    res.status(500).json(err);
  }
}
