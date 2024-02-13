import React, { useEffect, useState } from "react";

const Carousel = ({ images, delay }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = (activeImageIndex) => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(images.length - 1);
    } else {
      setActiveImageIndex((prev) => prev - 1);
    }
  };

  const handleNext = (activeImageIndex) => {
    if (activeImageIndex === images.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => handleNext(activeImageIndex), delay);

    return () => clearInterval(timer);
  }, [activeImageIndex]);
  return (
    <div className="carousel">
      <button onClick={() => handlePrev(activeImageIndex)}>&lt;</button>
      <img src={images[activeImageIndex]} alt="carousel-img" />
      <button onClick={() => handleNext(activeImageIndex)}>&gt;</button>
    </div>
  );
};

export default Carousel;
