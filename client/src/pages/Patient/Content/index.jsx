import { useState } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";

const Content = () => {
  const [t] = useTranslation("global");

  const cards = [
    {
      num: "01",
      title: t("body.work.1"),
      para: t("body.work.sub1"),
    },
    {
      num: "02",
      title: t("body.work.2"),
      para: t("body.work.sub2"),
    },
    {
      num: "03",
      title: t("body.work.3"),
      para: t("body.work.sub3"),
    },
  ];
  return (
    <div className="mb-44 hidden h-2/3 w-full flex-col items-center gap-14 md:flex">
      <h3 className="w-fit bg-[url('../../../../src/assets/bg-about.png')] px-2 text-lg font-bold text-[#F17732]">
        {t("body.work.title")}
      </h3>
      <h2 className="text-5xl font-bold text-[#1F2278]">
        {t("body.work.sub")}
      </h2>
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
