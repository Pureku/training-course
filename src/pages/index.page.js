"use client";

import React from "react";
import Intro from "@/components/index/intro.component";
import Menu from "@/components/index/menu.component";
import Recom from "@/components/index/recom.component";
import Course from "@/components/index/course.component";
import Section from "@/components/index/section.component";
import Interview from "@/components/index/interview.component";

const IndexPage = () => {
  return (
    <>
      <div>
        <div className="grid gap-[40px]">
          <section className="scint ">
            <Intro />
          </section>
          <section className="scmenu">
            <Menu />
          </section>
          <section className="screc">
            <Recom />
          </section>
          <section className="sccsmn sccsup">
            <Course />
          </section>
          <section className="sctn">
            <Section />
          </section>
          <section className="scinter">
            <Interview />
          </section>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
