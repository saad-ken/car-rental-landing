import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Renting a car from this site was seamless and stress-free. The vehicle was in perfect condition, and the process was incredibly smooth.",
  },
  {
    name: "Sneha Kapoor",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "One of the best rental services I’ve experienced. Comfortable, affordable, and reliable cars every time!",
  },
  {
    name: "Ravi Mehta",
    role: "IT Professional",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    quote:
      "Highly recommend! Customer support was amazing, and the booking process took less than 5 minutes.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>

        <div className="relative bg-white p-6 md:p-10 rounded-2xl shadow-lg max-w-2xl mx-auto transition-all duration-500">
          <FaQuoteLeft className="text-3xl text-orange-400 mb-4 mx-auto" />
          <p className="text-gray-700 text-lg md:text-xl mb-6 transition-opacity duration-500 ease-in-out">
            {testimonials[current].quote}
          </p>
          <div className="flex flex-col items-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h4 className="font-semibold text-gray-800">
              {testimonials[current].name}
            </h4>
            <span className="text-sm text-gray-500">
              {testimonials[current].role}
            </span>
          </div>

          {/* Arrows */}
          <div className="flex justify-between items-center mt-6 px-6">
            <button
              onClick={prev}
              className="text-gray-500 hover:text-orange-500 transition"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="text-gray-500 hover:text-orange-500 transition"
              aria-label="Next testimonial"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
