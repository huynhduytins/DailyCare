import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const Links = [
  { id: 1, text: "stats", path: "/admin", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "add patient",
    path: "add-patient",
    icon: <FaWpforms />,
  },
  {
    id: 3,
    text: "all patients",
    path: "all-patients",
    icon: <MdQueryStats />,
  },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
];

export default Links;
