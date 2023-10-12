import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logo from "./../../assets/logo.svg";

import SignInForm from "../../components/SignIn";
import SignUpForm from "../../components/SignUp";

const LeftSide = ({ pos, typeForm, handleLoginForm, handleSignUpForm }) => {
  return (
    <div className="relative flex min-h-[100vh] w-full items-center justify-center sm:w-1/2 lg:w-1/2 ">
      <img
        src={logo}
        alt=""
        className=" absolute top-7 left-10 hidden w-56 cursor-pointer sm:block"
      />
      <div className="relative mt-16 h-[575px] w-[380px] overflow-hidden">
        <div className="relative  mx-auto mb-9  w-fit rounded-[30px] font-semibold shadow-2xl">
          <div
            className={`m-x[35px] absolute top-0 my-auto h-full w-[115px] rounded-[30px] bg-green-600`}
            style={{ transition: ".5s", left: `${pos.btn}px` }}
          />
          <button
            type="button"
            className={`toggle-btn ${typeForm === "Login" && "text-white"}`}
            style={{ transition: ".5s" }}
            onClick={handleLoginForm}
          >
            Log in
          </button>
          <button
            type="button"
            className={`toggle-btn ${typeForm !== "Login" && "text-white"}`}
            style={{ transition: ".5s" }}
            onClick={handleSignUpForm}
          >
            Sign up
          </button>
        </div>
        <div className="flex items-center justify-center gap-5">
          <BsFacebook className="h-8 w-8  cursor-pointer text-blue-600" />
          <FcGoogle className="h-9 w-9 cursor-pointer" />
          <AiFillTwitterCircle className="h-9 w-9 cursor-pointer text-blue-500" />
        </div>
        <SignInForm pos={pos.login} />
        <SignUpForm pos={pos.signUp} />
      </div>
    </div>
  );
};

export default LeftSide;
