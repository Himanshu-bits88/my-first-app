"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const roles = ["MERN Stack Developer", "Full Stack Developer", "React Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [activeTool, setActiveTool] = useState("Age");

  useEffect(() => {
    let currentRole = roles[roleIndex];
    let i = 0;
    let typing = setInterval(() => {
      if (i <= currentRole.length) {
        setDisplayText(currentRole.slice(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => setRoleIndex((p) => (p + 1) % roles.length), 1500);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [roleIndex]);

  const tools = ["Age", "QR", "Word", "Password", "Image", "LinkedIn", "Instagram", "Facebook"];

  return (
    <main className="min-h-screen bg-[#081030] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I am Himanshu Kumar</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">I am a <span className="text-purple-400">{displayText}</span><span className="animate-pulse">|</span></h2>
          <p className="text-gray-300 mt-6 max-w-2xl text-[15px] leading-relaxed border-l-2 border-purple-500 pl-4">
            BCA Final Year Student (2024-2027) @ BRABU | MERN Stack Developer (React, Next.js) | Looking for new opportunities | Muzaffarpur, Bihar | Passionate about building web applications and exploring new technologies.
          </p>
        </div>
        <img src="/himanshu.jpeg" alt="Himanshu" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 object-cover"/>
      </div>

      <div className="bg-[#0a193f] rounded-t-[40px] p-6 md:p-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center tracking-widest">HK TOOLS LAB</h2>
          <p className="text-center mt-2 opacity-70 text-sm">8 Powerful Tools by Himanshu Kumar | Muzaffarpur Bihar</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {tools.map(t => (
              <button key={t} onClick={() => setActiveTool(t)} className={`px-5 py-2.5 rounded-full border text-sm ${activeTool === t? 'bg-white text-[#0a193f] font-bold' : 'bg-white/10'}`}>{t}</button>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-6 mt-8 max-w-2xl mx-auto min-h-[280px]">
            {activeTool === "Age" && <AgeTool />}
            {activeTool === "QR" && <QRTool />}
            {activeTool === "Word" && <WordTool />}
            {activeTool === "Password" && <PasswordTool />}
            {activeTool === "Image" && <ImageTool />}
            {activeTool === "LinkedIn" && <LinkedInTool />}
            {activeTool === "Instagram" && <InstagramTool />}
            {activeTool === "Facebook" && <FacebookTool />}
            {activeTool === "web site link" && <WebsiteLinkTool />}
          </div>
        </div>
      </div>
    </main>
  )
}

function AgeTool(){ const [dob,setDob]=useState(""); const [age,setAge]=useState(""); return <><h3 className="font-bold mb-3">Age Calculator</h3><input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full p-3 rounded-xl bg-black/40 border border-white/10" /><button onClick={()=>{if(!dob)return; let d=new Date(dob); let diff=Date.now()-d.getTime(); let a=new Date(diff); setAge(`${a.getUTCFullYear()-1970} Years`)}} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Calculate</button>{age && <p className="mt-3 text-center text-green-300 font-bold">{age}</p>}</>}
function QRTool(){ const [text,setText]=useState("https://"); const [src,setSrc]=useState(""); return <><h3 className="font-bold mb-3">QR Generator</h3><input value={text} onChange={e=>setText(e.target.value)} className="w-full p-3 rounded-xl bg-black/40 border" /><button onClick={()=>setSrc(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`)} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Generate QR</button>{src && <img src={src} className="mx-auto mt-4 bg-white p-2 rounded"/>}</>}
function WordTool(){ const [txt,setTxt]=useState(""); return <><h3 className="font-bold mb-3">Word Counter</h3><textarea value={txt} onChange={e=>setTxt(e.target.value)} className="w-full p-3 rounded-xl bg-black/40 h-32 border"></textarea><p className="mt-2 text-sm">Words: {txt.split(" ").filter(x=>x!="").length} | Chars: {txt.length}</p></>}
function PasswordTool(){ const [pass,setPass]=useState("Click Generate"); return <><h3 className="font-bold mb-3">Password Generator</h3><input value={pass} readOnly className="w-full p-3 rounded-xl bg-black/40 text-center" /><button onClick={()=>{let s="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789@#$!"; let p=""; for(let i=0;i<14;i++)p+=s[Math.floor(Math.random()*s.length)]; setPass(p)}} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Generate</button></>}
function ImageTool(){ const handleFile = (e:any) => { let f = e.target.files?.[0]; if(!f) return; let img = new window.Image(); img.src = URL.createObjectURL(f); img.onload = () => { let c = document.createElement('canvas'); c.width = img.width*0.6; c.height = img.height*0.6; let ctx = c.getContext('2d'); ctx?.drawImage(img,0,0,c.width,c.height); let a = document.createElement('a'); a.download='compressed.jpg'; a.href=c.toDataURL('image/jpeg',0.6); a.click(); }}; return <><h3 className="font-bold mb-3">Image Compressor</h3><input type="file" accept="image/*" onChange={handleFile} className="w-full bg-black/30 p-3 rounded-xl" /></>}
function LinkedInTool(){ const [role,setRole]=useState("BCA Final Year"); const [bio,setBio]=useState(""); return <><h3 className="font-bold mb-3">LinkedIn Bio</h3><input value={role} onChange={e=>setRole(e.target.value)} className="w-full p-3 rounded-xl bg-black/40" /><button onClick={()=>setBio(`🚀 ${role} | MERN Stack Developer | React, Next.js | Looking for Internship | Muzaffarpur`)} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Generate</button>{bio && <textarea value={bio} readOnly className="w-full mt-3 p-3 rounded-xl bg-black/40 h-24 text-sm"></textarea>}</>}
function InstagramTool(){ const [name,setName]=useState("Himanshu"); const [bio,setBio]=useState(""); return <><h3 className="font-bold mb-3">Instagram Bio</h3><input value={name} onChange={e=>setName(e.target.value)} className="w-full p-3 rounded-xl bg-black/40" /><button onClick={()=>setBio(`✨ ${name}\n💻 BCA Final Year @ BRABU\n🚀 MERN Stack Dev\n📍 Muzaffarpur`)} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Generate</button>{bio && <textarea value={bio} readOnly className="w-full mt-3 p-3 rounded-xl bg-black/40 h-24 text-sm"></textarea>}</>}
function WebsiteLinkTool(){ const [url,setUrl]=useState("https://"); const [title,setTitle]=useState("My Website"); return <><h3 className="font-bold mb-3">Website Link</h3><input value={url} onChange={e=>setUrl(e.target.value)} className="w-full p-3 rounded-xl bg-black/40" /><input value={title} onChange={e=>setTitle(e.target.value)} className="w-full p-3 rounded-xl bg-black/40 mt-3" /><button onClick={()=>{const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = title; document.body.appendChild(link);}}} className="w-full mt-4 bg-white text-blue-900 p-3 rounded-xl font-bold">Generate Link</button></>}
<footer className="w-full text-center py-8 mt-10 border-t border-white/10">
  <p className="text-white text-sm">
    Made in India with <span className="text-red-500">❤️</span> by Himanshu Kumar
  </p>
  <div className="flex justify-center gap-4 mt-3">
    <a href="https://github.com/Himanshu-bits88/" className="text-xs bg-white/10 px-3 py-1 rounded-full">GitHub</a>
    <a href="https://www.linkedin.com/in/himanshu-kumar-2b8418355/" className="text-xs bg-white/10 px-3 py-1 rounded-full">LinkedIn</a>
    <a href="https://instagram.com/royal_himanshu_kumar_1013/" className="text-xs bg-white/10 px-3 py-1 rounded-full">Instagram</a>
    <a href="mailto:hk955539@gmail.com" className="text-xs bg-white/10 px-3 py-1 rounded-full">Email</a>
  </div>
  <p className="text-[10px] text-white/40 mt-4">© 2026 Himanshu Kumar | Muzaffarpur, Bihar</p>
</footer>