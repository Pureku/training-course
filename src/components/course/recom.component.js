import React from "react";
import Carousel from "../other/carousel.component";

const RecomCourse = () => {
  return (
    <>
      <div className="box-border min-w-0">
        <div className=" mt-0 mr-auto mb-0 ml-auto align-center max-w-[1126px] w-[100%]">
          <div className="box-border min-w-0 ml-auto mr-auto pl-4 max-w-[1126px]">
            <h1 className="text-3xl">แนะนำ</h1>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecomCourse;
