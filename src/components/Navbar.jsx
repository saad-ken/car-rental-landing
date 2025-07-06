import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Products",
    items: ["Cars", "SUVs", "Luxury", "Electric"],
  },
  {
    title: "Services",
    items: ["Booking", "Insurance", "Support"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Contact"],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white shadow-md px-4 py-3 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">CarRentX</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <div
              key={link.title}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className="text-gray-700 font-medium hover:text-blue-600 transition">
                {link.title}
              </button>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg p-4 border border-gray-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ul className="space-y-2">
                      {link.items.map((item) => (
                        <li
                          key={item}
                          className="hover:underline text-gray-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-40 p-6"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
          >
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <p className="font-semibold text-gray-800 mb-2">
                    {link.title}
                  </p>
                  <ul className="space-y-1">
                    {link.items.map((item) => (
                      <li key={item} className="text-gray-600 hover:underline">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Sign In
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
