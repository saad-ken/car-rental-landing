import React from "react";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden max-w-sm w-full">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
          <p className="text-gray-600 text-sm mt-2">{car.description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">
            ₹{car.price}/day
          </span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
