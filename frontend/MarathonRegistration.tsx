"use client";

import { useState } from "react";
import { MapPin, Ticket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IP_ADDR } from "./parameters";
import Popup from "./Popup"; // Importing the popup component
import PhoneInput from "react-phone-input-2"; // Phone input component import
import "react-phone-input-2/lib/style.css"; // Phone input component styles
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Gender section components import


interface FormData {
  name: string;
  email: string;
  gender: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  mode: string;
  termsAccepted: boolean;
}

export default function MarathonRegistration() {
  const [registrationType, setRegistrationType] = useState<'neev' | 'location'>('neev');
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    mode: "Online",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setAlert] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // Popup state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => { // Added function to handle select input change
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (value: string) => { // Added function to handle phone input change
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.state || !formData.city || !formData.termsAccepted) {
      setAlert("Please fill all required fields and accept the terms.");
      return;
    }

    setLoading(true);
    setAlert("");

    try {
      const response = await fetch(`${IP_ADDR}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert("Registration successful!");
        setIsPopupOpen(true); // Open popup on successful registration
      } else {
        setAlert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert("An error occurred. Please try again later.");
    }
    console.log(formData);
     setLoading(false);

    // e.preventDefault();
    // setAlert("Registration successful!");
    // setIsPopupOpen(true);
  };


  return (
    <Card className="h-[600px] overflow-y-auto w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-4">
          <Ticket className="w-6 h-6 text-blue-600" />
          <CardTitle>Marathon Registration</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant={registrationType === "neev" ? "default" : "outline"} className="flex-1" onClick={() => setRegistrationType("neev")}>
            <Users className="w-4 h-4 mr-2" />
            with NEEV Girls
          </Button>
          {/* <Button variant={registrationType === "location" ? "default" : "outline"} className="flex-1" onClick={() => setRegistrationType("location")}>
            <MapPin className="w-4 h-4 mr-2" />
            From My Location
          </Button> */}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label> {/* Added Gender section */}
            <Select onValueChange={(value) => handleSelectChange("gender", value)}>
              <SelectTrigger id="gender" className="w-full">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <PhoneInput country={'in'} value={formData.phone} onChange={handlePhoneChange} inputStyle={{ width: "100%" }} /> {/* Replaced Input with PhoneInput */}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={formData.termsAccepted} onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: Boolean(checked) })} />
            <Label htmlFor="terms" className="text-sm">
              I agree to the {" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </Label>
          </div>
          {message && <p className="text-sm text-red-600">{message}</p>}

          <Button className="w-full bg-blue-600 hover:bg-blue-700" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Register Now"}
          </Button>
        </form>
      </CardContent>

      {/* Footer message added here */}
      <CardFooter className="text-sm font-bold text-red-600 text-center">
    Please Don't use same USERNAME & EMAIL ID Again.
  </CardFooter>
      {/* Popup Modal */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </Card>
  );
}
