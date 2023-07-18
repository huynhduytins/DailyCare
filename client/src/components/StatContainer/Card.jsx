import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { useAppContext } from "../../context/appContext";
import ResModal from "./ResModal";

const Card = ({ name, date, handleCancel }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openResModal, setOpenResModal] = useState(false);

  return (
    <>
      <div className="relative flex h-[180px] w-[500px] items-center justify-between rounded-lg bg-white px-10 pt-5 shadow-lg">
        <div className="flex flex-col items-center gap-5">
          <div className="avatar m-0">
            <h2 className="uppercase">{name[0]}</h2>
          </div>
          <h2> {name}</h2>
        </div>
        <div className="mb-16 flex flex-col gap-5 text-end">
          <em className="font-thin">{date.when}</em>
          <div>
            <h3>{date.day}</h3>
            <h3>{date.hour}</h3>
          </div>
        </div>
        <button
          className="absolute bottom-4 right-3 mr-28 rounded-md bg-green-200 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => setOpenResModal(true)}
        >
          Reschedule
        </button>
        <button
          className="absolute bottom-4 right-3 mr-7 rounded-md bg-red-100 py-[6px] px-3 shadow-md hover:shadow-lg"
          onClick={() => {
            setOpenConfirmModal(true);
          }}
        >
          Cancel
        </button>
      </div>
      {openConfirmModal && (
        <ConfirmModal
          setOpenModal={setOpenConfirmModal}
          handleCancel={() => handleCancel(name)}
        />
      )}
      {openResModal && <ResModal setOpenModal={setOpenResModal} />}
    </>
  );
};

export default Card;
