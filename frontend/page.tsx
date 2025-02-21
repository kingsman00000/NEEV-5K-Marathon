import Image from "next/image"
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CarouselComponent from "./CarouselComponent";
import { TestimonialCard } from "./testimonial-card"
import UploadPhoto from "./UploadPhoto";
import MarathonRegistration from "./MarathonRegistration"; // ✅ Import MarathonRegistration component
import BibCreator from "./BibCreator" // ✅ Import BibCreator component

export default function Page() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); // ✅ State for Registration Modal
  const [isBibOpen, setIsBibOpen] = useState(false) // ✅ State for BibCreator Modal
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // ✅ State for Mobile Menu

  const carouselMedia = [
  { type: "video" as const, src: "/Carousel_5k website.mp4" },
  {type: "video" as const, src: "/Second_Carousel_5k website.mp4"},
  { type: "image" as const, src: "/404.jpg" },
  { type: "image" as const, src: "/606.jpg" },
  { type: "image" as const, src: "/202.jpg" },
  { type: "image" as const, src: "/101.jpg" },
  { type: "image" as const, src: "/505.jpg" },
  { type: "image" as const, src: "/303.jpg" },
];
  
  return (
    <div className="min-h-screen bg-gray-50">
       {/* Navbar */}
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/5k registration page.png?height=40&width=40&text=Logo"
                alt="NEEV Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold text-gray-800">NEEV GLOBAL 5K RUN</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#register" className="text-gray-600 hover:text-gray-800">Register</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a>
              <a href="#sponsors" className="text-gray-600 hover:text-gray-800">Sponsors</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 focus:outline-none text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // ✅ Toggle Mobile Menu
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? "✕" : "☰"} {/* Hamburger or Close Icon */}
            </button>

            {/* Register Button (Always Visible) */}
            <Button 
              className="hidden md:block bg-[#A65A3E] hover:bg-[#8B4C34] text-white font-semibold py-2 px-4 rounded-lg"
              onClick={() => setIsRegisterOpen(true)}
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-4 px-6">
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#register" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Register</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
              <a href="#sponsors" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</a>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  setIsRegisterOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Sponsor Logos Section */}
      <section className="container mx-auto px-4 py-6 h-[210px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
        <Image src="/BBBP.png" alt="BBBP Logo" width={200} height={200} className="w-full h-full object-cover" />
      </div>
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
        <Image src="/HL_Logo.png" alt="Hamari Laado Logo" width={200} height={200} className="w-full h-full object-cover" />
      </div>
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
        <Image src="/LB.png" alt="Ladkiyaan Bhaage Logo" width={200} height={200} className="w-full h-full object-cover" />
      </div>
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md">
        <Image src="/Maru_Udaan(1).jpg" alt="Maru Udaan Logo" width={200} height={200} className="w-full h-full object-cover" />
      </div>
        </div>
        </div>
      </section>

     
      {/* Ladkiyaan Bhaage, Sabse Aage CAROUSEL */}
      <main className="space-y-14 pt-8">
      <section className="relative h-[calc(100vh-80px)] w-full rounded-none md:rounded-[50px] overflow-hidden">
      {/* Carousel Component */}
      <CarouselComponent media={carouselMedia} />

      {/* Dark Overlay with Text & Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Ladkiyaan Bhaage, Sabse Aage
        </h2>
        <p className="text-xl md:text-2xl mb-8">8th March, 2025</p>
        <Button 
          size="lg" 
          className="bg-[#A65A3E] hover:bg-[#8B4C34] text-white font-semibold py-2 px-4 rounded-lg"
          aria-label="Join the movement"
          onClick={() => setIsRegisterOpen(true)} // ✅ Open Register Modal
        >
          Join the Movement
        </Button>
      </div>
    </section>

        {/* EWTR Section */}

        <section id="about" className="container mx-auto px-4 py-12 min-h-[calc(80vh-60px)] bg-white rounded-lg shadow-lg flex items-start">
        <div className="grid md:grid-cols-2 gap-8 w-full">

        {/* Left Section (Text Content) */}
        <div className="flex flex-col h-full">
      {/* Title at the Top Left */}
      <h1
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide text-black mb-4"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "left", // Left-align text
          display: "block",
        }}
      >
        <span className="text-[#A65A3E] font-black">HER</span>{" "}
        <span className="text-transparent" style={{
          WebkitTextStroke: "2px black"
        }}>POTENTIAL</span><span className="text-[#A65A3E] font-black">,</span>{" "}
        <span className="text-[#A65A3E] font-black">OUR</span>{" "}
        <span className="text-transparent" style={{
          WebkitTextStroke: "2px black"
        }}>BRIDGE</span>
      </h1>

      <p className="text-gray-800 text-3xl leading-loose mt-20">
        Celebrate girls' achievements this International Women's Day! The LBSA 5K honors the inspiring journey of rural girls 
        in Hamari Laado's NEEV program. These girls have dedicated 10 weeks to the program, culminating in a 5K run showcasing 
        their strength and resilience. Join us and witness their triumph!
      </p>
      <p className="text-gray-800 text-3xl leading-loose mt-12">
        Run/walk locally or support a NEEV school – help more girls reach their full potential. Join the NEEV 5K!
      </p>
    </div>


    {/* Carousel Component inside the section */}
    <div className="w-full max-w-md mx-auto">
    <CarouselComponent media={[
      { type: "image", src: "/404.jpg" },
      { type: "image", src: "/606.jpg" },
      { type: "image", src: "/202.jpg" },
      { type: "image", src: "/101.jpg" },
      { type: "image", src: "/505.jpg" },
      { type: "image", src: "/303.jpg" },
    ]} />

    </div>
  </div>
