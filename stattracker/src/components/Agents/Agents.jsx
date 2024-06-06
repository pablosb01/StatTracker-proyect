import React from 'react';
import './Agents.css';

const agentsData = [
  { name: 'Clove', role: 'Controller', winRate: '52.3%', pickRate: '9.7%', imgSrc: './public/assets/clove.png'},
  { name: 'Reyna', role: 'Duelist', winRate: '50.3%', pickRate: '10.8%', imgSrc: './public/assets/reyna.png'},
  { name: 'Phoenix', role: 'Duelist', winRate: '50.0%', pickRate: '3.2%', imgSrc: './public/assets/phoenix.png'},
  { name: 'Gekko', role: 'Initiator', winRate: '49.9%', pickRate: '5.9%', imgSrc: './public/assets/gekko.png'},
  { name: 'Sage', role: 'Sentinel', winRate: '49.9%', pickRate: '6.6%', imgSrc: './public/assets/sage.png'},
  { name: 'Cypher', role: 'Sentinel', winRate: '49.7%', pickRate: '7.8%', imgSrc: './public/assets/cypher.png'},
  { name: 'Killjoy', role: 'Sentinel', winRate: '49.7%', pickRate: '3.8%', imgSrc: './public/assets/killjoy.png'},
  { name: 'Jett', role: 'Duelist', winRate: '49.6%', pickRate: '9.3%', imgSrc: './public/assets/jett.png'},
  { name: 'Deadlock', role: 'Sentinel', winRate: '49.6%', pickRate: '1.2%', imgSrc: './public/assets/deadlock.png'},
  { name: 'Sova', role: 'Initiator', winRate: '49.6%', pickRate: '5.1%', imgSrc: './public/assets/sova.png'},
  { name: 'Raze', role: 'Duelist', winRate: '49.3%', pickRate: '6.7%', imgSrc: './public/assets/raze.png'},
  { name: 'Chamber', role: 'Sentinel', winRate: '49.1%', pickRate: '4.0%', imgSrc: './public/assets/chamber.png'},
  { name: 'Fade', role: 'Initiator', winRate: '49.0%', pickRate: '1.8%', imgSrc: './public/assets/fade.png'},
  { name: 'Skye', role: 'Initiator', winRate: '48.7%', pickRate: '3.2%', imgSrc: './public/assets/skye.png'},
  { name: 'Viper', role: 'Controller', winRate: '48.6%', pickRate: '2.8%', imgSrc: './public/assets/viper.png'},
  { name: 'Breach', role: 'Initiator', winRate: '48.3%', pickRate: '2.0%', imgSrc: './public/assets/breach.png'},
  { name: 'Brimstone', role: 'Controller', winRate: '47.6%', pickRate: '2.1%', imgSrc: './public/assets/brimstone.png'},
  { name: 'Neon', role: 'Duelist', winRate: '47.6%', pickRate: '1.6%', imgSrc: './public/assets/neon.png'},
  { name: 'Yoru', role: 'Duelist', winRate: '46.9%', pickRate: '2.1%', imgSrc: './public/assets/yoru.png'},
  { name: 'Iso', role: 'Duelist', winRate: '46.1%', pickRate: '1.0%', imgSrc: './public/assets/iso.png'},
  { name: 'Astra', role: 'Controller', winRate: '46.0%', pickRate: '0.4%', imgSrc: './public/assets/astra.png'},
  { name: 'Omen', role: 'Controller', winRate: '46.0%', pickRate: '5.4%', imgSrc: './public/assets/omen.png'},
  { name: 'Kayo', role: 'Initiator', winRate: '45.6%', pickRate: '2.6%', imgSrc: './public/assets/kayo.png'},
  { name: 'Harbor', role: 'Controller', winRate: '45.0%', pickRate: '0.7%', imgSrc: './public/assets/harbor.png'},
];

export function Agents() {
  return (
    <div className="caja w-full h-[380px] md:w-full rounded-[7px] overflow-hidden bg-gray-300 mx-62">
      <div className="h-1/6 bg-stone-900 border border-gray-300 text-white px-4 flex items-center text-4xl leading-none rounded-[7px] box-shadow-0_4_4_rgba(0,0,0,0.25)">
        <span>AGENTS</span>
      </div>
      <div className="h-5/6 overflow-y-auto">
        {agentsData.map((agent, index) => (
          <div className="flex h-1/4 md:p-3 p-1 justify-between border-b border-stone-800" key={index}>
            <div className="flex items-center">
              <img src={agent.imgSrc} alt={agent.name} className="xl:w-14 xl:h-14 w-12 h-12  rounded-full md:mr-8 mr-2" />
              <div className="flex flex-col justify-between">
                <span className="font-bold text-md xl:text-xl">{agent.name}</span>
                <span className="text-md text-gray-48">{agent.role}</span>
              </div>
            </div>
            <div className="flex flex-row  md:gap-8 gap-2 justify-between">
              <div className='flex flex-col items-center justify-center'>
                <span className="font-bold text-md md:text-xl">Win Rate:</span>
                <span className=" text-xl md:text-2xl">{agent.winRate}</span>
              </div>
                <div className='flex flex-col items-center justify-center w-fit'>
                  <span className="font-bold md:text-xl text-md">Pick Rate:</span>
                  <span className="md:text-2xl text-xl">{agent.pickRate}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}