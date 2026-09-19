"use client";

import {useState} from "react";

type S="Array"|"Stack"|"Queue"|"Linked List";
const data:S[]=["Array","Stack","Queue","Linked List"];

export default function Home(){
 const [s,setS]=useState<S>("Array");
 const [v,setV]=useState([12,25,7,31,18]);
 const [op,setOp]=useState("insert");
 const [active,setActive]=useState(-1);
 const [msg,setMsg]=useState("Ready");

 function run(){
  if(op==="insert"){
   const n=(v[v.length-1]||0)+5;
   setV([...v,n]); setActive(v.length); setMsg("Inserted "+n);
  }else if(op==="delete"&&v.length){
   setMsg("Deleted "+v[v.length-1]); setV(v.slice(0,-1)); setActive(-1);
  }else if(op==="search"&&v.length){
   const target=v[Math.floor(v.length/2)];
   let i=0; setMsg("Searching...");
   const timer=setInterval(()=>{
    if(i>=v.length){clearInterval(timer);setMsg("Not found");return}
    setActive(i);
    if(v[i]===target){clearInterval(timer);setMsg("Found "+target)}
    i++;
   },400);
  }
 }
 function reset(){setV([12,25,7,31,18]);setMsg("Reset");setActive(-1)}

 return <main>
  <header><b><span>DS</span> DSA Visualizer</b><small>Learn by seeing it happen</small></header>
  <section className="hero"><div><label>DATA STRUCTURES + ALGORITHMS</label><h1>Understand DSA<br/><em>visually.</em></h1><p>Build, manipulate and step through data structures while seeing exactly what each operation does.</p></div><div className="heroCard"><label>CURRENT STRUCTURE</label><strong>{s}</strong><div className="bars"><i/><i/><i/><i/></div></div></section>
  <section className="work">
   <aside className="left"><h3>Data Structures</h3>{data.map(x=><button className={x===s?"active":""} onClick={()=>{setS(x);setMsg("Ready");setActive(-1)}} key={x}>{x}</button>)}</aside>
   <div><div className="head"><div><label>VISUALIZATION</label><h2>{s}</h2></div><button onClick={reset}>↻ Reset</button></div>
    <div className="card"><div className="status">{msg}</div><div className="nodes">{v.map((n,i)=><div className="wrap" key={i}><div className={i===active?"node selected":"node"}><strong>{n}</strong><small>{s==="Array"?"["+i+"]":s==="Linked List"?"node":i===v.length-1?"TOP":i===0&&s==="Queue"?"FRONT":""}</small></div>{s==="Linked List"&&i<v.length-1&&<i>→</i>}</div>)}</div><div className="controls"><button onClick={()=>active>0&&setActive(active-1)} disabled={active<=0}>← Previous</button><button onClick={()=>active<v.length-1&&setActive(active+1)} disabled={active<0||active>=v.length-1}>Next →</button></div></div>
    <div className="operation"><div><b>Operation</b><small>Choose an operation and run the visualization.</small></div><select value={op} onChange={e=>setOp(e.target.value)}><option value="insert">Insert</option><option value="delete">Delete</option><option value="search">Search</option></select><button className="run" onClick={run}>▶ Visualize</button></div>
   </div>
   <aside className="right"><div className="info"><label>COMPLEXITY</label><h3>{s}</h3><p>Access <code>O(1)</code></p><p>Search <code>O(n)</code></p><p>Insert/Delete <code>O(n)</code></p></div><div className="info"><label>HOW TO USE</label><ol><li>Select a data structure.</li><li>Choose an operation.</li><li>Click Visualize.</li><li>Explore the state.</li></ol></div></aside>
  </section><footer>DSA Visualizer · Built to make algorithms easier to understand</footer>
 </main>
}