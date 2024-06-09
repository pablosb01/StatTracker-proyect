import ranks from '/src/objects/ranks.js'



const StatsCard = ({player}) => {

const rankVariableImage = `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.rank}.png`


  return (
      <div className="mx-auto p-4 max-w-sm bg-gray-900 text-white rounded-xl shadow-md overflow-hidden h-fit w-1/5">
        <div className="flex justify-between bg-gray-900 p-4 rounded gap-4">
          <button className="flex justify-center">
            <select 
              className="px-4 py-2 bg-gray-900 border border-gray-300 rounded hover:bg-gray-600 focus:outline-none"
            >
              <option>Overall</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </button>
          <button className="relative">
            <select 
              className="px-4 py-2 bg-gray-900 border border-gray-300 rounded hover:bg-gray-600 focus:outline-none mr-10"
            >
              <option>EP 8 - ACT 3</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </button>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <img 
            src={rankVariableImage}
            alt={player.rankName}
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-xl font-bold text-yellow-500">{player.rankName}</h2>
            {/* <p className="text-sm text-gray-400">{player.ladderPoints} RR</p> */}
            <p className="text-sm text-gray-400">{player.wins}V {player.defeats}D
              <span className="text-green-500 pl-1">{player.wr}%</span>
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-400">Asesinatos/Muerte</p>
            <p className="text-white">{player.kda} %</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Daño/Ronda</p>
            <p className="text-white">150</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Porcentaje Disparos a Cabeza</p>
            <p className="text-white">{player.headshotPercent} %</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Puntuación De Combate</p>
            <p className="text-white">{player.combatscore}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Puntuación Econ</p>
            <p className="text-white">{player.economy}</p>
          </div>
        </div>
      </div>
  );
};

export default StatsCard;
