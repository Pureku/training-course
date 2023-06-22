import React from "react";
import introGif from "../img/studywithib.gif";

const Intro = () => {
  return (
    <>
      <div className="intmn intsup">
        <div className="intcon">
          <h1 className="lg:text-3xl font-[48px] text-[#34454c]">
            สื่อการเรียนรู้
            <br />
            เพิ่มทักษะของ MT900 <br />
          </h1>
          <p className="lg:text-lg text-[#34454c]">
            คอร์สออนไลน์ เสริมทักษะ <br /> ในยุคดิจิทัล
          </p>
        </div>
        <div className="intimg">
          <img src={introGif} alt={introGif}></img>
        </div>
      </div>
    </>
  );
};

export default Intro;
