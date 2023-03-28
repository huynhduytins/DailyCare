import { useState } from "react";

const InputForm = ({ type, name, value, submit, setSubmit }) => {
  const [inputVal, setInputVal] = useState(value);
  return (
    <div className="relative w-full">
      <label htmlFor={type} className="absolute -top-8">
        {name}
      </label>
      <input
        type="text"
        id={type}
        name={type}
        className="h-9 w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] py-1 px-3 outline-blue-300"
        onChange={(e) => {
          setInputVal(e.target.value);
          submit && setSubmit(false);
        }}
        value={inputVal}
      />
    </div>
  );
};

export default InputForm;
