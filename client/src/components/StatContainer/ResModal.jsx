import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const ResModal = ({ setOpenModal }) => {
  return (
    <Modal>
      <div className="relative h-[280px] w-[600px] overflow-auto rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        <div className="mx-14 mt-5 flex items-center gap-10">
          <h2>Date:</h2>
          <input
            type="date"
            id=""
            name=""
            className="w-[300px] cursor-pointer border-2 py-2 px-5  outline-none"
            defaultValue={"02/07/2023"}
          />
        </div>
        <div className="mx-14 mt-5 flex items-center gap-10">
          <h2>Hour:</h2>
          <input
            type="text"
            className="w-[300px] cursor-pointer border-2 py-2 px-5 outline-none"
          />
        </div>
        <button
          className="absolute bottom-4 right-3 mr-7 rounded-md bg-green-100 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => {
            setOpenConfirmModal(true);
          }}
        >
          OK
        </button>
      </div>
    </Modal>
  );
};

export default ResModal;
