import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";

const app = express();

const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://doctor-appoinment.vercel.app",
  "https://doctor-appoinment-git-main-kashifkhalil986s-projects.vercel.app",
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
].filter(Boolean);

app.use(express.json());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working ");
});

app.listen(port, () => console.log("server started", port));
