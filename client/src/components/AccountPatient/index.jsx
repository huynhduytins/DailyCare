import { FaTimes } from "react-icons/fa";
import Modal from "../Modal";

const AccountPatient = ({ patientAccount, setOpenModal }) => {
  return (
    <Modal>
      <div className="relative flex h-[35vh] w-[35vw] flex-col items-center rounded-lg bg-white py-16 px-8">
        <button
          className="absolute top-4 left-4 border-transparent bg-transparent text-2xl text-red-900"
          onClick={() => setOpenModal(false)}
        >
          <FaTimes />
        </button>
        <h1 className="hidden text-2xl font-bold tracking-wide md:block">
          Tài khoản bệnh nhân
        </h1>
        <div className="mt-12">
          <div className="flex flex-col md:flex-row md:gap-5">
            <h2>Email:</h2>
            <span className="font-semibold md:ml-8">
              {patientAccount.email}
            </span>
          </div>
          <div className="mt-2 flex flex-col md:mt-0 md:flex-row md:gap-5">
            <h2>Mật khẩu:</h2>
            <span className="font-semibold ">111111</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AccountPatient;
