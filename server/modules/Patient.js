import moongoose from "moongoose";

const PatientSchema = new moongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    address: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
      min: 10,
      max: 10,
    },
    gender: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Patient = moongoose.model("Patient", PatientSchema);
export default Patient;
