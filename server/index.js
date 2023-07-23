import cors from "cors";
import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/connect.js";
dotenv.config();

import authRouter from "./routes/authRoute.js";
import doctorRouter from "./routes/doctorRoute.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import notFoundMiddleware from "./middleware/notFound.js";
import authenticateUser from "./middleware/auth.js";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": "ccd44c80-6199-44dc-b264-0cb3b088a0ed" },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(e.response.data);
  }
});

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
