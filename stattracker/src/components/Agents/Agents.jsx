import Clove from '/assets/clove.png'
import Reyna from '/assets/reyna.png'
import Phoenix from '/assets/phoenix.png'
import Gekko from '/assets/gekko.png'
import Sage from '/assets/sage.png'
import Cypher from '/assets/cypher.png'
import Killjoy from '/assets/killjoy.png'
import Jett from '/assets/jett.png'
import Deadlock from '/assets/deadlock.png'
import Sova from '/assets/sova.png'
import Raze from '/assets/raze.png'
import Chamber from '/assets/chamber.png'
import Fade from '/assets/fade.png'
import Skye from '/assets/viper.png'
import Viper from '/assets/clove.png'
import Breach from '/assets/breach.png'
import Brimstone from '/assets/brimstone.png'
import Neon from '/assets/neon.png'
import Yoru from '/assets/yoru.png'
import Iso from '/assets/iso.png'
import Astra from '/assets/astra.png'
import Omen from '/assets/omen.png'
import Kayo from '/assets/kayo.png'
import Harbor from '/assets/harbor.png'
import { Link } from 'react-router-dom'


const agentsData = [
  { name: 'Clove', role: 'Controller', winRate: '52.3%', pickRate: '9.7%', imgSrc: Clove},
  { name: 'Reyna', role: 'Duelist', winRate: '50.3%', pickRate: '10.8%', imgSrc: Reyna},
  { name: 'Phoenix', role: 'Duelist', winRate: '50.0%', pickRate: '3.2%', imgSrc: Phoenix},
  { name: 'Gekko', role: 'Initiator', winRate: '49.9%', pickRate: '5.9%', imgSrc: Gekko},
  { name: 'Sage', role: 'Sentinel', winRate: '49.9%', pickRate: '6.6%', imgSrc: Sage},
  { name: 'Cypher', role: 'Sentinel', winRate: '49.7%', pickRate: '7.8%', imgSrc: Cypher},
  { name: 'Killjoy', role: 'Sentinel', winRate: '49.7%', pickRate: '3.8%', imgSrc: Killjoy},
  { name: 'Jett', role: 'Duelist', winRate: '49.6%', pickRate: '9.3%', imgSrc: Jett},
  { name: 'Deadlock', role: 'Sentinel', winRate: '49.6%', pickRate: '1.2%', imgSrc: Deadlock},
  { name: 'Sova', role: 'Initiator', winRate: '49.6%', pickRate: '5.1%', imgSrc: Sova},
  { name: 'Raze', role: 'Duelist', winRate: '49.3%', pickRate: '6.7%', imgSrc: Raze},
  { name: 'Chamber', role: 'Sentinel', winRate: '49.1%', pickRate: '4.0%', imgSrc: Chamber},
  { name: 'Fade', role: 'Initiator', winRate: '49.0%', pickRate: '1.8%', imgSrc: Fade},
  { name: 'Skye', role: 'Initiator', winRate: '48.7%', pickRate: '3.2%', imgSrc: Skye},
  { name: 'Viper', role: 'Controller', winRate: '48.6%', pickRate: '2.8%', imgSrc: Viper},
  { name: 'Breach', role: 'Initiator', winRate: '48.3%', pickRate: '2.0%', imgSrc: Breach},
  { name: 'Brimstone', role: 'Controller', winRate: '47.6%', pickRate: '2.1%', imgSrc: Brimstone},
  { name: 'Neon', role: 'Duelist', winRate: '47.6%', pickRate: '1.6%', imgSrc: Neon},
  { name: 'Yoru', role: 'Duelist', winRate: '46.9%', pickRate: '2.1%', imgSrc: Yoru},
  { name: 'Iso', role: 'Duelist', winRate: '46.1%', pickRate: '1.0%', imgSrc: Iso},
  { name: 'Astra', role: 'Controller', winRate: '46.0%', pickRate: '0.4%', imgSrc: Astra},
  { name: 'Omen', role: 'Controller', winRate: '46.0%', pickRate: '5.4%', imgSrc: Omen},
  { name: 'Kayo', role: 'Initiator', winRate: '45.6%', pickRate: '2.6%', imgSrc: Kayo},
  { name: 'Harbor', role: 'Controller', winRate: '45.0%', pickRate: '0.7%', imgSrc: Harbor},
];

export function Agents() {

  

  return (
    <div className="caja w-full max-w-[600px] rounded-[7px] overflow-hidden bg-gray-300 ">
      <div className="flex items-center h-12 rounded-lg drop-shadow-md group bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black">
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 pl-3 text-3xl text-white font-sans">
          AGENTS
        </h2>
      </div>
      <div className="overflow-y-scroll max-h-72">
        {agentsData.map((agent, index) => (
          <Link to={`agents/${agent.name.toLowerCase()}`}className="group bg-gray-300 hover:bg-gray-400 flex px-3 py-2 justify-between border-b border-stone-800 transition-all duration-500 ease-in-out" key={index}>
            <div className="flex items-center">
              <img src={agent.imgSrc} alt={agent.name} className="w-14 h-14 group-hover:w-16 group-hover:h-16 rounded-lg sm:mr-8 mr-2 transition-all duration-300 ease-in-out" />
              <div className="flex flex-col justify-between">
                <span className="font-bold border-b-2 border-red-600 tracking-wide text-xl">{agent.name}</span>
                <span className="text-md text-gray-48  ">{agent.role}</span>
              </div>
            </div>
            <div className="flex flex-row  md:gap-8 gap-6 justify-between">
              <div className='flex flex-col justify-center'>
                <span className="font-bold text-base xl:text-lg">Win Rate:</span>
                <span className=" text-xl">{agent.winRate}</span>
              </div>
                <div className='flex flex-col justify-center w-fit'>
                  <span className="font-bold text-base xl:text-lg">Pick Rate:</span>
                  <span className="text-xl">{agent.pickRate}</span>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}