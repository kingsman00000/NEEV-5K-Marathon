"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  media: { type: "image" | "video"; src: string }[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ media }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight - 80, 
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      setVideoSize({
        width: videoElement.clientWidth,
        height: videoElement.clientHeight,
      });
    }
  }, [media]);

  return (
    <div
      className="relative mx-auto flex justify-center items-center overflow-hidden"
      style={{
        width: "100%",
        maxWidth: `${videoSize.width || containerSize.width}px`,
        height: `${videoSize.height || containerSize.height}px`,
        maxHeight: "calc(100vh - 80px)",
      }}
    >
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        emulateTouch
      >
        {media.map((item, index) => (
          <div key={index} className="relative flex justify-center items-center w-full h-full">
            {item.type === "video" ? (
              <video
                autoPlay
                loop
                muted
                controls
                className="w-full h-full max-w-full max-h-full object-contain rounded-lg"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Slide ${index}`}
                className="w-full h-full max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </Carousel> 
    </div>
  );
};

export default CarouselComponent;
