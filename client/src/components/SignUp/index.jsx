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
          placeholder="Tên"
          className="input-field"
        />
        <BiUser className="icon-login" />
      </label>
      <label htmlFor="passwordU" className="relative">
        <input
          type="password"
          name="passwordU"
          id="passwordU"
          placeholder="Mật khẩu"
          className="input-field"
        />
        <VscLockSmall className="icon-login" />
      </label>
      <label htmlFor="roleU" className="relative">
        <select name="roleU" id="roleU" className="input-field">
          <option value="" disabled selected hidden>
            Vai trò
          </option>
          <option value="Doctor">Bác sĩ</option>
          <option value="Patient">Bệnh nhân</option>
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
        <span>Tôi đồng ý với điều khoản</span>
      </label>
      <button className="submit-btn" disabled={isLoading}>
        Tạo tài khoản
      </button>
    </form>
  );
};

export default SignUpForm;
