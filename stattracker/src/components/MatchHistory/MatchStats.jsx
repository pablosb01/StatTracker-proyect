import gameData from "../../objects/matchinfo";

export function MatchStats({playerid}) {

    const puuid = playerid;
    
    function getPlayerStatsByPuuid(puuid) {
        const player = gameData.players.find(p => p.puuid === puuid);
      
        if (!player) {
          throw Error = "User ID not found"
        }
      
        return {
          kills: player.stats.kills,
          deaths: player.stats.deaths,
          assists: player.stats.assists,
          score: player.stats.score,
        };
    }

    const playerStats = getPlayerStatsByPuuid(puuid);

    function calculateTotalDamage(puuid) {
        let totalDamage = 0;
      
        gameData.roundResults.forEach(round => {
          round.playerStats.forEach(playerStat => {
            if (playerStat.puuid === puuid) {
              playerStat.damage.forEach(damageEntry => {
                totalDamage += damageEntry.damage;
              });
            }
          });
        });
      
        return totalDamage;
    }
    
    const totalDamage = calculateTotalDamage(puuid)
    const numberOfRounds = gameData.roundResults.length;
    const mpr = (playerStats.kills / numberOfRounds).toFixed(2);
    const kda = ((playerStats.kills + playerStats.assists)/playerStats.deaths).toFixed(2);
    const dpr = (totalDamage/numberOfRounds).toFixed(2);
    const averageScore = (playerStats.score/ numberOfRounds).toFixed(0);
  
    return (
        <div className="w-3/4">
            <div className="flex justify-between">
                <p className="">+150 RR</p> {/* STILL HARDCODED */}
                <div className="flex gap-1">
                    <p>10th</p> {/* STILL HARDCODED */}
                    <p>Competitive</p> {/* STILL HARDCODED */}
                </div>
            </div>
            <div className="flex">
                <div className="w-1/5">
                    <p className="text-orange-400">{kda} KDA</p>
                    <p className="text-sm text-gray-300">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</p>
                </div>
                <div className="w-1/5">
                    <p>{mpr} MPR</p>
                    <p className="text-sm text-gray-300">{dpr} DPR</p>
                </div>
                <div className="w-2/5">
                    <p>21,7% Cabeza</p> {/* STILL HARDCODED */}
                    <p className="text-sm text-gray-300">{averageScore} Puntuación media</p>
                </div>
                <div className="w-1/5">
                    <div></div>
                    <p className="text-sm text-gray-300">anteayer</p> {/* STILL HARDCODED */}
                </div>
            </div>
        </div>
    )
}
