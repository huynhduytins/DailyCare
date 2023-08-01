import { BsFillTelephoneFill } from "react-icons/bs";
import FooterLinks from "./FooterLinks";

const QuickLinks = [
  "About Us",
  "Services",
  "Booking",
  "Faq's",
  "Blogs",
  "Our Team",
];
const ServiceLinks = [
  "Dental Care",
  "Cardiac Clinic",
  "Massege Therapy",
  "Cardiology",
  "Precise Diagnosis",
  "Abmbulance Services",
];

const Footer = () => {
  return (
    <footer className="relative bg-[url('../../../../src/assets/bg-footer.jpg')] bg-no-repeat after:absolute after:-top-12 after:h-[100px] after:w-full after:bg-white after:opacity-75 after:content-['']">
      <div className="m-auto flex w-5/6 justify-around p-20">
        <div className="flex basis-1/6 flex-col justify-between">
          <img
            src="../../../../src/assets/logo2.png"
            alt="logo"
            className="w-44"
          />
          <p>
            There are many in the world who are dying for a piece of bread but
            there are many more dying for a little love
          </p>
          <div className="flex basis-1/4 gap-5">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] bg-[#f17732] ">
              <BsFillTelephoneFill className="text-xl text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#f17732]">Contact Us</p>
              <p className="text-xl font-bold text-[#1F2278]">
                (+84) 999 888 777
              </p>
            </div>
          </div>
        </div>
        <FooterLinks title="Liên kết" links={QuickLinks} />
        <FooterLinks title="Dịch vụ" links={ServiceLinks} />
        <form className="flex basis-1/6 flex-col gap-10">
          <h2 className="text-2xl font-bold text-[#1F2278]">Đăng ký</h2>
          <input
            type="email"
            placeholder="Email Address"
            className="w-5/6 rounded-lg border-none bg-slate-50 py-3 px-5 outline-1 outline-[#565acf]"
          />
          <button
            type="submit"
            className="w-5/6 rounded-lg bg-[#f17732] py-3 px-7 text-white hover:bg-[#fa8541]"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
