import React from "react";

export default function Box ({children, title}) {
    return (
      <div className='drop-shadow-md bg-gray-300 rounded-lg'>
        <div className="flex items-center h-12 rounded-lg drop-shadow-md group bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black">
          <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-sans">
            {title}
          </h2>
        </div>
        {children}
      </div>
    );
  }