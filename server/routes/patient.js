import express from "express";
import {
  getDoctor,
  getAllDoctor,
  getMyDoctors,
  addRemoveDoctor,
} from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

// READ
router.get("/:id", verifyToken, getDoctor);

router.get("/:id/my-doctors", verifyToken, getMyDoctors);

router.get("/doctors", verifyToken, getAllDoctor);

// UPDATE
router.patch("/:id/addRemoveDoctor", verifyToken, addRemoveDoctor);
