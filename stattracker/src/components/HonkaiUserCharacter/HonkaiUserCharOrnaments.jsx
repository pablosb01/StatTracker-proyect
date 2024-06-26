import React from 'react'
import hsrlink from "../../objects/hsrlink.js";

export default function HonkaiUserCharOrnaments({obj}) {
  const { link } = hsrlink;

  return (
    <div className="grid justify-around grid-cols-1 lg:h-[80%] transition-all ease-in-out duration-500">
      {obj.slice(4, 6).map((relic, index) => (
      
        <div className="flex items-center">
          <img
            src={`${link}${relic.icon}`}
            alt=""
            className=" relative left-1 md:left-2 lg:left-0 max-w-9 sm:max-w-16 md:max-w-20 scale-[140%] hover:scale-[165%] transition-all ease-in-out duration-500"
          />
          <div className="grid grid-cols-3 gap-0.5 p-0.5 w-full text-center transition-all ease-in-out duration-500">
            <div className="flex justify-center items-center w-full text-white font-bold col-span-2 bg-[#524e4d]/50 rounded-xl">
              <p className='m-0'>{relic.sub_affix[0].name}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white bg-[#524e4d]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[0].display}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white font-bold col-span-2 bg-[#3d3938]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[1].name}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white bg-[#3d3938]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[1].display}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white font-bold col-span-2 bg-[#524e4d]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[2].name}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white bg-[#524e4d]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[2].display}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white font-bold col-span-2 bg-[#3d3938]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[3].name}</p>
            </div>
            <div className="flex justify-center items-center w-full text-white bg-[#3d3938]/50 rounded-2xl">
              <p className='m-0'>{relic.sub_affix[3].display}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
