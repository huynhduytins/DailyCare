import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ checked, title, handleActives }) => {
  console.log(checked);
  return (
    <div
      className={`flex w-[500px] items-center gap-5 rounded-lg ${
        checked ? "bg-[#31e949] text-[#268132]" : ""
      } px-5 py-3 text-xl font-bold`}
    >
      <div
        className={`cursor-pointer border-2 border-[${
          checked ? "border-[#268132] bg-[#31e949]" : ""
        }`}
        onClick={() => handleActives(title)}
      >
        <BsCheckLg className={`${checked ? "" : "invisible"}`} />
      </div>
      {title}
    </div>
  );
};

export default Checkbox;
