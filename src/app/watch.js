import Nav from "@/components/other/nav.component";
import Footer from "@/components/other/footer.component";
import IndexPage from "../../pages/index.page";
import "./globals.css";
import ButtonTop from "@/components/other/buttontop.component";

const renderEnabled = true; // Set the flag or condition here

export default function Home() {
  return (
    <div>
      <Nav />
      <IndexPage />
      <Footer />
      <ButtonTop />
    </div>
  );
}
