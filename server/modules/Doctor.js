import mongoose, { Schema } from "mongoose";

const DoctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  specialist: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  degree: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  myPatients: {
    type: Array,
    default: [],
  },
});

const Doctor = mongoose.model("Doctors", DoctorSchema);
export default Doctor;
