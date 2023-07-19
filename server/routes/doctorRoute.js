import express from "express";
import {
  getPatient,
  getAllPatients,
  connectPatient,
  deletePatient,
  declinePatient,
  addPatient,
  getWaitingList,
  getStats,
  acceptPatient,
} from "../controllers/doctorController.js";

const router = express.Router();

router.route("/").post(addPatient).get(getAllPatients);

router.route("/waiting-list").get(getWaitingList);

router.route("/get-stats").get(getStats);

router.route("/:id").get(getPatient).post(connectPatient);

router.route("/delete/:id").delete(deletePatient);
router.route("/decline/:id").delete(declinePatient);
router.route("/accept/:id").delete(acceptPatient);

// chat
router.route("/group").post(createGroupChat);
router.route("/rename").put(createGroupChat);

export default router;
