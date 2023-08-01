import { TbClockHour3 } from "react-icons/tb";
import { GrUserManager, GrUserFemale } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiFillThunderbolt } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";

const PatientCard = ({
  fullName,
  online,
  level,
  gender,
  age,
  detail,
  id,
  handleClick,
  setOpenMoreModal,
}) => {
  const { deleteMyPatient } = useAppContext();

  return (
    <article className="rounded-xl bg-white shadow-lg hover:shadow-xl">
      <header
        className="flex cursor-pointer items-center justify-between border-b-2 border-green-300 py-4 px-6"
        onClick={() => handleClick(id)}
      >
        <div className="flex w-9/12 items-center">
          <div className="avatar">
            <h2 className="uppercase">{fullName[0]}</h2>
          </div>
          <div>
            <h5 className="mb-1 font-bold">{`${fullName.split("-")[0]} ${
              fullName.split("-")[1]
            }`}</h5>
            <div
              className={`flex items-center gap-1  ${
                online === "now" ? "text-green-400" : "text-gray-500"
              }`}
            >
              <TbClockHour3 />
              <h2>
                online: <span className="ml-1">{online}</span>
              </h2>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center gap-2 rounded ${
            level === "Khẩn cấp"
              ? "bg-red-300"
              : level === "Xấu"
              ? "bg-yellow-300"
              : "bg-green-300"
          } p-2`}
        >
          <AiFillThunderbolt />
          <span className="capitalize">{level}</span>
        </div>
      </header>
      <div className="flex items-center gap-36 py-4 px-7">
        <div className="flex items-center gap-2">
          {gender === "Nữ" ? <GrUserFemale /> : <GrUserManager />}
          <span>{gender}</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineUserCircle />
          <span>{age} Tuổi</span>
        </div>
      </div>
      <div className="h-20 max-h-20 py-4 px-7">
        <h2 className="font-bold text-gray-500">{detail ?? "No Detail"}</h2>
      </div>
      <div className="mb-3 flex w-full justify-end">
        <button
          className="mr-7 rounded-md bg-green-100 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => setOpenMoreModal(true)}
        >
          Đơn thuốc
        </button>
        <button
          className="mr-7 rounded-md bg-red-100 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => deleteMyPatient(id)}
        >
          Hủy theo dõi
        </button>
      </div>
    </article>
  );
};

export default PatientCard;
