"use client";

import React from "react";
import Nav from "@/components/other/nav.component";
import Footer from "@/components/other/footer.component";
import ButtonTop from "@/components/other/buttontop.component";
import "../src/app/globals.css";
import Welcome from "@/components/wip/welcome.component";
import WipCard from "@/components/wip/wipcard.component";
import WipChart from "@/components/wip/wipchart.component";
import Datepicker from "@/components/other/datepicker.component";
import DropdownFilter from "@/components/wip/filter.component";
import LineChart02 from "@/components/charts/line.chart";
import LineChartCom from "@/components/other/linechart.component";
import ModelSlide from "@/components/wip/modelslide.component";

const Watch = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="grid gap-[40px]">
          <section
            className="m-5 w-full max-w-[1150px] mx-auto"
            style={{ marginBottom: "10px", paddingTop: "40px" }}
          >
            <Welcome />
          </section>
          <section
            className="box-border min-w-0  mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <WipCard />
          </section>
          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <WipChart />
          </section>

          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <div>
              <LineChartCom />
            </div>
          </section>
          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <div className="flex sm:justify-between sm:items-center ">
              <div className="flex flex-1">
                <div
                  className="text-2xl font-bold"
                  style={{ paddingTop: "10px" }}
                >
                  Model chart by PP day
                </div>
              </div>
              <div className="flex-none">
                <DropdownFilter />
              </div>
            </div>
          </section>

          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <div>
              <ModelSlide />
            </div>
          </section>
          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <div className="flex sm:justify-between sm:items-center ">
              <div className="flex flex-1">
                <div
                  className="text-2xl font-bold"
                  style={{ paddingTop: "10px" }}
                >
                  Model chart by process
                </div>
              </div>
              <div className="flex-none">
                <DropdownFilter />
              </div>
            </div>
          </section>

          <section
            className="box-border min-w-0 mx-auto mt-0 w-full max-w-[1150px]"
            style={{ marginBottom: "32px" }}
          >
            <div>
              <ModelSlide />
            </div>
          </section>
        </div>
        <Footer />
        <ButtonTop />
      </div>
    </>
  );
};

export default Watch;
