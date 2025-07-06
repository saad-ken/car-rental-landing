import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/22/18/52/rubicon-2432058_1280.jpg",
    headline: { first: "Saving", second: "Summer" },
    subtitle: "Real adventures from real owners that really happened.",
    ctaText: "Watch the adventure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline: { first: "Drive", second: "Electric" },
    subtitle: "Clean, quiet, and powerful journeys await.",
    ctaText: "Explore Models",
  },
  {
    image:
      "https://media.istockphoto.com/id/1784162450/photo/friends-on-road-trip-travel-diversity-and-taking-picture-together-in-a-van-during-desert.jpg?s=1024x1024&w=is&k=20&c=LFoUcM8kPQ73ND_OsjFbB6PrI6QXOHlTJmNS-GLpQmI=",
    headline: { first: "Conquer", second: "Terrain" },
    subtitle: "Wherever you go, arrive in style and comfort.",
    ctaText: "Book Now",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const contentRef = useRef(null);
  const bgRef = useRef(null);

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      bgRef.current,
      { scale: 1.05 },
      { scale: 1, duration: 1.5, ease: "power1.inOut" }
    );
  }, [active]);

  return (
    <header className="relative w-full h-screen sm:h-[90vh] overflow-hidden">
      <img
        src={slides[active].image}
        alt="Car Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        ref={bgRef}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center"
        ref={contentRef}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-white">{slides[active].headline.first} </span>
          <span className="text-orange-500">
            {slides[active].headline.second}
          </span>
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl max-w-2xl">
          {slides[active].subtitle}
        </p>
        <button
          className="mt-6 bg-white text-black px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300 cta-button text-sm sm:text-base md:text-lg"
          aria-label={slides[active].ctaText}
        >
          {slides[active].ctaText}
        </button>

        {/* Dot Navigation */}
        <div className="mt-6 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                active === idx ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setActive(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 sm:p-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-black text-sm sm:text-base" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 sm:p-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-black text-sm sm:text-base" />
      </button>
    </header>
  );
}
