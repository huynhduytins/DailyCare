import { useAppContext } from "../../context/appContext";

const Alert = ({ info }) => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`${!info && "absolute -top-14"} w-full rounded ${
        alertType === "danger" ? "bg-red-200" : "bg-green-300"
      } py-2 text-center font-bold text-gray-600`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
