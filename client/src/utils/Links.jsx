import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";

const Links = [
  { id: 1, text: "Thống kê", path: "/admin", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "Tất cả bệnh nhân",
    path: "all-patients",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "Thêm bệnh nhân",
    path: "add-patient",
    icon: <FaWpforms />,
  },
  { id: 4, text: "Hồ sơ", path: "profile", icon: <ImProfile /> },
  {
    id: 5,
    text: "Tin nhắn",
    path: "message",
    icon: <BsFillChatSquareTextFill />,
  },
  {
    id: 6,
    text: "Bài báo y tế",
    path: "articles",
    icon: <ImNewspaper />,
  },
];

export default Links;
