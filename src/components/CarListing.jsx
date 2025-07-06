import CarCard from "./CarCard";

const carList = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
    name: "Tesla Model Y",
    description: "Electric, 300+ km range, Automatic",
    price: 3500,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/07/29/16/42/car-8157299_1280.jpg",
    name: "Range Rover Evoque",
    description: "Diesel, AWD, Premium SUV",
    price: 4200,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
    name: "Tesla Model Y",
    description: "Electric, 300+ km range, Automatic",
    price: 3500,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg",
    name: "Tesla Model Y",
    description: "Electric, 300+ km range, Automatic",
    price: 3500,
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/07/29/16/42/car-8157299_1280.jpg",
    name: "Range Rover Evoque",
    description: "Diesel, AWD, Premium SUV",
    price: 4200,
  },
];

const CarListing = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {carList.map((car, idx) => (
          <CarCard key={idx} car={car} />
        ))}
      </div>
    </>
  );
};

export default CarListing;
