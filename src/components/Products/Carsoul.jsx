import React, { useEffect, useState } from "react";
import "./Carsoul.css";

const Carsoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarsoulObj.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + CarsoulObj.length) % CarsoulObj.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextItem, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);


  const CarsoulObj = [
    { link: "/ProductImg/cP (1).jpg", offer: "Get Upto 20% Off" },
    { link: "/ProductImg/cP (2).jpg", offer: "Get Upto 20% Off" },
    { link: "/ProductImg/cP (3).jpg", offer: "Get Upto 20% Off" },
    { link: "/ProductImg/cP (4).jpg", offer: "Get Upto 20% Off" },
    { link: "/ProductImg/cP (5).jpg", offer: "Get Upto 20% Off" },
  ];

  return (
    <div className="carousel">
      <div className="carousel-content">
        {CarsoulObj.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={item.link} alt="offer" />
          </div>
        ))}
        <div className="flex justify-center gap-5 text-white poppins-regular">
          <button onClick={prevItem}>&lt; Prev</button>
          <button onClick={nextItem}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Carsoul;
