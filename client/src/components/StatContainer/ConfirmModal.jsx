import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";
import { useRef, useState } from "react";

const ConfirmModal = ({ setOpenModal, handleCancel }) => {
  const [alert, setAlert] = useState(false);
  const inputRef = useRef();

  const handleSubmit = () => {
    if (inputRef?.current?.value) {
      handleCancel();
      setOpenModal(false);
    } else {
      setAlert(true);
      inputRef.current.focus();
      setTimeout(() => {
        setAlert(false);
      }, 2500);
    }
  };

  return (
    <Modal>
      <div className="relative h-[350px] w-[600px] overflow-auto rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        {alert && (
          <div
            className={`w-full rounded bg-red-200 py-2 text-center font-bold text-gray-600`}
          >
            Please Enter Message
          </div>
        )}
        <h2 className="mt-3 mb-1 font-bold">Message</h2>
        <textarea
          name=""
          id=""
          ref={inputRef}
          className="h-32 w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] p-2 outline-blue-300"
        ></textarea>
        <button
          className="absolute bottom-4 -right-[80px] mr-28 rounded-md bg-green-200 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={handleSubmit}
        >
          OK
        </button>
        <button
          className="absolute bottom-4 right-0 mr-28 rounded-md bg-red-200 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
