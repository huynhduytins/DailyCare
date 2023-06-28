const DoctorCard = ({ img, name, work }) => {
  return (
    <div className="flex w-[320px] max-w-[320px] flex-col items-center gap-8 rounded-2xl border-2 p-10 duration-150 hover:scale-105 hover:shadow-xl">
      <img src={img} alt="" className="w-[180px] max-w-[180px] rounded-2xl" />
      <h2 className="text-2xl font-bold text-[#1f2278]">{name}</h2>
      <p className="font-bold text-[#f17732]">{work}</p>
      <button className="rounded-lg bg-[#565acf] px-8 py-3 font-bold text-white">
        More Detail
      </button>
    </div>
  );
};

export default DoctorCard;
