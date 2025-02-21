import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationLink = "https://razorpay.me/@hamarilaadofoundation"; // Added donation link

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg md:max-w-2xl lg:max-w-3xl h-full mx-auto p-6 md:p-2 text-center bg-orange-100 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-extrabold text-red-600 text-center">THANK YOU!</DialogTitle>
        </DialogHeader>

        <p className="text-md md:text-lg font-semibold text-blue-600 mt-2">YOUR REGISTRATION IS COMPLETE!</p>
        <p className="text-sm md:text-base text-gray-600 mt-1">
          WE LOOK FORWARD TO SEEING YOU SWEAT AND SMILE ON <strong>MARCH 8th!</strong>
        </p>

        <div className="mt-4">
          <p className="font-semibold text-blue-600 text-sm md:text-base">WOULD YOU LIKE YOUR IMPACT TO LAST LONGER?</p>
          <p className="font-extrabold text-blue-800 text-lg md:text-xl">DONATE BELOW:</p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center mt-4">
          {/* Shoes Donation */}
          <div className="flex flex-col items-center cursor-pointer" onClick={() => window.open(donationLink, "_blank")}>
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#edf9ff] rounded-full shadow-md hover:scale-105 transition-transform">
              <Image src="/shoes_image.png" alt="Shoes Donation" width={60} height={60} className="rounded-full" />
            </div>
            <p className="font-semibold text-black mt-2 text-sm md:text-base">SHOES</p>
            <p className="text-black font-bold text-sm md:text-base">₹700</p>
          </div>

          {/* Run Donation */}
          <div className="flex flex-col items-center cursor-pointer" onClick={() => window.open(donationLink, "_blank")}>
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#edf9ff] rounded-full shadow-md hover:scale-105 transition-transform">
              <Image src="/girl_run(1).png" alt="Run Donation" width={60} height={60} className="rounded-full" />
            </div>
            <p className="font-semibold text-black mt-2 text-sm md:text-base">RUN</p>
            <p className="text-black font-bold text-sm md:text-base">₹15,000</p>
          </div>

          {/* Any Amount Donation */}
          <div className="flex flex-col items-center cursor-pointer" onClick={() => window.open(donationLink, "_blank")}>
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#edf9ff] rounded-full shadow-md hover:scale-105 transition-transform">
              <Image src="/Any other amount_Donation(1).png" alt="Any Amount Donation" width={60} height={60} className="rounded-full" />
            </div>
            <p className="font-semibold text-black mt-2 text-sm md:text-base">ANY AMOUNT</p>
          </div>
        </div>

        {/* Responsive Footer Section */}
        <div className="relative w-full mt-8 rounded-lg">
          <Image 
            src="/footer.png" 
            alt="Footer Background" 
            width={600} 
            height={250} 
            className="w-full h-auto object-cover"
          />
          {/* <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 bg-gradient-to-t from-orange-100 via-transparent">
            <p className="font-extrabold text-black text-sm md:text-lg text-center px-4">
              DONATIONS ACCEPTED IN INR/ FROM INDIAN BANK ACCOUNTS ONLY
            </p>
          </div> */}
        </div>

        {/* <Button onClick={onClose} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm md:text-base">
          Close
        </Button> */}
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
