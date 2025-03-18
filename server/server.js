import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
dotenv.config();

const allowedOrigins = [
  "http://localhost:3000",
  "https://mern-authentication-system-ten.vercel.app",
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// APIs Endpoints
app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json("API is running");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
