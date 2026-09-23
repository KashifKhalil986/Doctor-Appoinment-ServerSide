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

app.use(express.json());
app.use(cors({
  origin:[
    "http://localhost:5173",
    "https://doctor-appoinment-git-main-kashifkhalil986s-projects.vercel.app"
  ],
  credentials:true
}));

//api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working ");
});

app.listen(port, () => console.log("server started", port));
