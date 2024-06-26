import React from "react";

export default function HonkaiUserCharStats({ obj }) {
  
  function sumStats(obj) {
    const statsObj = {};
  
    // Iterate through attributes, additions, and properties
    const arrays = [obj.attributes, obj.additions, obj.properties];
    arrays.forEach((array) => {
      array.forEach((item) => {
        const field = item.field;
        if (!statsObj[field]) {
          statsObj[field] = {
            name: item.name,
            icon: item.icon,
            value: 0,
          };
        }
        statsObj[field].value += item.value;
      });
    });
  
    // Add missing fields with value 0
    const missingFields = ['sp_rate', 'effect_hit', 'effect_res'];
    missingFields.forEach((field) => {
      if (!statsObj[field]) {
        statsObj[field] = {
          name: field,
          icon: '',
          value: 0,
        };
      }
    });
  
    // Calculate the display value as a single number
    Object.keys(statsObj).forEach((key) => {
      statsObj[key].display = (statsObj[key].value * 100).toFixed(2);
    });
  
    return statsObj;
  }

  let statsObj = sumStats(obj)
  console.log(statsObj)
  
  return (
    <div className="grid grid-cols-3 w-full h-[90%] sm:h-[91%] md:h-[88%] lg:h-[85%] gap-0.5 p-0.5 z-10 text-center transition-all ease-in-out duration-500">
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.hp.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.hp.value.toFixed(2)}</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.atk.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.atk.value.toFixed(2)}</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.def.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.def.value.toFixed(2)}</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.spd.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.spd.value.toFixed(2)}</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.break_dmg.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.break_dmg.display}%</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.crit_rate.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.crit_rate.display}%</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.crit_dmg.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.crit_dmg.display}%</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.sp_rate.name || 0}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.sp_rate.display}%</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.effect_hit.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#3d3938]/50 rounded-2xl z-10">
        <p>{statsObj.effect_hit.display}%</p>
      </div>
      <div className="col-span-2 flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.effect_res.name}</p>
      </div>
      <div className="flex justify-center items-center text-white bg-[#524e4d]/50 rounded-2xl z-10">
        <p>{statsObj.effect_res.display}%</p>
      </div>
    </div>
  );
}
