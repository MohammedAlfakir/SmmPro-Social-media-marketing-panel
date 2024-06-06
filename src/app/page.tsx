import Header from "@/Components/LandingPage/Header/Header";
import Hero from "@/Components/LandingPage/Hero/Hero";
import Cta from "@/Components/LandingPage/Cta/Cta";
import Footer from "@/Components/LandingPage/Footer/Footer";
import ScrollToTop from "@/Components/ScrollToTop";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}
