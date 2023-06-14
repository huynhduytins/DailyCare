const Card = (props) => {
  return (
    <div
      className={`relative flex min-w-[289px] max-w-[289px] flex-col items-start gap-5 overflow-hidden rounded-3xl bg-[#ff8741] p-10 ${
        props.num === "01" || props.num === "03" ? "mt-5" : ""
      }`}
      onMouseEnter={() => props.setOnMouse(props.num)}
      onMouseLeave={() => props.setOnMouse("")}
    >
      <div className="z-10 stroke-cyan-500 text-center text-7xl font-bold text-slate-50 shadow-black drop-shadow-lg">
        {props.num}
      </div>
      <h2
        className={`z-10 text-xl font-bold duration-500 ${
          props.onMouse === props.num ? "text-[#ff8741]" : "text-slate-50"
        }`}
      >
        {props.title}
      </h2>
      <p className="z-10 text-slate-50">{props.para}</p>
      <button className="z-10 rounded-lg bg-white py-[10px] px-[30px] font-semibold text-[#ff8741] hover:bg-[#fff7f7]">
        View More
      </button>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-red-50 duration-500 ${
          props.onMouse === props.num ? "translate-y-0" : "translate-y-full"
        }`}
      />
    </div>
  );
};

export default Card;
