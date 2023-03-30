import fs from "fs/promise";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Patient from "./modules/Patient.js";
import User from "./modules/User.js";
import Doctor from "./modules/Doctor.js";

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URL);
    const jsonData = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );
    console.log(jsonData);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
