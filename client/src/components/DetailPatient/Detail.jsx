import LineChartPatient from "../LineChart";

const Detail = ({ info }) => {
  return (
    <div className="mx-5">
      <div className="mt-9 flex w-full justify-between">
        <div className="flex w-[65%] items-center gap-5">
          <h2 className="font-bold">Name</h2>
          <span className="invisible">ssss</span>
          <input
            type="text"
            className="input-field w-[230px] py-2 pl-0 text-center"
            value={`${info.firstName ?? ""} ${
              info.lastName ? ` - ${info.lastName}` : ""
            }`}
            disabled
          />
        </div>
        <div className="flex w-1/4 items-center justify-between">
          <h2 className="font-bold">
            Age<span className="invisible">sss</span>
          </h2>
          <input
            type="text"
            className="input-field w-[50px] py-2 pl-0 text-center"
            value={`${info.age ?? ""}`}
            disabled
          />
        </div>
      </div>
      <div className="mt-9 flex w-full justify-between">
        <div className="flex w-[65%] items-center gap-5">
          <h2 className="font-bold">
            Address<span className="invisible">sss</span>
          </h2>
          <input
            type="text"
            className="input-field w-[230px] py-2 pl-0 text-center"
            value={`${info.address ?? ""}`}
            disabled
          />
        </div>
        <div className="flex w-1/4 items-center justify-between">
          <h2 className="font-bold">Gender</h2>
          <input
            type="text"
            className="input-field w-[50px] py-2 pl-0 text-center"
            value={`${info.gender ?? ""}`}
            disabled
          />
        </div>
      </div>
      <div className="mt-9 flex w-full justify-between">
        <div className="flex w-[65%] items-center gap-5">
          <h2 className="font-bold">Phone num</h2>
          <input
            type="text"
            className="input-field w-[230px] py-2 pl-1 text-center"
            value={`${info.phoneNumber ?? ""}`}
            disabled
          />
        </div>
      </div>
      <div className="mt-9 w-full">
        <h2 className="mb-5 font-bold">
          Description<span className="invisible">sssss</span>
        </h2>
        <textarea
          disabled
          className="h-[150px] w-full rounded-md p-4"
          value={info.detail}
        />
      </div>
    </div>
  );
};

export default Detail;
