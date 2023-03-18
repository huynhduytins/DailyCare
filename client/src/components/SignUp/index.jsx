const SignUpForm = ({ pos }) => {
  return (
    <form
      className={`absolute flex w-[280px] flex-col gap-6`}
      style={{ transition: ".5s", left: `${pos}px`, top: "180px" }}
    >
      <label htmlFor="emailU">
        <input
          type="text"
          name="emailU"
          id="emailU"
          placeholder="Enter your email"
          className="input-field"
          required
        />
      </label>
      <label htmlFor="usernameU">
        <input
          type="text"
          name="usernameU"
          id="usernameU"
          placeholder="Enter Username"
          className="input-field"
          required
        />
      </label>
      <label htmlFor="passwordU">
        <input
          type="password"
          name="passwordU"
          id="passwordU"
          placeholder="Enter Password"
          className="input-field"
          required
        />
      </label>
      <label htmlFor="roleU">
        <select name="roleU" id="roleU" className="input-field">
          <option value="" disabled selected hidden>
            Select your role
          </option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </label>
      <label htmlFor="rememberU">
        <input
          type="checkbox"
          name="rememberU"
          id="rememberU"
          className="bg-green-600 font-[12px]"
          required
        />{" "}
        <span>I agree to the terms of service</span>
      </label>
      <button className="submit-btn">Create An Account</button>
    </form>
  );
};

export default SignUpForm;
