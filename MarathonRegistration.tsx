"use client"

import { useState } from "react"
import { MapPin, Ticket, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countries, indianStates } from "./country-data"

export default function MarathonRegistration() {
  const [registrationType, setRegistrationType] = useState<"neev" | "location">("neev")
  const [selectedCountry, setSelectedCountry] = useState("IN")
  const [selectedState, setSelectedState] = useState("")

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    setSelectedState("")
  }
console.log(indianStates)   
  return (
    <Card className="w-full max-w-md mx-auto p-5">
      <CardHeader>
        <div className="flex items-center gap-2 mb-3">
          <Ticket className="w-6 h-6 text-blue-600" />
          <CardTitle className="text-xl">Marathon Registration</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button
            variant={registrationType === "neev" ? "default" : "outline"}
            className="flex-1 text-sm"
            onClick={() => setRegistrationType("neev")}
          >
            <Users className="w-3 h-3 mr-1" />
            with NEEV Girls
          </Button>
          <Button
            variant={registrationType === "location" ? "default" : "outline"}
            className="flex-1 text-xs"
            onClick={() => setRegistrationType("location")}
          >
            <MapPin className="w-3 h-3 mr-1" />
            From My Location
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="space-y-1">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Enter your full name" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="gender">Gender</Label>
          <Select>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select Gender" className="text-xs"/>
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
          <div className="flex gap-2">
            <Select defaultValue="+91">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>

                {/*countries*/}
                {/* {countries.map((country) => (
                  <SelectItem key={country.code} value={country.phone}>
                    <span className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.phone}</span>
                    </span>
                  </SelectItem>
                ))} */}

              </SelectContent>
            </Select>
            <Input id="phone" type="tel" className="flex-1" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select value={selectedCountry} onValueChange={handleCountryChange}>
            <SelectTrigger id="country">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>

              {/*countries*/}
              {/* {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  <span className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </span>
                </SelectItem>
              ))} */}

            </SelectContent>
          </Select>
        </div>
        {selectedCountry === "IN" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>

                  {/*indianstates*/}
                  {/* {indianStates.map((state) => (
                    <SelectItem key={state.code} value={state.code}>
                      {state.name}
                    </SelectItem>
                  ))} */}

                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Select>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {selectedState &&
                    indianStates
                      .find((state) => state.code === selectedState)
                      ?.cities.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-1 text-xs">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs">Register and Pay</Button>
        <div className="text-center text-muted-foreground">
          <p>Registration Fee: ₹500</p>
          <p className="text-[10px]">Secure payment powered by Razorpay</p>
        </div>
      </CardFooter>
    </Card>
  )
}

