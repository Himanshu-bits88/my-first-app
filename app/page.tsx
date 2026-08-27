"use client";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("age");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [qrText, setQrText] = useState("Himanshu Kumar");
  const [wordText, setWordText] = useState("");
  const [passLength, setPassLength] = useState(12);
  const [password, setPassword] = useState("Click Generate");
  const [instaText, setInstaText] = useState("Himanshu");
  const [fbText, setFbText] = useState("Himanshu");

  const calculateAge = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) years--;
    setAge(years + " Years Old");
  };

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let pass = "";
    for (let i = 0; i < passLength; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e40af] to-[#020617] text-white p-4">
      
      {/* HEADER */}
      <header className="text-center py-10">
        <div className="relative inline-block">
          <div className="absolute -inset-2 bg-blue-400/30 rounded-full blur-2xl"></div>
          <img src="/himanshu.jpeg" alt="Himanshu Kumar" className="relative w-36 h-36 rounded-full mx-auto border-4 border-white shadow-2xl object-cover" />
        </div>
        <h1 className="text-5xl font-black mt-6 tracking-wider">HK TOOLS LAB</h1>
        <p className="text-blue-200 mt-3 text-lg font-medium">8 Powerful Tools by Himanshu Kumar | Muzaffarpur Bihar</p>
      </header>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 justify-center my-8 max-w-3xl mx-auto">
        {[
          { id: "age", name: "Age" },
          { id: "qr", name: "QR" },
          { id: "word", name: "Word" },
          { id: "pass", name: "Password" },
          { id: "image", name: "Image" },
          { id: "linkedin", name: "LinkedIn" },
          { id: "instagram", name: "Instagram" },
          { id: "facebook", name: "Facebook" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === t.id ? "bg-white text-blue-900 shadow-lg scale-105" : "bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* TOOL BOX */}
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
        
        {activeTab === "age" && (
          <div>
            <h2 className="font-bold mb-4 text-xl">1. Age Calculator</h2>
            <input type="date" className="w-full p-3 rounded-lg bg-black/30 border border-white/20" onChange={(e) => setDob(e.target.value)} />
            <button onClick={calculateAge} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-lg font-bold">Calculate</button>
            <p className="mt-4 text-2xl text-center font-bold">{age}</p>
          </div>
        )}

        {activeTab === "qr" && (
          <div>
            <h2 className="font-bold mb-4 text-xl">2. QR Code Maker</h2>
            <input value={qrText} onChange={(e) => setQrText(e.target.value)} className="w-full p-3 rounded-lg bg-black/30 border border-white/20" />
            <div className="flex justify-center mt-4 bg-white p-4 rounded-xl">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`} alt="QR" />
            </div>
          </div>
        )}

        {activeTab === "word" && (
          <div>
            <h2 className="font-bold mb-4 text-xl">3. Word Counter</h2>
            <textarea value={wordText} onChange={(e) => setWordText(e.target.value)} className="w-full h-32 p-3 rounded-lg bg-black/30 border border-white/20" placeholder="Type here..."></textarea>
            <div className="mt-3 bg-black/30 p-3 rounded-lg text-center">Words: {wordText.trim() ? wordText.trim().split(/\s+/).length : 0} | Chars: {wordText.length}</div>
          </div>
        )}

        {activeTab === "pass" && (
          <div>
            <h2 className="font-bold mb-4 text-xl">4. Password Generator</h2>
            <p className="text-sm mb-2">Length: {passLength}</p>
            <input type="range" min={6} max={30} value={passLength} onChange={(e) => setPassLength(Number(e.target.value))} className="w-full accent-white" />
            <button onClick={generatePassword} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-lg font-bold">Generate</button>
            <p className="mt-4 p-3 bg-black/40 rounded-lg text-center break-all border border-white/20 font-mono">{password}</p>
          </div>
        )}

        {activeTab === "image" && <div><h2 className="font-bold text-xl">5. Image Tools</h2><p className="mt-2 text-blue-200">Compress & Converter Coming Soon...</p></div>}
        {activeTab === "linkedin" && <div><h2 className="font-bold text-xl">6. LinkedIn Bio</h2><div className="bg-black/30 p-4 rounded-xl mt-3 text-sm border border-white/10">Aspiring Full Stack Developer (MERN) | BCA Student | Building HK TOOLS LAB | Muzaffarpur, Bihar | Open to Internships</div></div>}
        {activeTab === "instagram" && <div><h2 className="font-bold text-xl">7. Instagram Fonts</h2><input value={instaText} onChange={(e) => setInstaText(e.target.value)} className="w-full p-3 rounded-lg bg-black/30 border border-white/20 mt-3" /><p className="mt-3 bg-black/30 p-3 rounded-lg text-center text-xl">꧁༒ {instaText} ༒꧂</p></div>}
        {activeTab === "facebook" && <div><h2 className="font-bold text-xl">8. Facebook Fonts</h2><input value={fbText} onChange={(e) => setFbText(e.target.value)} className="w-full p-3 rounded-lg bg-black/30 border border-white/20 mt-3" /><p className="mt-3 bg-black/30 p-3 rounded-lg text-center text-xl">꧁ {fbText} ꧂</p></div>}

      </div>

      {/* FOOTER */}
      <footer className="text-center mt-12 pt-8 border-t border-white/10">
        <p className="text-blue-200 text-sm">Made in India with ❤️ by Himanshu Kumar</p>
        <div className="flex justify-center gap-3 mt-4">
          <a href="https://github.com/Himanshu-bits88" target="_blank" className="bg-white/10 px-4 py-2 rounded-full text-xs">GitHub</a>
          <a href="https://www.linkedin.com/in/himanshu-kumar-2b8418355" target="_blank" className="bg-white/10 px-4 py-2 rounded-full text-xs">LinkedIn</a>
          <a href="https://instagram.com/royal_himanshu_kumar_1013" target="_blank" className="bg-white/10 px-4 py-2 rounded-full text-xs">Instagram</a>
          <a href="https://mailto:hk955539@gmail.com" target="_blank" className="bg-white/10 px-4 py-2 rounded-full text-xs">Email</a>
        </div>
        <p className="text-white/30 text-xs mt-4"> copyright © 2026 Himanshu Kumar</p>
      </footer>
    </main>
  );
}