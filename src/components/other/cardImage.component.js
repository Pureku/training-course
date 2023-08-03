import React from "react";
import Carousel from "../other/carousel.component";

const CardImage = ({ data }) => {
  return (
    <>
      <div className="card card-compact w-[auto] h-[300px]  bg-base-100 shadow-md">
        <figure>
          <img
            src={
              "https://raw.githack.com/Pureku/training-course/main/src/img/original.jpg?raw=true"
            }
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.detail}</p>
        </div>
      </div>
    </>
  );
};

export default CardImage;
