import Image from "next/image"
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const carouselImages = [
  "/neev 14.jpg",
  "/9.jpeg",
  "/8.jpg",
]


export function Carousel() {
  return (
    <CarouselComponent className="w-full h-full">
      <CarouselContent>
        {carouselImages.map((imageSrc, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-[calc(100vh-80px)]">
              <Image
                src={imageSrc}
                alt={`Marathon Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </CarouselComponent>
  )
}

