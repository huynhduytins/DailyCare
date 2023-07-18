import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import { useTranslation } from "react-i18next";

const Evaluate = () => {
  const [t] = useTranslation("global");

  return (
    <div className="h-screen">
      <h3 className="m-auto w-fit bg-[url('../../../../src/assets/bg-about.png')] px-3 font-bold text-[#F17732]">
        {t("body.evaluate.title")}
      </h3>
      <h2 className="m-auto mt-10 w-1/4 text-center text-4xl font-bold text-[#1F2278]">
        {t("body.evaluate.sub")}
      </h2>
      <div className="mt-16 flex items-center justify-center gap-32">
        <div className="relative h-[478px] w-[454px] max-w-[454px] basis-2/5 bg-[url('../../../../src/assets/bg-evaluate.png')]">
          <img
            src="../../../../src/assets/evaluate-1.jpg"
            alt=""
            className="absolute left-[12.5rem] w-[65px] rounded-full"
          />
          <img
            src="../../../../src/assets/evaluate-2.jpg"
            alt=""
            className="absolute top-[20%] right-5 w-[65px] rounded-full"
          />
          <img
            src="../../../../src/assets/evaluate-3.jpg"
            alt=""
            className="absolute bottom-[24%] right-6 w-[65px] rounded-full"
          />
          <img
            src="../../../../src/assets/evaluate-4.jpg"
            alt=""
            className="absolute bottom-6 left-[12.5rem] w-[65px] rounded-full"
          />
          <img
            src="../../../../src/assets/evaluate-5.jpg"
            alt=""
            className="absolute bottom-[24%] left-7 w-[65px] rounded-full"
          />
          <img
            src="../../../../src/assets/evaluate-6.jpg"
            alt=""
            className="absolute top-[20%] left-5 w-[65px] rounded-full"
          />
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper m-0 w-2/5"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Evaluate;
