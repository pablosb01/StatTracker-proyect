import React from "react";

export default function BoxHUC ({children, stl, title}) {
    return (
      <div className={`rounded-2xl z-50 ${stl}`}>
        <div className="flex items-center h-5 md:h-10 lg:h-12 rounded-2xl drop-shadow-md group bg-gradient-to-r from-black to-[#42A3AD] border border-gray-300 hover:from-[#42A3AD] hover:to-black">
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