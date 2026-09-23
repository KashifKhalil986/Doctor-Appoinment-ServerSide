import express from "express";
import authAdmin from "../middlewares/authAdmin.js";
import {
  addDoctor,
  allDoctors,
  loginAdmin,appointmentsAdmin, appointmentCancelAdmin, adminDashboard
} from "../controllers/adminController.js";
import { changeAvailability } from "../controllers/doctorController.js";
const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, addDoctor);
adminRouter.post("/admin-login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentsAdmin);
adminRouter.post("/cancel-appointment", authAdmin,appointmentCancelAdmin);
adminRouter.get("/dashboard", authAdmin, adminDashboard);
export default adminRouter;
