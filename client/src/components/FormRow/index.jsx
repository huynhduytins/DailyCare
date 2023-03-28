const InputForm = ({ type, name }) => {
  return (
    <div className="relative w-full">
      <label htmlFor={type} className="absolute -top-8">
        {name}
      </label>
      <input
        type="text"
        id={type}
        name={type}
        className="h-9 w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] py-1 px-3 outline-none"
      />
    </div>
  );
};

export default InputForm;
