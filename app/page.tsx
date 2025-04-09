import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Features />
      <Events />
      <Footer />
    </>
  );
}
