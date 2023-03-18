const SignInForm = ({ pos }) => {
  return (
    <form
      className={`absolute  flex w-[280px] flex-col gap-6`}
      style={{ transition: ".5s", left: `${pos}px`, top: "180px" }}
    >
      <label htmlFor="username">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Your username or email"
          className="input-field"
          required
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          className="input-field"
          required
        />
      </label>
      <label htmlFor="role">
        <select name="role" id="role" className="input-field">
          <option value="" disabled selected hidden>
            Your role
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </label>
      <label htmlFor="remember">
        <input type="checkbox" name="remember" id="remember" />{" "}
        <span>Remember Password</span>
      </label>
      <button className="submit-btn">Log In</button>
    </form>
  );
};

export default SignInForm;
