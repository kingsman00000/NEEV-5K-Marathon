import Image from "next/image"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "./carousel"
import { TestimonialCard } from "./testimonial-card"
import UploadPhoto from "./UploadPhoto";
import MarathonRegistration from "./MarathonRegistration"; // ✅ Import MarathonRegistration component
import BibCreator from "./BibCreator" // ✅ Import BibCreator component

export default function Page() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // ✅ State for Registration Modal
  const [isBibOpen, setIsBibOpen] = useState(false) // ✅ State for BibCreator Modal
  return (
    <div className="min-h-screen bg-gray-50">
       {/* Header */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/LB.png?height=40&width=40&text=Logo"
                alt="NEEV Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-800">NEEV 5K Marathon</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#register" className="text-gray-600 hover:text-gray-800">Register</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
              <a href="#sponsors" className="text-gray-600 hover:text-gray-800">Sponsors</a>
            </nav>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsRegisterOpen(true)} // ✅ Open Register Modal
            >
              Register Now
            </Button>
          </div>
        </div>
      </header>
      {/* Sponsor Logos Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center space-x-6">
          <Image src="/BBBP.png" alt="BBBP Logo" width={120} height={120} className="rounded-lg shadow-md" />
          <Image src="/HL_Logo.png" alt="Hamari Laado Logo" width={120} height={120} className="rounded-lg shadow-md" />
          <Image src="/LB.png" alt="Ladkiyaan Bhaage Logo" width={120} height={120} className="rounded-lg shadow-md" />
          <Image src="/Maru_Udaan.png" alt="Maru Udaan Logo" width={120} height={120} className="rounded-lg shadow-md" />
        </div>
      </section>

     

      <main className="space-y-16 pt-8">
        <section className="relative h-[calc(100vh-80px)]">
          <Carousel />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-5xl font-bold mb-4 text-center">Ladkiyaan Bhaage, Sabse Aage</h2>
            <p className="text-2xl mb-8">8th March, 2025</p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => setIsRegisterOpen(true)} // ✅ Open Register Modal
            >
              Join the Movement
            </Button>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Empowering Women Through Running</h2>
              <p className="mb-4 text-gray-600">
                Join us for the empowering NEEV 5K Marathon, celebrating women's strength and determination. This event
                is more than just a race; it's a statement of equality and progress.
              </p>
              <p className="text-gray-600">
                Whether you're a seasoned runner or a first-timer, this 5K is for you. Let's run together and show the
                world that women lead the way!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/7.jpg?height=200&width=200"
                alt="Event image 1"
                width={200}
                height={500}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/6.jpg?height=200&width=200"
                alt="Event image 2"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/8.jpg?height=200&width=200"
                alt="Event image 3"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/WhatsApp Image 2023-03-07 at 10.35.11 AM.jpg?height=200&width=200"
                alt="Event image 4"
                width={200}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section id="register" className="bg-purple-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Get Ready for the Race</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Register Here</h3>
                  <p className="mb-4 text-gray-600">
                    Sign up for the NEEV 5K Marathon and be part of this empowering event.
                  </p>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setIsRegisterOpen(true)} // ✅ Open Register Modal
                  >
                    Register
                  </Button>
                </CardContent>
              </Card>
               {/* Registration Modal */}
        {isRegisterOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
              <button 
                className="absolute top-24 right-12 text-gray-600 hover:text-gray-900 text-3xl w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200"
                onClick={() => setIsRegisterOpen(false)} // ✅ Close Register Modal
              >
                ✕
              </button>
              <MarathonRegistration /> {/* ✅ Render Registration Component */}
            </div>
          </div>
        )}

             {/* Open BibCreator Modal */}
             <Card className="bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Grab Your BIB</h3>
                  <p className="mb-4 text-gray-600">Pick up your race number and get ready for the big day!</p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={() => setIsBibOpen(true)} // ✅ Open BibCreator Modal
                  >
                    BIB Information
                  </Button>
                </CardContent>
              </Card>


      {/* BIB Creator Modal */}
      {isBibOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => setIsBibOpen(false)}
            >
              ✕
            </button>
            <BibCreator /> {/* ✅ Render BibCreator component */}
          </div>
        </div>
      )}

              <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Upload 5K Pics</h3>
                <p className="mb-4 text-gray-600">Share your race day moments with us and the community.</p>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  onClick={() => setIsUploadOpen(true)} // ✅ Open UploadPhoto component
                >
                    Upload Photos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        

      {/* Upload Photo Section (Appears when isUploadOpen is true) */}
      {isUploadOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
          <button 
              className="absolute top-24 right-12 text-gray-600 hover:text-gray-900 text-3xl w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => setIsUploadOpen(false)} // Close UploadPhoto component
            >
              ✕
            </button>
            <UploadPhoto />
          </div>
        </div>
      )}

        <section id="testimonials" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">What Runners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This marathon changed my life. I felt so empowered!"
              author="Priya S."
              imageSrc="/placeholder.svg?height=100&width=100&text=Priya"
            />
            <TestimonialCard
              quote="An amazing experience. Can't wait for next year!"
              author="Anjali R."
              imageSrc="/placeholder.svg?height=100&width=100&text=Anjali"
            />
            <TestimonialCard
              quote="The energy and support were incredible. Truly inspiring."
              author="Meera K."
              imageSrc="/placeholder.svg?height=100&width=100&text=Meera"
            />
          </div>
        </section>

        <section id="sponsors" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Image
                src="/Quick Vitals_logo.png?height=100&width=200"
                alt="Sponsor 1"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
              <Image
                src="/SITA_logo.jpeg?height=100&width=200"
                alt="Sponsor 2"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
              <Image
                src="/Nuvama_logo.png?height=100&width=200"
                alt="Sponsor 3"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
              <Image
                src="/Nuvama_logo.png?height=100&width=200"
                alt="Sponsor 4"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 NEEV 5K Marathon. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-purple-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

