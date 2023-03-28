import { VscLockSmall } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserPin } from "react-icons/bi";

import { useAppContext } from "../../context/appContext";

import Alert from "../Alert";

const SignInForm = ({ pos }) => {
  const { isLoading, showAlert, displayAlert, loginUser } = useAppContext();

  return (
    <form
      className={`absolute  flex w-[280px] flex-col gap-6`}
      style={{ transition: ".5s", left: `${pos}px`, top: "180px" }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          email: formData.get("email") ?? "",
          password: formData.get("password") ?? "",
          role: formData.get("role") ?? "",
          remember: formData.get("remember") ?? "",
        };
        if (!obj.email || !obj.password || !obj.role) {
          displayAlert();
          return;
        }
        const { remember, ...other } = obj;
        loginUser(other);
      }}
    >
      {showAlert && <Alert />}
      <label htmlFor="email" className="relative">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          className="input-field"
        />
        <HiOutlineMail className="icon-login" />
      </label>
      <label htmlFor="password" className="relative">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
          className="input-field"
        />
        <VscLockSmall className="icon-login" />
      </label>
      <label htmlFor="role" className="relative">
        <select name="role" id="role" className="input-field">
          <option value="" disabled selected hidden>
            Your role
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
        <BiUserPin className="icon-login" />
      </label>
      <label htmlFor="remember">
        <input type="checkbox" name="remember" id="remember" />{" "}
        <span>Remember Password</span>
      </label>
      <button className="submit-btn" disabled={isLoading}>
        Log In
      </button>
    </form>
  );
};

export default SignInForm;
