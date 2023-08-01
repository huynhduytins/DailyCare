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
    type: String,
    default: "",
  },
  detail: {
    type: String,
    default: "",
  },
  levelDis: {
    type: String,
    default: "Xấu",
  },
  userId: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  myDoctors: {
    type: Array,
    default: [],
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  waiting: {
    type: Array,
  },
});

const Patient = mongoose.model("Patients", PatientSchema);
export default Patient;
