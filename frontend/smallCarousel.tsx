'use client';

import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface smallCarouselProps {
  images: string[];
}

const smallCarousel: React.FC<smallCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-[80%] mx-auto flex justify-center items-center min-h-[calc(80vh-60px)] bg-white rounded-lg shadow-lg p-4">
      <Carousel
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        showThumbs={false}
        showIndicators={true}
        showArrows={true}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={500}
      >
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default smallCarousel;
