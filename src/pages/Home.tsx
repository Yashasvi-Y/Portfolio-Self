import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Toolkit />
      <Work />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Home;
