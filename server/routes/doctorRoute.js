import express from "express";
import {
  getPatient,
  getAllPatients,
  connectPatient,
  deletePatient,
  addPatient,
} from "../controllers/doctorController.js";

const router = express.Router();

router.route("/").get(getAllPatients).post(addPatient);

router.route("/:id").get(getPatient).post(connectPatient).delete(deletePatient);

export default router;