</section>


        {/* MarathonRegistration CARD */}
        <section id="register" className="bg-purple-100 py-16">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Get Ready for the Race</h2>
            <div className="grid md:grid-cols-3 gap-8">

          {/* Registration Icon */}
          <Card className="bg-white rounded-2xl shadow-lg p-6 text-center w-80">
          {/* <Card className="bg-sky-200 rounded-xl shadow-lg p-6 text-center w-80"> */}
          <CardContent className="flex flex-col items-center">
        <Image
          src="contract.png"
          alt="Registration Icon"
          width={80}
          height={80}
          className="mb-4"
        />
          <h3 className="text-xl font-bold text-gray-900">REGISTRATION</h3>
          <p className="text-gray-700 text-sm mt-2">
          Register for the 5K event and empower the girls
        </p>
           <Button 
            className="mt-9 w-full bg-[#A65A3E] hover:bg-[#8B4C34] text-white font-semibold py-2 px-4 rounded-lg"
            onClick={() => setIsRegisterOpen(true)} // ✅ Open Register Modal
            >
            REGISTER HERE
            </Button>
            </CardContent>
            </Card>

               {/* Registration Modal on opening MarathonRegistrationCard */}
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

             {/* BibCreator Card*/}
             <Card className="bg-white rounded-2xl shadow-lg p-6 text-center w-80">
             {/* <Card className="bg-yellow-200 rounded-2xl shadow-lg p-6 text-center w-80"> */}
                <CardContent className="flex flex-col items-center">
                  {/* BIB Icon */}
                 <Image
                 src="/number.png" // Replace with actual image path
                 alt="Marathon BIB"
                 width={100}
                 height={100}
                 className="mb-4"
                />
                 <h3 className="text-xl font-bold text-black">Grab Your BIB</h3>
                 <p className="text-gray-800 text-sm mt-2">You can download the BIB and get a printout of the same</p>
                  <Button
                    className="mt-4 w-full bg-[#A65A3E] hover:bg-[#8B4C34] text-white font-semibold py-2 px-4 rounded-lg"
                    onClick={() => setIsBibOpen(true)} // ✅ Open BibCreator Modal
                  >
                    DOWNLOAD HERE
                  </Button>
                </CardContent>
              </Card>


      {/* BIB Creator Modal */}
      {isBibOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button 
              className="absolute top-20 right-4 text-gray-600 hover:text-gray-900 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200"
              onClick={() => setIsBibOpen(false)}
            >
              ✕
            </button>
            <BibCreator /> {/* ✅ Render BibCreator component */}
          </div>
        </div>
      )}

{/* Upload 5K Pics CARD*/}
              <Card className="bg-white rounded-2xl shadow-lg p-6 text-center w-80">
              {/* <Card className="bg-lime-200 rounded-2xl shadow-lg p-6 text-center w-80"> */}
              <CardContent className="flex flex-col items-center">
              <Image
          src="/gallery.png" // Replace with actual image path
          alt="Photo Upload Icon"
          width={100}
          height={100}
          className="mb-4"
        />
               <h3 className="text-xl font-bold text-black tracking-wide">5K PICS PLEASE!</h3>
               <p className="text-gray-800 text-sm mt-2">You can share the photos by uploading in the below link</p>
                <Button 
                  className="mt-4 w-full bg-[#A65A3E] hover:bg-[#8B4C34] text-white font-semibold py-2 px-4 rounded-lg"
                  onClick={() => setIsUploadOpen(true)} // ✅ Open UploadPhoto component
                >
                   UPLOAD HERE
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

      {/* Testimonial Section */}
        <section id="testimonials" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">What Runners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I had a wonderful experience at my second NEEV 5k. Incredibly proud of all the girls in your program. They are an inspiration to me!!!"
              author="Laura Reich."
              imageSrc="/44.png?height=100&width=100&text=Priya"
            />
            <TestimonialCard
              quote="Thanks to NEEV 5k, I jogged for 32 minutes straight—my first time since before pregnancy!
               It feels like rediscovering my body after a change. Running reminds me of my strength and discipline, 
               that I can still conquer challenge  💪"
              author="Kat Laker."
              imageSrc="/55.png?height=100&width=100&text=Anjali"
            />
            <TestimonialCard
              quote="Wishing strength, courage, and endless opportunities to every girl pursuing her dreams. 
              Kudos to Hamari Ladoo for empowering the girls and helping them shine brighter. Keep inspiring and uplifting!"
              author="Mukta & Navneet"
              imageSrc="/66.png?height=100&width=100&text=Meera"
            />
          </div>
        </section>

        {/* Sponsors setion */}
        <section id="sponsors" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Sponsors</h2>
            <div className="flex flex-wrap justify-center items-center gap-20">
              <Image
                src="/Quick Vitals_logo.png?height=100&width=200"
                alt="Sponsor 1"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
              <Image
                src="/SITA.jpeg?height=100&width=200"
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
                src="/KROSS_logo.png?height=100&width=200"
                alt="Sponsor 4"
                width={200}
                height={100}
                className="rounded-lg bg-white p-4 shadow-md"
              />
              <Image
                src="/AWWA_logo.png?height=100&width=200"
                alt="Sponsor 5"
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

