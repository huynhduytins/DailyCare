import { StatusCodes } from "http-status-codes";
import User from "../modules/User.js";
import Doctor from "../modules/Doctor.js";
import Patient from "../modules/Patient.js";

// RESISTERS
export const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  if (!name || !email || !password || !role) {
    throw new Error("Please provide all values");
  }

  const user = await User.create({ name, email, password, role });

  if (user.role === "Doctor") {
    const doctor = await Doctor.create({ userId: user._id });
    console.log(doctor);
  } else {
    const patient = await Patient.create({ userId: user._id });
    console.log(patient);
  }

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: { email: user.email, username: user.name, role: user.role },
    token,
  });
};

// LOGINS
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Email or Password is invalid." });

    const isMatch = await user.comparePassword(password);

    if (!isMatch || role !== user.role)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Email or Password is invalid." });

    let infoUser;

    if (role === "Doctor") {
      infoUser = await Doctor.findOne({ userId: user._id });
    } else {
      infoUser = await Patient.findOne({ userId: user._id });
    }
    const token = user.createJWT();

    res.status(StatusCodes.OK).json({
      user: { email: user.email, username: user.name, role: user.role },
      token,
      infoUser: {
        firstName: infoUser.firstName,
        lastName: infoUser.lastName,
        specialist: infoUser.specialist,
        address: infoUser.address,
        phone: infoUser.phone,
        age: infoUser.age,
        degree: infoUser.degree,
      },
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    if (req.user.role === "Doctor") {
      const updatedUser = await Doctor.findOneAndUpdate(
        {
          userId: req.user.userId,
        },
        req.body,
        { new: true, runValidators: true }
      );
      res.status(StatusCodes.OK).json(updatedUser);
    } else {
      const updatedUser = await Patient.findOneAndUpdate(
        {
          userId: req.user.userId,
        },
        req.body,
        { new: true, runValidators: true }
      );
      res.status(StatusCodes.OK).json(updatedUser);
    }
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
