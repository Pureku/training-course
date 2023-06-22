import React from "react";
import ImgCoruse from "../img/training01.jpg";

const Course = () => {
  return (
    <>
      <div className="csh">
        <h3 className="text-[#665d1d] pb-[10px]">New Training Course</h3>
        <h1 className="lg:text-3xl  text-[#34454c]">เพิ่มทักษะแบบใหม่กับเรา</h1>
      </div>
      <div className="csct">
        <div className="box-border min-w-0">
          <div className="scb">
            <img src={ImgCoruse} alt={ImgCoruse} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
