import { useState } from "react";

const Drop = () => {
  const [show, setShow] = useState(true);
  return (
    <section className="w-1/4 tracking-wide">
      <div
        className="flex cursor-pointer justify-between rounded-lg bg-[#565ACF] py-3 px-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h2 className="font-bold text-white">How Doctor Can Ease Your Pain?</h2>
        <img
          src={`${
            show
              ? "../../../../../src/assets/arrow-up.svg"
              : "../../../../../src/assets/arrow-down.svg"
          }`}
          alt=""
          className="duration-500"
        />
      </div>
      <div
        className={`${
          show ? "" : "hidden h-0"
        } rounded-lg  bg-slate-100 py-3 px-5 transition-all  duration-1000`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam
        deserunt cumque magnam, maiores earum ipsum eligendi necessitatibus
        distinctio libero dolor ab impedit accusantium iure, sint eum nihil nisi
        consequuntur.
      </div>
    </section>
  );
};

export default Drop;
