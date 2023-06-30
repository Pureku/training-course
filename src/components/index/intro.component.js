import React from "react";

const Intro = () => {
  return (
    <>
      <div className="intmn intsup">
        <div className="intcon">
          <h1 className="lg:text-6xl font-[48px] text-[#34454c]">
            MT900 <br /> สื่อการเรียนรู้
            <br />
            เพิ่มทักษะ
            <br />
          </h1>
          <p className="lg:text-2xl text-[#34454c]">
            คอร์สออนไลน์ เสริมทักษะ <br /> ในยุคดิจิทัล
          </p>
        </div>
        <div>
          <img
            className="w-[100%] h-[auto] items-center mx-[20px]"
            src={
              "https://raw.githack.com/Pureku/training-course/main/src/img/studywithib.gif?raw=true"
            }
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Intro;
