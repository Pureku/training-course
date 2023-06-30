import React, { useEffect } from "react";
import Sidebar from "../other/sidebar.component";
import Filter from "../other/filterbar.component";
import DetailCourse from "./detail.component";
import Showmore from "../other/showmore.component";

const ContentCourse = () => {
  return (
    <>
      <div className="box-border min-w-0">
        <div className=" mt-0 mr-auto mb-0 ml-auto align-center max-w-[1126px] w-[100%]">
          <div className="box-border min-w-0 ml-auto mr-auto pl-4 max-w-[1126px]">
            <h1 className="text-3xl">All Development courses</h1>
          </div>
          <div className="box-border min-w-0 ml-auto mr-auto pt-4 pb-4 max-w-[1126px] relative">
            <div className="sticky top-[63px]">
              <Filter />
            </div>
            <div className="box-border min-w-0">
              <div className="flex justify-between">
                <div id="sidebar" className="sticky-aside pr-4">
                  <Sidebar />
                </div>
                <div>
                  <DetailCourse />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCourse;
