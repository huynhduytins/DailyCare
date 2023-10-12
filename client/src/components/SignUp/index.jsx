import { BiUser } from "react-icons/bi";
import { VscLockSmall } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserPin } from "react-icons/bi";

import { useAppContext } from "../../context/appContext";

import Alert from "../Alert";

const SignUpForm = ({ pos }) => {
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();

  return (
    <form
      className={`absolute flex w-[280px] flex-col gap-6`}
      style={{ transition: ".5s", left: `${pos}px`, top: "180px" }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = {
          email: formData.get("emailU") ?? "",
          name: formData.get("usernameU") ?? "",
          password: formData.get("passwordU") ?? "",
          role: formData.get("roleU") ?? "",
          agree: formData.get("rememberU") ?? "",
        };
        if (
          !user.email ||
          !user.name ||
          !user.password ||
          !user.role ||
          !user.agree
        ) {
          displayAlert();
          return;
        }
        const { agree, ...other } = user;
        registerUser(other);
      }}
    >
      {showAlert && <Alert />}
      <label htmlFor="emailU" className="relative">
        <input
          type="text"
          name="emailU"
          id="emailU"
          placeholder="Email"
          className="input-field"
        />
        <HiOutlineMail className="icon-login" />
      </label>
      <label htmlFor="usernameU" className="relative">
        <input
          type="text"
          name="usernameU"
          id="usernameU"
          placeholder="Name"
          className="input-field"
        />
        <BiUser className="icon-login" />
      </label>
      <label htmlFor="passwordU" className="relative">
        <input
          type="password"
          name="passwordU"
          id="passwordU"
          placeholder="Password"
          className="input-field"
        />
        <VscLockSmall className="icon-login" />
      </label>
      <label htmlFor="roleU" className="relative">
        <select name="roleU" id="roleU" className="input-field">
          <option value="" disabled selected hidden>
            Role
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
        <BiUserPin className="icon-login" />
      </label>
      <label htmlFor="rememberU">
        <input
          type="checkbox"
          name="rememberU"
          id="rememberU"
          className="bg-green-600 font-[12px]"
        />{" "}
        <span>I agree to the terms</span>
      </label>
      <button className="submit-btn" disabled={isLoading}>
        Create new account
      </button>
    </form>
  );
};

export default SignUpForm;
