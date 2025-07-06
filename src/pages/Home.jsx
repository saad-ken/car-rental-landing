import CarListing from "../components/CarListing";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CarListing />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}
