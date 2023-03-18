import { AiFillTwitterCircle } from "react-icons/ai";
import {
  BsFacebook,
  BsShieldCheck,
  BsFillClipboardCheckFill,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

// Slides
import { Carousel } from "antd";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

import { useState } from "react";
import SignInForm from "../../components/Signin";
import SignUpForm from "../../components/SignUp";

const Login = () => {
  const [typeForm, setTypeForm] = useState("Login");

  const [pos, setPos] = useState({ btn: 0, login: 50, signUp: 450 });

  const handleLoginForm = () => {
    setPos({ btn: 0, login: 50, signUp: 450 });
    setTypeForm("Login");
  };

  const handleSignUpForm = () => {
    setPos({ btn: 111, login: -400, signUp: 50 });
    setTypeForm("SignUp");
  };

  return (
    <div className=" flex flex-col sm:flex-row lg:flex-row">
      <div className="flex h-[100vh] w-full items-center justify-center sm:w-1/2 lg:w-1/2 ">
        <div className="relative h-[550px] w-[380px] overflow-hidden">
          <div className="relative  mx-auto mb-9  w-fit rounded-[30px] font-semibold shadow-2xl">
            <div
              className={`m-x[35px] absolute top-0 my-auto h-full w-[110px] rounded-[30px] bg-green-600`}
              style={{ transition: ".5s", left: `${pos.btn}px` }}
            ></div>
            <button
              type="button"
              className={`toggle-btn ${typeForm === "Login" && "text-white"}`}
              style={{ transition: ".5s" }}
              onClick={handleLoginForm}
            >
              Log In
            </button>
            <button
              type="button"
              className={`toggle-btn ${typeForm !== "Login" && "text-white"}`}
              style={{ transition: ".5s" }}
              onClick={handleSignUpForm}
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center gap-5">
            <BsFacebook className="h-8 w-8  text-blue-600" />
            <FcGoogle className="h-9 w-9" />
            <AiFillTwitterCircle className="h-9 w-9 text-blue-500" />
          </div>
          <SignInForm pos={pos.login} />
          <SignUpForm pos={pos.signUp} />
        </div>
      </div>
      <div className=" flex h-[100vh] w-full flex-col justify-start bg-green-600  text-white sm:w-1/2 lg:w-1/2">
        <div className="mt-32 flex h-1/5 w-full flex-col items-center gap-3 ">
          <h2 className="text-3xl font-bold">Hello, User!</h2>
          <div className="inline-block w-10 border-2 border-white"></div>
          <p className="py-5 px-20 text-center text-2xl font-bold">
            We are providing many useful healthcare services for both patients
            and doctors{" "}
          </p>
        </div>
        <Carousel autoplay>
          <div>
            <div className="slider">
              <GiAlarmClock className="h-14 w-14" />
              <h2>Fast</h2>
            </div>
          </div>
          <div>
            <div className="slider">
              <MdOutlineConnectWithoutContact className="h-14 w-14" />
              <h2>Convenient</h2>
            </div>
          </div>
          <div>
            <div className="slider">
              <BsFillClipboardCheckFill className="h-14 w-14" />
              <h2>Safe</h2>
            </div>
          </div>
          <div>
            <div className="slider">
              <BsShieldCheck className="h-14 w-14" />
              <h2>Exact</h2>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Login;
