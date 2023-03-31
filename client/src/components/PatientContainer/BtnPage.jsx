import { useEffect, useState } from "react";
import { useAppContext } from "../../context/appContext";

const BtnPage = () => {
  const { numberOfPatientPages, page, changePage } = useAppContext();

  if (numberOfPatientPages <= 1) return null;

  const arr = [...Array(numberOfPatientPages).keys()];

  return (
    <div className="mt-10 mb-10 flex flex-wrap justify-end gap-5 font-semibold lg:w-11/12">
      <button
        className="rounded bg-white px-3 text-green-400 hover:bg-green-300 hover:text-white"
        onClick={() => {
          let newPage = page - 1;
          if (newPage < 1) newPage = numberOfPatientPages;
          changePage(newPage);
        }}
      >
        {"<< Prev"}
      </button>
      {arr.map((el) => (
        <button
          key={el}
          className={`rounded px-4 py-2 ${
            page === el + 1
              ? "bg-green-500 text-white hover:cursor-pointer"
              : "bg-green-300 hover:bg-green-400"
          }`}
          disabled={page === el + 1}
          onClick={() => changePage(el + 1)}
        >
          {el + 1}
        </button>
      ))}
      <button
        className="rounded bg-white px-3 text-green-400 hover:bg-green-300 hover:text-white"
        onClick={() => {
          let newPage = page + 1;
          if (newPage > numberOfPatientPages) newPage = 1;
          changePage(newPage);
        }}
      >
        {"Next >>"}
      </button>
    </div>
  );
};

export default BtnPage;
