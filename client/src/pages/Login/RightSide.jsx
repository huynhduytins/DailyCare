import { Carousel } from "antd";

import { BsShieldCheck, BsFillClipboardCheckFill } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const RightSide = () => {
  return (
    <div className=" flex h-[100vh] w-full flex-col justify-start bg-green-600  text-white sm:w-1/2 lg:w-1/2">
      <div className="mt-32 flex h-1/5 w-full flex-col items-center gap-3 ">
        <h2 className="text-3xl font-bold">Xin chào, người dùng!</h2>
        <div className="inline-block w-10 border-2 border-white"></div>
        <p className="py-5 px-20 text-center text-2xl font-bold">
          Chúng tôi cung cấp các giải pháp tiện ích cho cả bác sĩ và bệnh nhân{" "}
        </p>
      </div>
      <Carousel autoplay>
        <div>
          <div className="slider">
            <GiAlarmClock className="h-14 w-14" />
            <h2>Nhanh chóng</h2>
          </div>
        </div>
        <div>
          <div className="slider">
            <MdOutlineConnectWithoutContact className="h-14 w-14" />
            <h2>Tiện lợi</h2>
          </div>
        </div>
        <div>
          <div className="slider">
            <BsShieldCheck className="h-14 w-14" />
            <h2>An toàn</h2>
          </div>
        </div>
        <div>
          <div className="slider">
            <BsFillClipboardCheckFill className="h-14 w-14" />
            <h2>Chính xác</h2>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default RightSide;
