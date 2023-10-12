import { useEffect } from "react";
import StatContainer from "../../components/StatContainer";
import { useAppContext } from "../../context/appContext";

const Stat = () => {
  const { getStats, changeParams, changePage } = useAppContext();

  useEffect(() => {
    changePage(1);
    changeParams({
      search: "",
      levelDis: "All",
      gender: "All",
      sort: "a-z",
    });
    setTimeout(() => {
      getStats();
    }, 1400);
  }, []);

  return <StatContainer />;
};

export default Stat;
