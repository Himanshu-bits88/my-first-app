"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const roles = ["MERN Stack Developer", "Full Stack Developer", "React Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [activeTool, setActiveTool] = useState("CodeLab");

  useEffect(() => {
    let currentRole = roles[roleIndex]; let i = 0;
    let typing = setInterval(() => {
      if (i <= currentRole.length) { setDisplayText(currentRole.slice(0, i)); i++; }
      else { clearInterval(typing); setTimeout(() => setRoleIndex((p) => (p + 1) % roles.length), 1500); }
    }, 100); return () => clearInterval(typing);
  }, [roleIndex]);

  const tools = ["GetInTouch","Login","Signup","CodeLab","VSCode","Design","Calculator","Age","QR","Word","Password","Image","LinkedIn","Instagram","Facebook","CGPA","EMI","YT","Case","Stories"];

  return (
    <main className="min-h-screen bg-[#081030] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I am Himanshu Kumar</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">I am a <span className="text-purple-400">{displayText}</span><span className="animate-pulse">|</span></h2>
          <p className="text-gray-300 mt-6 max-w-2xl text-[15px] leading-relaxed border-l-2 border-purple-500 pl-4">BCA Final Year Student (2024-2027) @ BRABU | MERN Stack Developer (React, Next.js) | Looking for new opportunities | Muzaffarpur, Bihar | Passionate about building web applications|Skills-C-programming, Java, HTML,c++,SQL,github|languages: English, Hindi</p>
        </div>
        <img src="/himanshu.jpeg" alt="Himanshu" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500 object-cover"/>
      </div>

      <div className="bg-[#0a193f] rounded-t-[40px] p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center tracking-widest">HK TOOLS LAB PROJECT</h2>
          <p className="text-center mt-2 opacity-70 text-sm">20 All Tools | C/Java/Python 100% Working</p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {tools.map(t => (
              <button key={t} onClick={() => setActiveTool(t)} className={`px-3 py-2 rounded-full border text-[10px] md:text-xs ${activeTool === t? 'bg-white text-[#0a193f] font-bold' : 'bg-white/10'}`}>{t}</button>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-5 md:p-8 mt-8 max-w-5xl mx-auto min-h-[500px]">
            {activeTool === "GetInTouch" && <GetInTouchTool />}
            {activeTool === "Login" && <LoginTool />}
            {activeTool === "Signup" && <SignupTool />}
            {activeTool === "CodeLab" && <CodeLabTool />}
            {activeTool === "VSCode" && <VSCodeTool />}
            {activeTool === "Design" && <DesignTool />}
            {activeTool === "Calculator" && <CalculatorTool />}
            {activeTool === "Age" && <AgeTool />}
            {activeTool === "QR" && <QRTool />}
            {activeTool === "Word" && <WordTool />}
            {activeTool === "Password" && <PasswordTool />}
            {activeTool === "Image" && <ImageTool />}
            {activeTool === "LinkedIn" && <LinkedInTool />}
            {activeTool === "Instagram" && <InstagramTool />}
            {activeTool === "Facebook" && <FacebookTool />}
            {activeTool === "CGPA" && <CGPATool />}
            {activeTool === "EMI" && <EMITool />}
            {activeTool === "YT" && <YTTool />}
            {activeTool === "Case" && <CaseTool />}
            {activeTool === "Stories" && <StoriesTool />}
          </div>
        </div>
      </div>

      <footer className="w-full text-center py-10 mt-10 border-t border-white/10">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.linkedin.com/in/himanshu-kumar-2b8418355" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-[#081030]">in</a>
          <a href="https://github.com/Himanshu-bits88" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-[#081030]">GH</a>
          <a href="http://hk955539@gmail.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-[#081030]">@</a>
          <a href="https://instagram.com/royal_himanshu_kumar_1013" target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-[#081030]">IG</a>
        </div>
        <p className="text-white text-sm font-bold">Made in India with ❤️ by Himanshu Kumar</p>
        <p className="text-white/30 text-[10px] mt-2">Copyright © 2026 HK Tools Lab - 20 All Tools</p>
      </footer>
    </main>
  )
}
function GetInTouchTool(){
  const [form,setForm]=useState({name:"",email:"",subject:"",message:""});
  const [sent,setSent]=useState(false);
  return(
    <div className="max-w-xl mx-auto bg-white rounded-[20px] p-6 text-black">
      <h3 className="font-bold text-xl">Get in Touch</h3>
      <div className="space-y-3 mt-4">
        <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-50 border text-sm"/>
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 rounded-lg bg-gray-50 border text-sm"/>
        <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-gray-50 border text-sm"></textarea>
        <button onClick={()=>{setSent(true); setTimeout(()=>setSent(false),2000)}} className="bg-[#081030] text-white px-6 py-2 rounded-lg text-sm font-bold">{sent?"Sent ✓":"Send Message"}</button>
      </div>
    </div>
  )
}

function LoginTool(){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  return(
    <div className="max-w-md mx-auto bg-white rounded-[20px] p-6 text-black">
      <h3 className="font-bold">Login</h3>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mt-3 rounded-lg bg-gray-50 border text-sm"/>
      <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" className="w-full p-3 mt-3 rounded-lg bg-gray-50 border text-sm"/>
      <button onClick={()=>alert("Login: "+email)} className="w-full mt-3 bg-[#081030] text-white py-2 rounded-lg text-sm font-bold">Login</button>
    </div>
  )
}

function SignupTool(){
  const [form,setForm]=useState({name:"",email:"",pass:"",cpass:""});
  return(
    <div className="max-w-md mx-auto bg-white rounded-[20px] p-6 text-black">
      <h3 className="font-bold">Signup</h3>
      <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full p-3 mt-3 rounded-lg bg-gray-50 border text-sm"/>
      <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 mt-3 rounded-lg bg-gray-50 border text-sm"/>
      <input value={form.pass} onChange={e=>setForm({...form,pass:e.target.value})} type="password" placeholder="Password" className="w-full p-3 mt-3 rounded-lg bg-gray-50 border text-sm"/>
      <button onClick={()=>alert("Account Created")} className="w-full mt-3 bg-[#081030] text-white py-2 rounded-lg text-sm font-bold">Sign Up</button>
    </div>
  )
}

function CodeLabTool(){
  const [lang,setLang]=useState("Python");
  const [code,setCode]=useState(`print("Hello Himanshu from Muzaffarpur,Bihar")`);
  const [output,setOutput]=useState("");
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    const t:any={
      "Python":`print("Hello Himanshu from Muzaffarpur,Bihar")\nprint("HK Tools Lab Working")`,
      "C":`#include <stdio.h>\nint main(){\n printf("Hello C from HK Lab\\n");\n return 0;\n}`,
      "Java":`public class Main{\n public static void main(String[] args){\n System.out.println("Hello Java from HK Lab");\n }\n}`,
      "JavaScript":`console.log("Hello JS from HK Lab")`,
      "HTML":`<h1>Hello HK Lab</h1>`,
      "Node.js":`console.log("Node Running")`,
      "UI/UX":`.btn{background:#a855f7}`
    };
    setCode(t[lang]);
  },[lang]);

  const run=async()=>{
    if(lang==="HTML"){setOutput("Preview below"); return;}
    if(lang==="JavaScript"||lang==="Node.js"){ try{let l:any[]=[];let o=console.log;console.log=(...a:any)=>l.push(a.join(" "));eval(code);console.log=o;setOutput(l.join("\n"))}catch(e:any){setOutput(e.message)} return;}
    setLoading(true);
    try{
      let pl = lang.toLowerCase()==="python"?"python":lang.toLowerCase()==="c"?"c":"java";
      let fn = pl==="java"?"Main.java":pl==="python"?"main.py":"main.c";
      let r = await fetch("https://emkc.org/api/v2/piston/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:pl,version:"*",files:[{name:fn,content:code}]})});
      let d = await r.json(); setOutput(d.run?.output || "No output");
    }catch(e:any){setOutput("API Error: "+e.message)}
    setLoading(false);
  };

  return(
    <div>
      <h3 className="font-bold mb-3">Code Lab - C/Java/Python Working</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {["Python","C","Java","JavaScript","HTML","Node.js","UI/UX"].map(l=>(
          <button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded-full text-xs border ${lang===l?'bg-white text-black':'bg-white/10'}`}>{l}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <textarea value={code} onChange={e=>setCode(e.target.value)} className="w-full h-64 bg-black p-3 rounded-xl text-xs font-mono text-green-300"/>
        <div>
          <button onClick={run} className="w-full bg-white text-black py-2 rounded-xl font-bold text-sm">{loading?"Running...":"Run "+lang}</button>
          <pre className="w-full h-56 bg-black/60 mt-3 p-3 rounded-xl text-xs text-yellow-200 overflow-auto">{output || "Click Run"}</pre>
        </div>
      </div>
    </div>
  )
}

function VSCodeTool(){
  const [code,setCode]=useState(`console.log("Hello")`);
  const [out,setOut]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">VS Code Mini</h3>
      <textarea value={code} onChange={e=>setCode(e.target.value)} className="w-full h-32 bg-black p-3 rounded-xl text-xs font-mono text-green-300"/>
      <button onClick={()=>{try{let l:any[]=[];let o=console.log;console.log=(...a:any)=>l.push(a.join(" "));eval(code);console.log=o;setOut(l.join("\n"))}catch(e:any){setOut(e.message)}}} className="mt-2 bg-green-600 px-4 py-1 rounded text-xs">Run</button>
      <pre className="mt-2 bg-black p-2 rounded text-xs text-yellow-300">{out}</pre>
    </div>
  )
}

function DesignTool(){
  const [c1,setC1]=useState("#a855f7");
  const [c2,setC2]=useState("#081030");
  return(
    <div>
      <h3 className="font-bold mb-3">Design Studio</h3>
      <div className="flex gap-2"><input type="color" value={c1} onChange={e=>setC1(e.target.value)}/><input type="color" value={c2} onChange={e=>setC2(e.target.value)}/></div>
      <div style={{background:`linear-gradient(90deg, ${c1}, ${c2})`}} className="h-24 rounded-xl mt-3"></div>
    </div>
  )
}

function CalculatorTool(){
  const [v,setV]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Calculator</h3>
      <input value={v} readOnly className="w-full p-3 rounded-xl bg-black/50 text-right"/>
      <div className="grid grid-cols-4 gap-2 mt-3">
        {["C","/","*","-","7","8","9","+","4","5","6","=","1","2","3","0"].map(b=>(
          <button key={b} onClick={()=>{if(b==="C")setV("");else if(b==="="){try{setV(eval(v).toString())}catch{setV("Error")}}else setV(v+b)}} className="p-2 rounded bg-white/10">{b}</button>
        ))}
      </div>
    </div>
  )
}

function AgeTool(){
  const [dob,setDob]=useState("");
  const [age,setAge]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Age Calculator</h3>
      <input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>{let b=new Date(dob);let n=new Date();setAge((n.getFullYear()-b.getFullYear())+" Years")}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Calculate</button>
      <p className="mt-2 text-center text-green-300">{age}</p>
    </div>
  )
}

function QRTool(){
  const [t,setT]=useState("");
  const [s,setS]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">QR Generator</h3>
      <input value={t} onChange={e=>setT(e.target.value)} placeholder="Enter text" className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>setS(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>
      {s && <img src={s} className="mx-auto mt-3 bg-white p-2 rounded"/>}
    </div>
  )
}

function WordTool(){
  const [txt,setTxt]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Word Counter</h3>
      <textarea value={txt} onChange={e=>setTxt(e.target.value)} className="w-full h-24 p-2 rounded bg-black/30"></textarea>
      <p className="mt-2 text-sm">Words: {txt.split(/\s+/).filter(Boolean).length} | Chars: {txt.length}</p>
    </div>
  )
}

function PasswordTool(){
  const [p,setP]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Password Generator</h3>
      <p className="bg-black/50 p-3 rounded text-center">{p || "Click Generate"}</p>
      <button onClick={()=>{let s="ABCDEFGHJKLMNPQRTUVWXYZabcdefghijkmnopqrstuvwxyz123456789@#$";let r="";for(let i=0;i<12;i++)r+=s[Math.floor(Math.random()*s.length)];setP(r)}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>
    </div>
  )
}

function ImageTool(){
  return(
    <div>
      <h3 className="font-bold mb-3">Image Compressor</h3>
      <input type="file" accept="image/*" onChange={(e:any)=>{let f=e.target.files[0];let img=new window.Image();img.src=URL.createObjectURL(f);img.onload=()=>{let c=document.createElement('canvas');c.width=img.width*0.6;c.height=img.height*0.6;c.getContext('2d')?.drawImage(img,0,0,c.width,c.height);let a=document.createElement('a');a.download='compressed.jpg';a.href=c.toDataURL('image/jpeg',0.6);a.click()}}} className="w-full bg-black/20 p-2 rounded"/>
    </div>
  )
}

function LinkedInTool(){
  const [r,setR]=useState("BCA Final Year");
  const [b,setB]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">LinkedIn Bio</h3>
      <input value={r} onChange={e=>setR(e.target.value)} className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>setB(`🚀 ${r} | MERN Stack Developer`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>
      {b && <p className="mt-3 bg-black/40 p-2 rounded text-sm">{b}</p>}
    </div>
  )
}

function InstagramTool(){
  const [n,setN]=useState("Himanshu");
  const [b,setB]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Instagram Bio</h3>
      <input value={n} onChange={e=>setN(e.target.value)} className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>setB(`✨ ${n}\n💻 MERN Developer`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>
      {b && <p className="whitespace-pre mt-3 bg-black/40 p-2 rounded text-sm">{b}</p>}
    </div>
  )
}

function FacebookTool(){
  const [n,setN]=useState("Himanshu Kumar");
  const [b,setB]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Facebook Bio</h3>
      <input value={n} onChange={e=>setN(e.target.value)} className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>setB(`🔥 ${n} | BCA Student | MERN`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>
      {b && <p className="mt-3 bg-black/40 p-2 rounded text-sm">{b}</p>}
    </div>
  )
}

function CGPATool(){
  const [m,setM]=useState("");
  const [t,setT]=useState("600");
  const [r,setR]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">CGPA Calculator</h3>
      <input value={m} onChange={e=>setM(e.target.value)} placeholder="Obtained" type="number" className="w-full p-2 rounded bg-black/30"/>
      <input value={t} onChange={e=>setT(e.target.value)} placeholder="Total" type="number" className="w-full p-2 mt-2 rounded bg-black/30"/>
      <button onClick={()=>{let p=(Number(m)/Number(t))*100;setR(p.toFixed(2)+"% | CGPA: "+(p/9.5).toFixed(2))}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Calculate</button>
      <p className="mt-2 text-green-300 text-center">{r}</p>
    </div>
  )
}

function EMITool(){
  const [a,setA]=useState("100000");
  const [ra,setRa]=useState("10");
  const [y,setY]=useState("2");
  const [e,setE]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">EMI Calculator</h3>
      <input value={a} onChange={e=>setA(e.target.value)} placeholder="Loan Amount" className="w-full p-2 rounded bg-black/30"/>
      <div className="flex gap-2 mt-2">
        <input value={ra} onChange={e=>setRa(e.target.value)} placeholder="Rate %" className="w-1/2 p-2 rounded bg-black/30"/>
        <input value={y} onChange={e=>setY(e.target.value)} placeholder="Years" className="w-1/2 p-2 rounded bg-black/30"/>
      </div>
      <button onClick={()=>{let P=Number(a);let r=Number(ra)/12/100;let n=Number(y)*12;let emi=P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);setE("EMI: ₹"+emi.toFixed(0))}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Calculate</button>
      <p className="mt-2 text-green-300 text-center">{e}</p>
    </div>
  )
}

function YTTool(){
  const [url,setUrl]=useState("");
  const [thumb,setThumb]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">YouTube Thumbnail</h3>
      <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="YouTube URL" className="w-full p-2 rounded bg-black/30"/>
      <button onClick={()=>{let id=url.split("v=")[1]?.split("&")[0]||url.split("youtu.be/")[1]?.split("?")[0];if(id)setThumb(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Get Thumbnail</button>
      {thumb && <img src={thumb} className="mt-3 rounded-xl"/>}
    </div>
  )
}

function CaseTool(){
  const [txt,setTxt]=useState("");
  return(
    <div>
      <h3 className="font-bold mb-3">Case Converter</h3>
      <textarea value={txt} onChange={e=>setTxt(e.target.value)} className="w-full h-20 p-2 rounded bg-black/30"></textarea>
      <div className="grid grid-cols-3 gap-2 mt-2">
        <button onClick={()=>setTxt(txt.toUpperCase())} className="bg-white/10 p-2 rounded text-xs">UPPER</button>
        <button onClick={()=>setTxt(txt.toLowerCase())} className="bg-white/10 p-2 rounded text-xs">lower</button>
        <button onClick={()=>navigator.clipboard.writeText(txt)} className="bg-white text-black p-2 rounded text-xs font-bold">Copy</button>
      </div>
    </div>
  )
}

function StoriesTool(){
  return(
    <div>
      <h3 className="font-bold mb-3">Success Story</h3>
      <div className="bg-black/30 p-4 rounded-xl">
        <h4 className="font-bold">Muzaffarpur to MERN Developer</h4>
        <p className="text-xs mt-2 opacity-70">Main Himanshu Kumar, BCA Final Year, BRABU. Phone se coding seekhi, aaj HK Tools Lab banaya.</p>
      </div>
    </div>
  )
}