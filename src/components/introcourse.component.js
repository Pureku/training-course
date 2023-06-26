import React from "react";
import "../app/globals.css";

const IntroCourse = () => {
  return (
    <>
      <div className="box-border min-w-0">
        <div className="intcosp ">
          <div className="intcosph">
            <div>
              <h1 className="lg:text-5xl align-center">Course Training</h1>
              <p className="text-xl">Welcome to New Training Course</p>
            </div>
            <div>
              <img
                className="imgIntroCos"
                src="https://raw.githack.com/Pureku/training-course/main/src/img/koosh-brain.webp?raw=true"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroCourse;
