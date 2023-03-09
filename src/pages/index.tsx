import AboutUs from "../components/AboutUs";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "../components/features/Features";
import Section5 from "../components/Section5";
import TokenInfo from "../components/tokenInfo/TokenInfo";
import Roadmap from "../components/Roadmap";
import Reward from "../components/Reward";
import Section9 from "../components/Section9";
import OurProjects from "../components/OurProjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-Poppins text-white bg-bgBlack">
      <Navbar />
      <Header />
      <Partners />
      <AboutUs />
      <Features />
      <Section5 />
      <TokenInfo />
      <Roadmap />
      <Reward />
      <Section9 />
      <OurProjects />
      <Footer />
    </main>
  );
}
