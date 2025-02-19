import { Calendar } from "lucide-react";
import Image from "next/image"

export default function RaceBib() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="relative bg-[#FFD4C4] rounded-lg p-6 shadow-lg">
        {/* Top Logos */}
        <div className="flex justify-between items-center mb-6 px-4">
          <div className="w-16 h-16 relative">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Hamari Laado"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Running Logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="5KM Logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Girl Power Logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Event Title and Date */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">
              7<sup>th</sup> NEEV 5K
            </h1>
          </div>
          <div className="flex items-center border-2 border-black rounded p-1">
            <Calendar className="w-5 h-5 mr-1" />
            <span className="font-bold">8 MARCH</span>
          </div>
          <div className="ml-auto">
            <p className="text-lg font-medium">#ladkiyaanBhaageSabseAage</p>
          </div>
        </div>

        {/* Bib Number */}
        <div className="text-center mb-4">
          <h2 className="text-[120px] leading-none font-black">1,286</h2>
        </div>

        {/* Runner Category */}
        <div className="text-center mb-4">
          <span className="bg-[#E6E6FA] px-6 py-1 rounded-full text-xl font-bold inline-block">AUDACIOUS</span>
        </div>

        {/* Runner Name */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">AHANA BHATTACHARJEE</h3>
        </div>

        {/* Bottom Banner Image */}
        <div className="text-center relative mb-4">
          <div className="h-16 relative">
            <Image
              src="/placeholder.svg?height=64&width=400"
              alt="International Women's Day Banner"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm max-w-[60%]">
            Scan the QR code to join our group and see the NEEV Global 5k run happening worldwide. Share your
            inspirational photos too!
          </p>
          <div className="w-24 h-24 bg-white p-2 rounded">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="QR Code"
              width={80}
              height={80}
              className="w-full h-full"
            />
          </div>
        </div>
         {/* <div ref={bibRef} className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">NEEV 5K</h2>
            <p className="text-4xl font-bold mb-2">{bibNumber}</p>
            <p className="text-xl">{generatedBib}</p>
          </div> */}

        {/* Side Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
          <span className="text-sm font-medium">#CelebrateTheGirls</span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right">
          <span className="text-sm font-medium">#GirlsRun</span>
        </div>
      </div>
    </div>
  )
}

