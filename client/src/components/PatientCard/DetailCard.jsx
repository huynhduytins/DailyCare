import { FiArrowUpRight } from "react-icons/fi";

const DetailCard = ({ title, dv }) => {
  return (
    <div className="flex w-[350px] justify-center gap-5 rounded-2xl bg-[#4f54ec] py-16 text-white">
      <h2 className="text-5xl font-bold ">{title} </h2>
      <div>
        <FiArrowUpRight className="text-2xl font-bold" />
        <p className="font-bold">{dv} </p>
      </div>
    </div>
  );
};

export default DetailCard;
