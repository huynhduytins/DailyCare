import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Form from "../../pages/Dashboard/Form";
import Select from "./Select";

const SearchContainer = () => {
  const { getAllPatients, changeParams } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      search: formData.get("search") ?? "",
      levelDis: formData.get("levelDis") ?? "",
      gender: formData.get("gender") ?? "",
      sort: formData.get("sort") ?? "",
    };
    changeParams(obj);
    getAllPatients(obj);
  };

  return (
    <Form button="Filter" handleSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div>
          <label htmlFor="search" className="font-semibold">
            Search by the first name
          </label>
          <input
            type="text"
            id="search"
            name="search"
            className="mt-2 h-9 w-full rounded border-[1px] border-slate-400 bg-[#f0f4f8] py-1 px-3 outline-none"
          />
        </div>
        <Select
          items={["all", "Good", "Bad", "Urgent"]}
          title="Condition Of Patient's Health"
          name="levelDis"
        />
        <Select
          items={["all", "Male", "Female"]}
          title="Gender"
          name="gender"
        />
        <Select items={["a-z", "z-a"]} title="Sort" name="sort" />
      </div>
    </Form>
  );
};

export default SearchContainer;
