import { useAppContext } from "../../context/appContext";
import WaitingCard from "./WaitingCard";

const WaitingComponent = () => {
  const { waitingList } = useAppContext();

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center">
      <h2 className="my-10 w-10/12 text-xl font-bold">
        Bệnh nhân yêu cầu kết nối: <span>{waitingList.length}</span>
      </h2>
      <div className="grid w-10/12 grid-cols-1 gap-5 lg:grid-cols-2">
        {waitingList.map((el) => (
          <WaitingCard
            key={el._id}
            id={el._id}
            fullName={`${el.firstName}-${el.lastName}`}
            gender={el.gender}
            age={el.age}
          />
        ))}
      </div>
    </div>
  );
};

export default WaitingComponent;
