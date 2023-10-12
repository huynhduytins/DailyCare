import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";

const Links = [
  { id: 1, text: "Stats", path: "/admin", icon: <IoBarChartSharp /> },
  {
    id: 2,
    text: "All Patients",
    path: "all-patients",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "Add Patient",
    path: "add-patient",
    icon: <FaWpforms />,
  },
  { id: 4, text: "Portfolio", path: "profile", icon: <ImProfile /> },
  {
    id: 6,
    text: "Articles",
    path: "articles",
    icon: <ImNewspaper />,
  },
];

export default Links;
