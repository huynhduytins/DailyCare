import { TbAmbulance } from "react-icons/tb";
import { TbBed } from "react-icons/tb";
import { BiDonateBlood } from "react-icons/bi";
import { LuSyringe } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <section className="flex h-screen flex-col xl:flex-row xl:items-center xl:justify-center">
      <ul className="mx-w-[730px] relative flex basis-1/2 flex-wrap items-end gap-5 xxl:basis-2/5">
        <li className="">
          <img
            src="../../../../src/assets/pic1.jpg"
            alt=""
            className="h-[254px] w-[254px] rounded-tr-[60px] rounded-br-[60px] rounded-bl-[60px]"
          />
        </li>
        <li className="">
          <img
            src="../../../../src/assets/pic2.jpg"
            alt=""
            className="rounded-bl-[60px] rounded-tl-[60px] rounded-br-[60px]"
          />
        </li>
        <li className="flex w-[254px] justify-end">
          <img
            src="../../../../src/assets/pic3.jpg"
            alt=""
            className="rounded-tl-[60px] rounded-tr-[60px] rounded-br-[60px]"
          />
        </li>
        <li className="relative rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] bg-[#e6e7ff] py-8 px-6 after:absolute after:top-2 after:left-2 after:h-full after:w-full after:rounded-tl-[60px] after:rounded-tr-[60px] after:rounded-bl-[60px] after:border-2 after:border-[#565acf] after:content-['']">
          <p className="text-center text-8xl font-bold text-[#565acf]">5</p>
          <span className="text-lg font-bold text-[#1F2278]">
            <p>{t("body.more.years")}</p>
          </span>
        </li>
      </ul>
      <div className="flex flex-col gap-10 xl:basis-1/2 xxl:basis-2/5">
        <h3 className="w-fit bg-[url('../../../../src/assets/bg-about.png')] px-2 py-1 text-lg font-bold text-[#F17732]">
          {t("body.aboutUs")}
        </h3>
        <h2 className="text-5xl font-semibold text-[#1F2278]">
          {t("body.connect")}
        </h2>
        <p>{t("body.des")}</p>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="flex basis-1/2 items-center gap-5 border-2 border-[#1F2278] p-2 text-[#1F2278]">
              <TbAmbulance className="text-[40px]" />
              <p>{t("body.more.em")}</p>
            </div>
            <div className="flex basis-1/2 items-center gap-5 border-2 border-[#1F2278] p-2 text-[#1F2278]">
              <TbBed className="text-[40px]" />
              <p>{t("body.more.qua")}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex basis-1/2 items-center gap-5 border-2 border-[#1F2278] p-2 text-[#1F2278]">
              <BiDonateBlood className="text-[40px]" />
              <p>{t("body.more.me")}</p>
            </div>
            <div className="flex basis-1/2 items-center gap-5 border-2 border-[#1F2278] p-2 text-[#1F2278]">
              <LuSyringe className="text-[40px]" />
              <p>{t("body.more.best")}</p>
            </div>
          </div>
        </div>
        <button className="button-client w-1/5 min-w-[140px] bg-[#565ACF] hover:bg-[#6065e6]">
          <p>{t("body.more.more")}</p>
        </button>
      </div>
    </section>
  );
};

export default About;
