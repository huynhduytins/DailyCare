import { FaCalendarAlt } from "react-icons/fa";

const Card = ({ img, subImg, name, calendar, title }) => {
  return (
    <div className="w-1/4 rounded-lg bg-slate-50 p-5 duration-500 hover:bg-slate-200">
      <img src={img} alt="" className="rounded-lg" />
      <div className="m-5 flex items-center gap-14 text-[#F17732]">
        <div className="flex items-center gap-3">
          <img src={subImg} alt="" className="w-[30px] rounded-full" />
          <p>{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <p>{calendar}</p>
        </div>
      </div>
      <h3 className="mx-5 text-xl font-bold text-[#1F2278]">{title}</h3>
      <button className="m-5 rounded-md border-2 border-[#565ACF] py-2 px-5 text-sm text-[#565ACF] duration-500 hover:bg-[#565ACF] hover:text-white">
        Read More
      </button>
    </div>
  );
};

export default Card;
