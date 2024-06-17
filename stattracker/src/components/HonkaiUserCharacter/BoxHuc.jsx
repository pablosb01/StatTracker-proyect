import React from "react";

export default function BoxHUC ({children, stl, title}) {
    return (
      <div className={`bg-gray-400/60 rounded-lg ${stl}`}>
        <div className="flex items-center h-8 md:h-10 lg:h-12 rounded-lg drop-shadow-md group bg-gradient-to-r from-black to-[#42A3AD] border border-gray-300 hover:from-[#42A3AD] hover:to-black">
          <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 pl-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-sans">
            {title}
          </h2>
        </div>
        {children}
      </div>
    );
  }