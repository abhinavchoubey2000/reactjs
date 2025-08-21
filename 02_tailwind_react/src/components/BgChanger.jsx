import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("white")
  return (
    <div className={`w-full h-screen p-10 bg-${color}-600`} >
    <button
      className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-hidden"
      onClick={()=>setColor("red")}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full"></span>

      <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
        RED
      </span>
    </button>

    <button
      className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-hidden"
      onClick={()=>setColor("indigo")}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full"></span>

      <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
        INDIGO
      </span>
    </button>

    <button
      className="group relative inline-block overflow-hidden border border-green-600 px-8 py-3 focus:outline-hidden"
      onClick={()=>setColor("green")}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full"></span>

      <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
        GREEN
      </span>
    </button>

    <button
      className="group relative inline-block overflow-hidden border border-orange-600 px-8 py-3 focus:outline-hidden"
      onClick={()=>setColor("orange")}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-orange-600 transition-all group-hover:h-full"></span>

      <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
        ORANGE
      </span>
    </button>

    <button
      className="group relative inline-block overflow-hidden border border-yellow-600 px-8 py-3 focus:outline-hidden"
      onClick={()=>setColor("yellow")}
    >
      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-yellow-600 transition-all group-hover:h-full"></span>

      <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
        YELLOW
      </span>
    </button>
    </div>
  );
}
