import cors from "cors";
import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connect.js";
dotenv.config();

import authRouter from "./routes/authRoute.js";
import doctorRouter from "./routes/patientRoute.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import notFoundMiddleware from "./middleware/notFound.js";
import authenticateUser from "./middleware/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => res.send({ msg: "hello from backend" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/doctors", authenticateUser, doctorRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log("Server running at", port));
  } catch (error) {
    console.log(error);
  }
};

start();
