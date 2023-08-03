import React from "react";
import Carousel from "../other/carousel.component";

const Card = ({ data }) => {
  return (
    <>
      <div className="card w-[auto] bg-[#EEEEEE] text-[#537188] transition duration-300 transform hover:scale-105">
        <div className="card-body">
          <h1 className="card-title ">{data.title}</h1>
          <p>{data.detail}</p>
          <div className="card-actions justify-end">
            <button className="btn border-[#fbc424] bg-[#fbc424] text-[#537188]">
              See Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
