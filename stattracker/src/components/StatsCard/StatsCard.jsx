import ranks from '/src/objects/ranks.js'



const StatsCard = ({player}) => {

const rankVariableImage = `https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/${player.rank}.png`

function calculateWinRate ({player}) {

  const totalGames = player.wins + player.defeats

  if(totalGames == 0) {
    return 0;
  }
  return (player.wins / totalGames) * 100;
}

const wr = calculateWinRate({player}).toFixed(0)

const rankID = player.rank

const rankName = ranks[rankID]

function calculateKDA({player}) {

  const kills = player.kills
  const deaths = player.deaths
  const assists = player.assist

  if(kills + assists == 0) {
    return 0;
  }

  return ((kills + assists) / deaths);

}

const kda = calculateKDA({player}).toFixed(2)

function headshotPercentage({player}) {
  const headshots = player.headshots
  const kills = player.kills
  if(headshots == 0) {
    return 0;
  }
  return (headshots / kills) * 100
}

const hs = headshotPercentage({player}).toFixed(2)



  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between bg-gray-900 p-4 rounded gap-4">
          <button className="relative">
            <select 
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            >
              <option>Overall</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </button>
          <button className="relative">
            <select 
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
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
            alt="Gold 1"
            className="w-12 h-12"
          />
          <div>
            <h2 className="text-xl font-bold text-yellow-500">{rankName}</h2>
            <p className="text-sm text-gray-400">{player.ladderPoints} RR</p>
            <p className="text-sm text-gray-400">{player.wins}V {player.defeats}D
              <span className="text-green-500 pl-1">{wr}%</span>
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-400">Asesinatos/Muerte</p>
            <p className="text-white">{kda}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Daño/Ronda</p>
            <p className="text-white">116.3</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Porcentaje Disparos a Cabeza</p>
            <p className="text-white">{hs} %</p>
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
    </div>
  );
};

export default StatsCard;
