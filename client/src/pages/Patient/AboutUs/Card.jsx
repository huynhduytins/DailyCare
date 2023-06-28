const Card = ({ num, title, des }) => {
  return (
    <div className="min-w-[200px ]  relative rounded-xl bg-white py-[50px] px-[30px] after:absolute after:-top-3 after:-left-3 after:h-full after:w-full after:rounded-xl after:border-2 after:border-[#1f2278] after:content-['']">
      <h2 className="mb-2 text-6xl font-bold text-[#f17732]">{num}</h2>
      <h2 className="mb-3 text-xl font-bold text-[#1f2278]">{title}</h2>
      <p className="text-[0.875rem]">{des}</p>
    </div>
  );
};

export default Card;
