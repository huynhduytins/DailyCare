import { GrUserManager, GrUserFemale } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useAppContext } from "../../context/appContext";

const WaitingCard = ({ fullName, gender, age, id }) => {
  const { deleteMyPatient } = useAppContext();

  return (
    <article className="h-[165px] rounded-xl bg-white shadow-lg hover:shadow-xl">
      <header className="flex items-center justify-between border-b-2 border-green-300 py-4 px-6">
        <div className="flex  items-center">
          <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-green-500 text-2xl font-bold uppercase text-white">
            <h2 className="uppercase">{fullName[0]}</h2>
          </div>
          <div>
            <h5 className="mb-1 font-bold">{fullName}</h5>
          </div>
        </div>
        <div className="flex w-[38%] flex-col items-start">
          <div className="flex items-center gap-2">
            {gender === "Male" ? <GrUserManager /> : <GrUserFemale />}
            <span>{gender}</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineUserCircle />
            <span>{age} years-old</span>
          </div>
        </div>
      </header>
      <div className="mt-4 flex w-full justify-end">
        <button
          className="mr-7 rounded-md bg-green-200 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => deleteMyPatient(id, "accept")}
        >
          Accept
        </button>
        <button
          className="mr-7 rounded-md bg-red-100 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => deleteMyPatient(id, "decline")}
        >
          Decline
        </button>
      </div>
    </article>
  );
};

export default WaitingCard;
