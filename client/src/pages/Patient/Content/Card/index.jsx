import { useState } from "react";

const Card = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative flex min-w-[289px] max-w-[289px] flex-col items-start gap-5 overflow-hidden rounded-3xl bg-[#ff8741] p-10 ${
        props.num === "01" || props.num === "03" ? "mt-5" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`z-10 stroke-cyan-500 text-center text-7xl font-bold shadow-black drop-shadow-lg duration-500  ${
          hover ? "text-[#ff8741]" : "text-slate-50"
        }`}
      >
        {props.num}
      </div>
      <h2
        className={`z-10 text-xl font-bold duration-500 ${
          hover ? "text-[#ff8741]" : "text-slate-50"
        }`}
      >
        {props.title}
      </h2>
      <p
        className={`z-10 duration-500  ${
          hover ? "text-[#ff8741]" : "text-slate-50"
        }`}
      >
        {props.para}
      </p>
      <button
        className={`z-10 rounded-lg py-[10px] px-[30px] font-semibold duration-500 hover:bg-[#ff995d] ${
          hover ? "bg-[#ff8741] text-white" : "bg-white text-[#ff8741]"
        }`}
        onClick={() => console.log("hello")}
      >
        View More
      </button>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-red-50 duration-500 ${
          hover ? "translate-y-0" : "-translate-y-full"
        }`}
      />
    </div>
  );
};

export default Card;
