import ranks from '/src/objects/ranks.js'



const StatsCard = ({player}) => {

const rankVariableImage = `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.rank}.png`


  return (
      <div className=" mb-10  bg-gray-300 text-white rounded-xl shadow-md overflow-hidden h-fit xl:w-1/5 xl:ml-20 ">
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
        <div className="h-1/6 bg-gradient-to-r from-black to-red-900 border border-gray-300 text-white p-3  flex items-center text-4xl leading-none rounded-[7px] box-shadow-0_4_4_rgba(0,0,0,0.25)">
            <span>Overall</span>
        </div>
        <div className="flex items-center px-4 space-x-4 mt-4">
          <img 
            src={rankVariableImage}
            alt={player.rankName}
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-xl font-bold text-yellow-500">{player.rankName}</h2>
            {/* <p className="text-sm text-gray-400">{player.ladderPoints} RR</p> */}
            <p className="text-sm text-black font-bold">{player.wins}V {player.defeats}D
              <span className="text-green-500 font-bold pl-1">{player.wr}%</span>
            </p>
          </div>
        </div>
        <div className="mt-4 my p-4 py-5 space-y-2">
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Asesinatos/Muerte</p>
            <p className="text-black">{player.kda} %</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Daño/Ronda</p>
            <p className="text-black">150</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Porcentaje Disparos a Cabeza</p>
            <p className="text-black">{player.headshotPercent} %</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Puntuación De Combate</p>
            <p className="text-black">{player.combatscore}</p>
          </div>
          <div className="flex xl: justify-between">
            <p className="text-black font-bold">Puntuación Econ</p>
            <p className="text-black">{player.economy}</p>
          </div>
        </div>
      </div>
  );
};

export default StatsCard;
