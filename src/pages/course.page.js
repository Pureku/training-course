"use client";

import React from "react";
import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import "../app/globals.css";
import IntroCourse from "@/components/introcourse.component";

const Course = () => {
  return (
    <>
      <Nav />
      <div className="grid gap-[40px]">
        <section className="scintcosp">
          <IntroCourse />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Course;
