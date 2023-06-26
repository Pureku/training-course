import Nav from "@/components/nav.component";
import Footer from "@/components/footer.component";
import IndexPage from "@/pages/index.page";
import Course from "@/pages/course.page";

export default function Home() {
  return (
    <div>
      <Nav />
      <IndexPage />
      <Footer />
    </div>
  );
}
