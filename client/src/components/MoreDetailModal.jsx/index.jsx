import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";
import { useAppContext } from "../../context/appContext";
import CurrentPres from "../LineChart/CurrentPres";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MoreDetailModal = ({ setOpenModal, patient }) => {
  const { username } = useAppContext();

  return (
    <Modal>
      <div className="relative h-[85vh] w-[800px] overflow-auto rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        <h1 className="hidden text-center text-2xl font-bold tracking-wide md:block">
          Prescription
        </h1>
        <div className="mx-72 mt-14 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Doctor</h2>
          <p>{username}</p>
        </div>
        {patient && (
          <div className="mx-72 mt-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Patient</h2>
            <p>{patient}</p>
          </div>
        )}
        <div className="flex flex-col items-center">
          <CurrentPres />
        </div>
        <AiOutlinePlusCircle
          className="m-auto mt-10 cursor-pointer text-2xl"
          title=""
          onClick={() => {
            setAdd(true);
          }}
        />
      </div>
    </Modal>
  );
};

export default MoreDetailModal;
