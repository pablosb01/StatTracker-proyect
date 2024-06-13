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
        
        <div className="items-center rounded-lg bg-gray-400">
          <div className="flex items-center h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-black to-red-900 border border-gray-300 hover:from-red-900 hover:to-black">
            <span className="text-left tracking-widest items-center p-1.5 pl-3  text-3xl text-white font-sans">OVERALL</span>
          </div>
          <div className="flex gap-3 justify-center p-3 pb-2">
            <img 
              src={rankVariableImage}
              alt={player.rankName}
              className="w-16 h-16 hover:h-20 hover:w-20 transition-all duration-300 ease-in-out"
            />
            <div>
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
