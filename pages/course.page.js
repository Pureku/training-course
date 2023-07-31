"use client";

import React from "react";
import Nav from "@/components/other/nav.component";
import Footer from "@/components/other/footer.component";
// import "../app/globals.css";
import Intro from "@/components/course/intro.component";
import RecomCourse from "@/components/course/recom.component";
import ContentCourse from "@/components/course/content.component";
import ButtonTop from "@/components/other/buttontop.component";

const Course = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="grid gap-[40px]">
          <section className="scintcosp">
            <Intro />
          </section>
          <section
            className="box-border min-w-0  mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          >
            <RecomCourse />
          </section>
          <section
            className="box-border min-w-0 mx-auto mt-0 "
            style={{ marginBottom: "32px" }}
          >
            <ContentCourse />
          </section>
        </div>
        <Footer />
        <ButtonTop />
      </div>
    </>
  );
};

export default Course;
