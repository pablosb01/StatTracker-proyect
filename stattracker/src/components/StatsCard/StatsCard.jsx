import { Overview } from "../overview/Overview";

const StatsCard = ({player}) => {

const rankVariableImage = `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.rank}.png`


  return (
      <div className=" mb-10  bg-gray-300 text-white rounded-lg shadow-md overflow-hidden h-fit xl:w-1/5 xl:ml-24">
        {/* <div className="flex justify-center xl:justify-center bg-gray-300 ml-10 rounded gap-4 pb-5">
          <button className="flex justify-center">
            <select className="flex justify-content-center px-4 py-2 bg-gradient-to-r from-black to-red-900 border border-gray-300 rounded hover:bg-gray-600 focus:outline-none">
              <option>Overall</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </button>
          <button className="">
            <select 
              className="px-4 py-2 bg-gradient-to-r from-black to-red-900 border border-gray-300 rounded hover:bg-gray-600 focus:outline-none mr-10"
            >
              <option>EP 8 - ACT 3</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </button>
        </div> */}
        
        <div className="items-center rounded-lg bg-gray-400">
          <div className="flex items-center group h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black ">
            <span className="text-left  items-center p-1.5 pl-3  text-3xl text-white font-sans tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out">OVERALL</span>
          </div>
          <div className="flex group gap-3 justify-center p-3 pb-2">
            <img 
              src={rankVariableImage}
              alt={player.rankName}
              className="w-16 h-16 group-hover:h-20 group-hover:w-20 transition-all duration-300 ease-in-out"
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-yellow-500">{player.rankName}</h2>
              {/* <p className="text-sm text-gray-400">{player.ladderPoints} RR</p> */}
              <p className="text-md text-black font-bold">{player.wins}V {player.defeats}D
                <span className="text-green-400 text-md font-bold pl-1">{player.wr}%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 py-4 space-y-2">
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Kill/Deaths</p>
            <p className="text-black">{player.kda} %</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Dmg/Round</p>
            <p className="text-black">150</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Headshot Percentage</p>
            <p className="text-black">{player.headshotPercent} %</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Combat Score</p>
            <p className="text-black">{player.combatscore}</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Economics Score</p>
            <p className="text-black">{player.economy}</p>
          </div>
        </div>
        
        <Overview />
      </div>
  );
};

export default StatsCard;
