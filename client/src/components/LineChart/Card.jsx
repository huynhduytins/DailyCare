const Card = () => {
  return (
    <div className="flex w-[500px] items-center justify-between rounded-tl-2xl rounded-tr-2xl bg-[#ceecff] px-5 py-2 shadow-lg">
      <div>
        <p className="font-bold text-[#36aff7]">Celecoxib</p>
        <p>60 pills</p>
      </div>
      <em>Take 3 pills after each meal</em>
    </div>
  );
};

export default Card;
