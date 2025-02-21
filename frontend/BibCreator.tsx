import type React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import html2canvas from "html2canvas";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function BibCreator() {
  const [email, setEmail] = useState(""); // Email state
  const [powerWord, setPowerWord] = useState("");
  const [generatedBib, setGeneratedBib] = useState<{ full_name: string; powerWord: string; number: number } | null>(null);
  const bibRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email); // Basic email validation

  const generateBib = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !powerWord.trim()) {
      alert("Please fill all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`http://192.168.1.22:5000/generatebib?email=${encodeURIComponent(email)}`);
      if (!response.ok) throw new Error("Failed to get bib number.");

      const data = await response.json();
      setGeneratedBib({ full_name: data.full_name, powerWord, number: data.bib_number });

      console.log("Full Name (from Server):", data.full_name);
      console.log("Email:", email);
      console.log("Power Word:", powerWord);
      console.log("Assigned Bib Number:", data.bib_number);
    } catch (error) {
      console.error("Error fetching bib number:", error);
      alert("Error fetching bib number. Please try again.");
    }
  };

  const downloadBib = () => {
    if (bibRef.current && generatedBib) {
      html2canvas(bibRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = `NEEV_5K_BIB_${generatedBib.number}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">NEEV 5K BIB Creator</h1>
      <form onSubmit={generateBib} className="space-y-4">
        <div>
          <Label htmlFor="email" className="font-bold">Registered Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <Label htmlFor="powerWord" className="font-bold">Pick A Power Word</Label>
          <Input
            id="powerWord"
            type="text"
            value={powerWord}
            onChange={(e) => setPowerWord(e.target.value)}
            placeholder="Enter your power word"
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            Pick a power word that starts with the same letter as your name!
          </p>
        </div>
        <Button type="submit" className="w-full">Generate BIB</Button>
      </form>

      {generatedBib && (
        <div className="mt-1 max-w-full mx-auto">
          <div ref={bibRef} className="relative bg-[#FFD4C4] p-1 rounded-lg shadow-md text-center w-full">
        {/* Top Logos */}
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="w-16 h-16 relative">
            <Image
              src="/HL_Logo.png?height=64&width=64"
              alt="Hamari Laado"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/LB.png?height=64&width=64"
              alt="Running Logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/5km_logo.png?height=64&width=64"
              alt="5KM Logo"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="w-16 h-16 relative">
            <Image
              src="/BBBP.png?height=64&width=64"
              alt="Girl Power Logo"
              width={64}
              height={64}
              className="rounded-full object-cover" />
          </div>
        </div>

        {/* Event Title and Date */}
        <div className="flex items-center justify-around">
          <div>
            <h1 className="text-lg font-bold">7<sup>th</sup>NEEV GLOBAL 5K RUN</h1>
          </div>
          <div className="flex items-center border border-black rounded px-2 py-1">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="font-bold">8th MARCH</span>
          </div>
        </div>

       {/* Bib Number (Now Dynamic) */}
       <div className="text-center mb-1">
        <h2 className="text-[60px] leading-none font-black">{generatedBib.number}</h2>
        </div>

        {/* powerWord */}
        <div className="text-center mb-1">
          {/* <span className="bg-[#E6E6FA] px-4 py-1 rounded-full text-base font-bold">{generatedBib.powerWord}</span> */}
          <h3 className="text-lg font-bold">{generatedBib.powerWord}</h3>
        </div>

        {/* Runner Name */}
        <div className="text-center mb-0">
         <h3 className="text-lg font-bold">{generatedBib.full_name}</h3>
        </div>
        

        {/* Bottom Banner Image */}
        <div className="text-center relative mb-1">
          <div className="h-16 relative">
            <Image
              src="/2o.svg?height=100&width=400"
              alt="International Women's Day Banner"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* QR Code Section */}
        <div className="mt-2 flex items-center justify-around">
          <p className="text-xs max-w-[60%]">
            Scan the QR code to join our group and see the NEEV Global 5k Run happening worldwide. Share your
            inspirational photos too!
          </p>
          <div className="w-16 h-16 bg-white p-1 rounded">
            <Image
              src="/WhatsappImg.png?height=80&width=80"
              alt="QR Code"
              width={60}
              height={60}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Side Text */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-left">
          <span className="text-sm font-medium">#CelebrateTheGirls</span>
        </div>
        <div className="absolute right-2 slide-in-from-top-1/2 -translate-y-1/2 rotate-90 origin-right">
            <p className="text-xs font-medium"># LadkiyaanBhaageSabseAage</p>
          </div>
        <div className="absolute right-2 top-1/3 -translate-y-1/2 rotate-90 origin-right">
          <span className="text-sm font-medium">#GirlsRun</span>
        </div>
      </div>
          <Button onClick={downloadBib} className="w-full mt-3">
            Download BIB
          </Button>
        </div>
      )}
    </div>
  )
}