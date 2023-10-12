import { useAppContext } from "../../context/appContext";
import { FaCalendarAlt } from "react-icons/fa";

const DetailArticle = () => {
  const { detail } = useAppContext();

  return (
    <div className="flex min-w-[420px] justify-center">
      <div className="my-10 flex w-11/12 min-w-[380px] flex-col items-center bg-white p-10">
        <h2 className="mb-10 text-2xl font-bold">{detail.title}</h2>
        <div className="mb-10 mr-28 flex w-full items-center justify-end gap-2">
          <img
            src={detail.subImg}
            alt=""
            className="h-[30px] w-[30px] rounded-full"
          />
          <p className="font-semibold">{detail.name}</p>
        </div>
        <img src={detail.img} alt="" />
        <div className="mx-10 mt-10 flex flex-col gap-5">
          <p className=" text-justify">{detail.p1}</p>
          <p className=" text-justify">{detail.p2}</p>
          <p className=" text-justify">{detail.p3}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
