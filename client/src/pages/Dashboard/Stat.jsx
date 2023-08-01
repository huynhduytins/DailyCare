import { useEffect } from "react";
import StatContainer from "../../components/StatContainer";
import { useAppContext } from "../../context/appContext";

const Stat = () => {
  const { getStats, changeParams, changePage } = useAppContext();

  useEffect(() => {
    changePage(1);
    changeParams({
      search: "",
      levelDis: "Tất cả",
      gender: "Tất cả",
      sort: "a-z",
    });
    setTimeout(() => {
      getStats();
    }, 1400);
  }, []);

  return <StatContainer />;
};

export default Stat;
