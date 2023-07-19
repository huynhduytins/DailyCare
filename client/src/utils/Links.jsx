import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

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
  { id: 5, text: "Message", path: "message", icon: <ImProfile /> },
];

export default Links;
