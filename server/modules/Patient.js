import mongoose, { Schema } from "mongoose";

const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  gender: {
    type: Boolean,
  },
  userEmail: {
    type: String,
    default: "",
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  myDoctors: {
    type: Array,
    default: [],
  },
  phoneNumber: {
    type: String,
    default: "",
  },
});

const Patient = mongoose.model("Patients", PatientSchema);
export default Patient;
