import { useState } from "react";
import Card from "./Card";

const cards = [
  {
    num: "01",
    title: "Make Appointmnet",
    para: "It is a long established fact that a reader will be distracted by the readable content of.",
  },
  {
    num: "02",
    title: "Take Treatment",
    para: "It is a long established fact that a reader will be distracted by the readable content of.",
  },
  {
    num: "03",
    title: "Registration",
    para: "It is a long established fact that a reader will be distracted by the readable content of.",
  },
];

const Content = () => {
  return (
    <div className="flex h-2/3 w-full flex-col items-center gap-14">
      <h3 className="w-fit bg-[url('../../../../src/assets/bg-about.png')] px-2 text-lg font-bold text-[#F17732]">
        Working Process
      </h3>
      <h2 className="text-5xl font-bold text-[#1F2278]">How we works</h2>
      <div className="flex gap-12">
        {cards.map((card) => {
          return (
            <Card
              key={card.num}
              num={card.num}
              title={card.title}
              para={card.para}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
