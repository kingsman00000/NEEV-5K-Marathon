// "use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationLink = "https://razorpay.me/@hamarilaadofoundation"; // Added donation link

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-6 text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-red-600">THANK YOU!</DialogTitle>
        </DialogHeader>

        <p className="text-lg font-semibold text-blue-600">Your registration is complete!</p>
        <p className="text-sm text-gray-600">
          We look forward to seeing you sweat and smile on <strong>March 8th!</strong>
        </p>

        <div className="mt-4">
          <p className="font-semibold text-gray-700">Would you like your impact to last longer?</p>
          <p className="text-sm text-gray-500">Donate Below:</p>
        </div>

        <div className="flex justify-around mt-4">
          {/* Updated buttons to open the donation link */}
          <Button variant="outline" className="p-2" onClick={() => window.open(donationLink, "_blank")}>Shoes ₹700</Button>
          <Button variant="outline" className="p-2" onClick={() => window.open(donationLink, "_blank")}>Run ₹15,000</Button>
          <Button variant="outline" className="p-2" onClick={() => window.open(donationLink, "_blank")}>Any Amount</Button>
        </div>

        <p className="text-xs text-gray-500 mt-4">Donations accepted in INR from Indian bank accounts only</p>

        <DialogFooter>
          <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
