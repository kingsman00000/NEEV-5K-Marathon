"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: string[];
}
const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="relative w-full max-w-screen-lg h-[calc(100vh-80px)] mx-auto overflow-hidden shadow-md">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        emulateTouch={true}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
