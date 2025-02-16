
// import type React from "react"
// import { useState, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import html2canvas from "html2canvas"

// let bibNumber = 1000 // Starting BIB number

// export default function BibCreator() {
//   const [name, setName] = useState("")
//   const [generatedBib, setGeneratedBib] = useState<string | null>(null)
//   const bibRef = useRef<HTMLDivElement>(null)

//   const generateBib = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (name.trim()) {
//       bibNumber++
//       setGeneratedBib(name)
//     }
//   }

//   const downloadBib = () => {
//     if (bibRef.current) {
//       html2canvas(bibRef.current).then((canvas) => {
//         const link = document.createElement("a")
//         link.download = `NEEV_5K_BIB_${bibNumber}.png`
//         link.href = canvas.toDataURL()
//         link.click()
//       })
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
//       <h1 className="text-2xl font-bold mb-6 text-center">NEEV 5K BIB Creator</h1>
//       <form onSubmit={generateBib} className="space-y-4">
//         <div>
//           <Label htmlFor="name">Participant Name</Label>
//           <Input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <Button type="submit" className="w-full">
//           Generate BIB
//         </Button>
//       </form>

//       {generatedBib && (
//         <div className="mt-8">
//           <div ref={bibRef} className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
//             <h2 className="text-xl font-bold mb-2">NEEV 5K</h2>
//             <p className="text-4xl font-bold mb-2">{bibNumber}</p>
//             <p className="text-xl">{generatedBib}</p>
//           </div>
//           <Button onClick={downloadBib} className="w-full mt-4">
//             Download BIB
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import html2canvas from "html2canvas";
import { IP_ADDR, PORT } from "./parameters";

export default function BibCreator() {
  const [name, setName] = useState("");
  const [generatedBib, setGeneratedBib] = useState<{ full_name: string; bib_number: number } | null>(null);
  const bibRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateBib = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`http://${IP_ADDR}:${PORT}/generatebib?full_name=${encodeURIComponent(name)}`);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setGeneratedBib(data);
      } else {
        setError(data.error || "Failed to generate BIB");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
    setLoading(false);
  };

  const downloadBib = () => {
    if (bibRef.current) {
      html2canvas(bibRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = `NEEV_5K_BIB_${generatedBib?.bib_number}.png`;
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

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
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Generating..." : "Generate BIB"}
        </Button>
      </form>
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      {generatedBib && (
        <div className="mt-8">
          <div ref={bibRef} className="bg-yellow-200 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold mb-2">NEEV 5K</h2>
            <p className="text-4xl font-bold mb-2">{generatedBib.bib_number}</p>
            <p className="text-xl">{generatedBib.full_name}</p>
          </div>
          <Button onClick={downloadBib} className="w-full mt-4">
            Download BIB
          </Button>
        </div>
      )}
    </div>
  );
}
