import Image from "next/image";
import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import Intro from "@/components/intro.component";
import Menu from "@/components/menu.component";
import Recom from "@/components/recom.component";
import Course from "@/components/course.component";
import Section from "@/components/section.component";
import Interview from "@/components/interview.component";

export default function Home() {
  return (
    <div>
      <Nav />
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
      <Footer />
    </div>
  );
}
