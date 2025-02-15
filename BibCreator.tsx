
import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import html2canvas from "html2canvas"

let bibNumber = 1000 // Starting BIB number

export default function BibCreator() {
  const [name, setName] = useState("")
  const [generatedBib, setGeneratedBib] = useState<string | null>(null)
  const bibRef = useRef<HTMLDivElement>(null)

  const generateBib = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      bibNumber++
      setGeneratedBib(name)
    }
  }

  const downloadBib = () => {
    if (bibRef.current) {
      html2canvas(bibRef.current).then((canvas) => {
        const link = document.createElement("a")
        link.download = `NEEV_5K_BIB_${bibNumber}.png`
        link.href = canvas.toDataURL()
        link.click()
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">NEEV 5K BIB Creator</h1>
      <form onSubmit={generateBib} className="space-y-4">
        <div>
          <Label htmlFor="name">Participant Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Generate BIB
        </Button>
      </form>

      {generatedBib && (
        <div className="mt-8">
          <div ref={bibRef} className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">NEEV 5K</h2>
            <p className="text-4xl font-bold mb-2">{bibNumber}</p>
            <p className="text-xl">{generatedBib}</p>
          </div>
          <Button onClick={downloadBib} className="w-full mt-4">
            Download BIB
          </Button>
        </div>
      )}
    </div>
  )
}

