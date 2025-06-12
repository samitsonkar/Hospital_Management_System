import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  getPatientAppointments,
  postAppointment,
  updateAppointmentStatus,
  updateVisitedStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getmy", isPatientAuthenticated, getPatientAppointments);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.put("/update/visited/:id", isAdminAuthenticated, updateVisitedStatus);

export default router;
