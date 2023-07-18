import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";
import Detail from "./Detail";
import LineChartPatient from "../LineChart";

const DetailPatient = ({ setOpenModal, info }) => {
  return (
    <Modal>
      <div className="relative h-[85vh] w-[900px] overflow-auto rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        <h1 className="hidden text-center text-2xl font-bold tracking-wide md:block">
          Patient Details
        </h1>
        <div className="mt-12 flex flex-col items-center">
          <div className="avatar">
            <h2 className="uppercase">{info.firstName[0]}</h2>
          </div>
        </div>
        <Detail info={info} />
        <LineChartPatient />
      </div>
    </Modal>
  );
};

export default DetailPatient;
