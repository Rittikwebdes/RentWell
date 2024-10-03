import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import roomsRoute from "./routes/addRooms.route.js";

dotenv.config();
//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST"],
  })
);
const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;

//
export const secretKey = process.env.JWT_SECRET_KEY;

//mongodb connection

try {
  mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error, () => {
    console.error("Failed to connect to MongoDB");
  });
}

//routes
app.use("/user", userRoute);
app.use("/add", roomsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
