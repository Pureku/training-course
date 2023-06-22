import React from "react";

const Interview = () => {
  return (
    <>
      <div className="interh">
        <h2 className="lg:text-3xl">Course Outcomes</h2>
      </div>
      <div className="box-border min-w-0">
        <div className="interb max-w-[1126px]">
          <div className="my-3">
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 mb-4"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 mb-4"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 mb-4"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-200 mb-4"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
          <img
            src={
              "https://raw.githack.com/Pureku/training-course/main/src/img/Home-page-illustration.svg?raw=true"
            }
          ></img>
        </div>
      </div>
    </>
  );
};

export default Interview;
