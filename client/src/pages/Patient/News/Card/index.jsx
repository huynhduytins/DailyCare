import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import heart from "../../../../../src/assets/heart.png";
import hearActive from "../../../../../src/assets/heart-active.png";
import { useState } from "react";
import { useAppContext } from "../../../../context/appContext";

const Card = ({ img, subImg, name, calendar, title, like, server = false }) => {
  const { changeLikeArticle, detailArticle } = useAppContext();

  const handleLike = () => {
    changeLikeArticle(title, like);
  };

  const handleDetail = () => {
    detailArticle(title);
  };

  return (
    <div className="w-[450px] rounded-lg bg-slate-50 p-5 duration-500 hover:bg-slate-200">
      <img src={img} alt="" className="h-[250px] w-[400px] rounded-lg" />
      <div className="m-5 flex items-center gap-14 text-[#F17732]">
        <div className="flex items-center gap-3">
          <img src={subImg} alt="" className="h-[30px] w-[30px] rounded-full" />
          <p>{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <p>{calendar}</p>
        </div>
      </div>
      <h3 className="mx-5 text-xl font-bold text-[#1F2278]">{title}</h3>
      <div className="flex items-center justify-between">
        <button
          onClick={handleDetail}
          className="m-5 rounded-md border-2 border-[#565ACF] py-2 px-5 text-sm text-[#565ACF] duration-500 hover:bg-[#565ACF] hover:text-white"
        >
          <Link to="/admin/articles/detail">Chi tiết</Link>
        </button>
        {server && (
          <button onClick={handleLike}>
            <img
              src={like ? hearActive : heart}
              alt=""
              className="mr-4 w-[25px]"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
