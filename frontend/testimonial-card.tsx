import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  imageSrc: string
}

export function TestimonialCard({ quote, author, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="pt-6 flex flex-col items-center">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={author}
          width={80}
          height={80}
          className="rounded-full mb-4 border-4 border-purple-200"
        />
        <blockquote className="text-lg mb-2 text-gray-700 text-center italic">&ldquo;{quote}&rdquo;</blockquote>
        <p className="font-semibold text-purple-600">- {author}</p>
      </CardContent>
    </Card>
  )
}

