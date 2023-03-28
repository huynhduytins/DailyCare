import express from "express";
import {
  getPatient,
  getAllPatients,
  connectPatient,
  deletePatient,
  updateDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.route("/").get(getAllPatients).patch(updateDoctor);

router.route("/:id").get(getPatient).post(connectPatient).delete(deletePatient);

export default router;
