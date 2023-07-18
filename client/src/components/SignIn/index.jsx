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
          placeholder="Email"
          className="input-field"
        />
        <HiOutlineMail className="icon-login" />
      </label>
      <label htmlFor="password" className="relative">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mật khẩu"
          className="input-field"
        />
        <VscLockSmall className="icon-login" />
      </label>
      <label htmlFor="role" className="relative">
        <select name="role" id="role" className="input-field">
          <option value="" disabled selected hidden>
            Vai trò
          </option>
          <option value="Doctor">Bác sĩ</option>
          <option value="Patient">Bệnh nhân</option>
        </select>
        <BiUserPin className="icon-login" />
      </label>
      <label htmlFor="remember">
        <input type="checkbox" name="remember" id="remember" />{" "}
        <span>Nhớ mật khẩu</span>
      </label>
      <button className="submit-btn" disabled={isLoading}>
        Đăng nhập
      </button>
    </form>
  );
};

export default SignInForm;
