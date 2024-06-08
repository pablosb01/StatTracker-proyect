import gameData from "../../objects/matchinfo";
import { useEffect } from "react"
import Neon from '/assets/neon.png'


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

    function getPlayerHeadshots (puuid) {
      let headshots = 0;

      gameData.roundResults.forEach(round => {
        round.playerStats.forEach(player => {
          if(player.puuid === puuid) {
            player.damage.forEach(dmg => {
              headshots += dmg.headshots
            })
          }
        })
        })
      return headshots;
    }

    useEffect(()=>{
      getPlayerHeadshots(puuid)
    },[puuid])
 
    function calculateHeadshotperc() {
      let headshotPercentage = (getPlayerHeadshots(puuid) / playerStats.kills * 100);
      return headshotPercentage
    }

    
    
    
    
    
    const hsp = calculateHeadshotperc().toFixed(1)
    const totalDamage = calculateTotalDamage(puuid)
    const numberOfRounds = gameData.roundResults.length;
    const mpr = (playerStats.kills / numberOfRounds).toFixed(2);
    const kda = ((playerStats.kills + playerStats.assists)/playerStats.deaths).toFixed(2);
    const dpr = (totalDamage/numberOfRounds).toFixed(2);
    const averageScore = (playerStats.score/ numberOfRounds).toFixed(0);
  
    return (
        <div className="flex items-center h-auto md:p-3 border-b border-stone-800">
          {/* <div className="flex items-center">
            <img src={Neon} alt="Neon Agent Logo" className="w-14 h-13 rounded-lg" />
            <div className=" ml-4 pt-3">
                <p className="text-red-500 font-bold text-sm pb-3">Derrota</p>
                <p className="text-white text-sm mt-1">8-13</p>
                <p className="text-gray-400 text-xs">Ascent</p>
            </div>
          </div>
          <div className="ml-4 pt-3">
              <p className="text-red-500 font-bold text-xs pb-3">+150 RR</p>
              <p className="text-custom-orange font-bold text-sm">{kda} KDA</p>
              <p className="text-gray-400 text-xs">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-bold text-sm pt-10">{mpr} MPR</p>
            <p className="text-gray-400 text-xs">{dpr} DPR</p>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-bold text-sm pt-10">{hsp}% Cabeza</p>
            <p className="text-gray-400 text-xs">{averageScore} Puntuación media</p>
          </div>
          <div className="flex flex-col pb-3">
              <p className="text-gray-400 font-bold text-xs pb-3 pt-3.5">10th · Competitive</p>
              <p className="text-stone-900 font-bold text-sm">.</p>
              <p className="text-gray-400 text-xs">anteayer</p>
          </div> */}
          <img src={Neon} alt="Neon Agent Logo" className="w-14 h-13 rounded-lg" />
          <div className="flex flex-col w-full pl-5">
              <div className="flex flex-row">
                <span className="text-red-500 font-bold text-sm pb-3 w-1/5">Derrota</span>
                <span className="text-red-500 font-bold text-xs w-1/5">+150 RR</span>
                <span className="w-1/5"></span>
                <span className="w-1/5"></span>
                <span className="flex text-gray-400 font-bold text-xs w-1/5">10th · Competitive</span>
              </div>
            <div className="flex flex-row">
              <span className="flex text-white text-sm w-1/5">8-13</span>
              <span className="text-custom-orange font-bold text-sm w-1/5">{kda} KDA</span>
              <span className="text-white font-bold text-sm w-1/5">{mpr} MPR</span>
              <span className="text-white font-bold text-sm w-1/5">{hsp}% Cabeza</span>
              <span className="w-1/5"></span>
            </div>
            <div className="flex flex-row">
              <span className="text-gray-400 text-xs w-1/5">Ascent</span>
              <span className="text-gray-400 text-xs w-1/5">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</span>
              <span className="text-gray-400 text-xs w-1/5">{dpr} DPR</span>
              <span className="text-gray-400 text-xs w-1/5">{averageScore} Puntuación media</span>
              <span className="text-gray-400 text-xs w-1/5">anteayer</span>
            </div>
          </div>
        </div>
    )
}
