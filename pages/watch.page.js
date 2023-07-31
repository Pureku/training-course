"use client";

import React from "react";
import Nav from "@/components/other/nav.component";
import Footer from "@/components/other/footer.component";
import ButtonTop from "@/components/other/buttontop.component";
import "../src/app/globals.css";
import WatchPlay from "@/components/watch/watch.component";
import DetailVideo from "@/components/watch/detail.component";

const Watch = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="grid gap-[40px]">
          <section className="scintcosp">
            <WatchPlay />
          </section>
          <section
            className="box-border min-w-0  mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          >
            {/* <DetailVideo /> */}
          </section>
          <section
            className="box-border min-w-0 mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          >
            {/* <ContentCourse /> */}
          </section>
        </div>
        <Footer />
        <ButtonTop />
      </div>
    </>
  );
};

export default Watch;
