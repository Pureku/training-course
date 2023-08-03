"use client";

import React from "react";
import Nav from "@/components/other/nav.component";
import Footer from "@/components/other/footer.component";
import ButtonTop from "@/components/other/buttontop.component";
import "../src/app/globals.css";
import Welcome from "@/components/wip/welcome.component";
import WipCard from "@/components/wip/wipcard.component";

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
            className="box-border min-w-0 mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          ></section>
          <section
            className="box-border min-w-0 mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          ></section>
        </div>
        <Footer />
        <ButtonTop />
      </div>
    </>
  );
};

export default Watch;
