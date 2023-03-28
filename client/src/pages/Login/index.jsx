import { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/appContext";

const Login = () => {
  const { email, role } = useAppContext();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (email) {
      if (role === "Doctor") {
        setTimeout(() => navigate("/admin"), 3000);
      } else {
        setTimeout(() => navigate("/user"), 3000);
      }
    }
  }, [email, navigate]);

  return (
    <div className=" flex flex-col sm:flex-row lg:flex-row">
      <LeftSide
        pos={pos}
        typeForm={typeForm}
        handleLoginForm={handleLoginForm}
        handleSignUpForm={handleSignUpForm}
      />
      <RightSide />
    </div>
  );
};

export default Login;
