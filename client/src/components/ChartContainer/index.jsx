import BarChartComponent from "../BarChartComponent";
import PieChartComponent from "../PieChartComponent";

const ChartContainer = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="mt-12 flex w-full flex-col items-center xl:w-[30%]">
        <h2 className="text-2xl font-bold tracking-wider text-gray-500">
          Độ tuổi của bệnh nhân
        </h2>
        <PieChartComponent />
      </div>
      <div className="mt-12 flex w-full flex-col items-center xl:w-9/12">
        <h2 className="text-2xl font-bold tracking-wider text-gray-500">
          Bệnh nhân khẩn cấp hàng tháng
        </h2>
        <BarChartComponent />
      </div>
    </div>
  );
};

export default ChartContainer;
