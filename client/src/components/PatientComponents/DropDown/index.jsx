const DropDown = ({ hover }) => {
  return (
    <div
      className={`absolute ${
        hover ? "top-[102px]" : "invisible top-[120px]"
      } bg-white py-5 pl-5 pr-14 text-black shadow-lg duration-150`}
    >
      <ul className="flex flex-col gap-8">
        <li className="cursor-pointer hover:text-[#1f2278]">About Us</li>
        <li className="cursor-pointer hover:text-[#1f2278]">Booking</li>
        <li className="cursor-pointer hover:text-[#1f2278]">FAQ's</li>
      </ul>
    </div>
  );
};

export default DropDown;
