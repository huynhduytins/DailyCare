import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = () => {
  return (
    <div className="p-20">
      <div className="relative rounded-b-[40px] rounded-tl-[40px] bg-[#F17732] p-10 text-lg text-white">
        <p className="italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          illum magnam officiis ipsam quibusdam architecto, earum voluptatibus
          aperiam, soluta ad aut iure, minus nostrum iusto facilis nemo
          reprehenderit sapiente ratione!
        </p>
        <h2 className="mt-8 text-xl font-bold">John Deo</h2>
        <p className="mt-2 text-sm font-bold">PATIENT</p>
        <div className="absolute -top-12 rounded-2xl bg-white p-5 shadow-lg">
          <FaQuoteLeft className=" text-3xl font-bold text-[#F17732]" />
        </div>
        <FaQuoteRight className="absolute bottom-5 right-10 text-7xl text-[#ffc6a6]" />
      </div>
    </div>
  );
};

export default Card;
