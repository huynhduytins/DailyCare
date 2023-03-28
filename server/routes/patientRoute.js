import express from "express";
import {
  getDoctor,
  getAllDoctors,
  getMyDoctors,
  connectDoctor,
  deleteDoctor,
  updatePatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.route("/").get(getAllDoctors);

router.route("/myDoctors").get(getMyDoctors);

router
  .route("/doctors/:id")
  .get(getDoctor)
  .post(connectDoctor)
  .delete(deleteDoctor);

export default router;
