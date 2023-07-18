import Card from "./Card";

import firstImg from "../../../../src/assets/news-1.jpg";
import secondImg from "../../../../src/assets/news-2.jpg";
import thirdImg from "../../../../src/assets/news-3.jpg";
import subFirst from "../../../../src/assets/evaluate-1.jpg";
import subSecond from "../../../../src/assets/evaluate-2.jpg";
import subThird from "../../../../src/assets/evaluate-3.jpg";
import { useTranslation } from "react-i18next";

const articles = [
  {
    img: firstImg,
    name: "Elisa Moyna",
    calendar: "18 May 2023",
    title: "Health Will Be A Thing Of The Past And Here's Why ",
    subImg: subFirst,
  },
  {
    img: secondImg,
    name: "John Nas",
    calendar: "18 June 2023",
    title: "In this hospital there are special surgeon",
    subImg: subSecond,
  },
  {
    img: thirdImg,
    name: "Peter Parker",
    calendar: "23 June 2023",
    title: "Can you get a diflucan prescription online?",
    subImg: thirdImg,
  },
];

const News = () => {
  const [t] = useTranslation("global");

  return (
    <div className="h-screen">
      <h3 className="m-auto w-fit bg-[url('../../../../src/assets/bg-about.png')] px-3 font-bold text-[#F17732]">
        {t("body.blog.title")}
      </h3>
      <h2 className="m-auto mt-10 w-2/5 text-center text-4xl font-bold text-[#1F2278]">
        {t("body.blog.sub")}
      </h2>
      <div className="m-auto mt-20 flex w-5/6 justify-center gap-10 overflow-hidden">
        {articles.map((article) => (
          <Card
            img={article.img}
            subImg={article.subImg}
            title={article.title}
            calendar={article.calendar}
            name={article.name}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
