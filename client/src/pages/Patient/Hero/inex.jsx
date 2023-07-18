import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Hero = () => {
  const [t] = useTranslation("global");
  return (
    <main className="mt-40 h-1/2 md:h-1/2">
      <div className="mr-auto ml-auto flex w-3/4 items-center">
        <div className="basis-3/5">
          <h5 className="mt-10 w-[245px] bg-[url('../../../../../src/assets/bg-text.png')] text-sm font-semibold text-[#565ACF] md:w-fit md:text-xl">
            {t("body.provide")}
          </h5>
          <h2 className="my-9 w-fit text-3xl font-bold tracking-wide text-[#1F2278] md:text-5xl">
            {t("body.title")}
          </h2>
          <button className="button-client bg-[#F17732] hover:bg-[#f7813c]">
            <Link to="about">{t("body.readMore")}</Link>
          </button>
        </div>
        <div className="basis-2/5 animate-updown-slow">
          <img src="../../../../src/assets/hero.png" alt="" />
        </div>
      </div>
      <img
        src="../../../../../src/assets/triangle.png"
        alt=""
        className="absolute top-[500px] left-20 -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/round.png"
        alt=""
        className="absolute top-40 left-52 -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/square.png"
        alt=""
        className="absolute top-44 left-[53%] -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/plus.png"
        alt=""
        className="absolute top-[600px] left-[45%] -z-10 animate-updown-fast"
      />
      <img
        src="../../../../../src/assets/wave.png"
        alt=""
        className="absolute top-[600px] left-[82%] -z-10 animate-left-right"
      />
    </main>
  );
};

export default Hero;
