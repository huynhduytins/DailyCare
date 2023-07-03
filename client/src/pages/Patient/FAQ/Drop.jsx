const Drop = ({ question, hanldeActive, active, idx }) => {
  return (
    <section className="w-[500px] tracking-wide">
      <div
        className={`flex cursor-pointer justify-between rounded-lg bg-[#565ACF] py-4 px-6 duration-300 ${
          active ? "bg-[#f7813c]" : ""
        }`}
        onClick={() => {
          if (active) {
            hanldeActive(-1);
          } else {
            hanldeActive(idx);
          }
        }}
      >
        <h2 className="font-bold text-white">{question.title}</h2>
        <img
          src={`${
            active
              ? "../../../../../src/assets/arrow-up.svg"
              : "../../../../../src/assets/arrow-down.svg"
          }`}
          alt=""
          className="duration-500"
        />
      </div>
      <div
        className={`${
          active ? "py-3 px-5" : "h-0 py-0"
        } rounded-lg bg-slate-100 transition-all duration-300`}
      >
        {active && <p>{question.content}</p>}
      </div>
    </section>
  );
};

export default Drop;
