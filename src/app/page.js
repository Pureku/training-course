import Image from "next/image";
import Link from "next/link";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import Intro from "@/components/intro.component";
import Menu from "@/components/menu.component";
import Recom from "@/components/recom.component";
import Course from "@/components/course.component";
import Section from "@/components/section.component";
import Interview from "@/components/interview.component";
import IndexPage from "@/pages/index.page";

export default function Home() {
  return (
    <Router>
      <Nav /> {/* Your navbar component */}
      {/* Define your routes */}
      <Switch>
        <Route exact path="/" component={IndexPage} />
        {/* <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} /> */}
      </Switch>
    </Router>
  );
}
