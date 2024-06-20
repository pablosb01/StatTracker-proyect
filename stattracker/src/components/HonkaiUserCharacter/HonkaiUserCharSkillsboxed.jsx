import React from "react";
import hsrlink from "../../objects/hsrlink.js";

export default function HonkaiUserCharSkillsboxed({ obj }) {
  const { link } = hsrlink;

  const styles = [
    { bg: 'bg-[#524e4d]/50' },
    { bg: 'bg-[#3d3938]/50' },
  ];

  return (
    <div className="grid grid-cols-6 gap-0.5 p-0.5 text-center transition-all ease-in-out duration-500">
      {obj.slice(0, 4).map((item, index) => {
  const style = styles[index % 2];
  return (
    <>
      <div className={`flex justify-center items-center text-white font-bold ${style.bg} rounded-[2rem] col-span-4`}>
        <p>{item.type_text}</p>
      </div>
      <div className={`col-span-1 flex justify-center items-center ${style.bg} rounded-[2rem]`}>
        <img
          src={`${link}${item.icon}`}
          alt=""
          className="max-h-6 lg:max-h-[3.15rem] hover:scale-125 transition-all ease-in-out duration-300 col-span-1"
        />
      </div>
      <div className={`flex justify-center items-center col-span-1 text-white ${style.bg} rounded-[2rem]`}>
        <p>{item.level}</p>
      </div>
    </>
  );
})}
    </div>
  );
}
