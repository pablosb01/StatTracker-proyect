import React from "react";

export default function BoxHUC({ children, stl, title, color }) {
  return (
    <div className={`rounded-2xl z-50 ${stl}`}>
      <div
        className={`flex items-center h-5 sm:h-8 md:h-10 lg:h-12 rounded-2xl drop-shadow-md group opacity-90`}
        style={{
          background:`linear-gradient(to right, #000000 0%, ${color} 250%)`

        }}
      >
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 pl-2 text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-sans">
          {title}
        </h2>
      </div>
      <div className="text-[0.6rem] sm:text-sm md:text-base h-full">
        {children}
      </div>
    </div>
  );
}
