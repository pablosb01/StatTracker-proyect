import gameData from "../../objects/matchinfo";
import { useEffect, useState } from "react"
import Neon from '/assets/neon.png'
import radiant from '/assets/radiant.png'


export function MatchStats({playerid}) {
  const [agent, setAgent] = useState()

  function getPlayerAgent () {
    
  }

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
      <>
        <div className="hidden xl:flex xl:items-center xl:h-auto md:p-3 xl:border-b xl:border-stone-800">
          <img src={Neon} alt="Neon Agent Logo" className="w-14 h-13 rounded-xl" />
          <div className="flex flex-col w-full pl-5">
              <div className="grid grid-rows-2 xl:flex xl:flex-row">
                <span className="text-red-500 font-bold text-2xl pb-2 w-1/5">Derrota</span>
                <span className="text-red-500 font-bold text-lg pt-1 w-1/5">+150 RR</span>
                <span className="w-1/5"></span>
                <span className="w-1/5"></span>
                <span className="flex text-gray-400 font-bold text-lg w-1/5 justify-end">10th · Competitive</span>
              </div>
            <div className="flex flex-row">
              <span className="flex text-white text-xl w-1/5">8-13</span>
              <span className="text-custom-orange font-bold text-xl w-1/5">{kda} KDA</span>
              <span className="text-white font-bold text-xl w-1/5">{mpr} MPR</span>
              <span className="text-white font-bold text-xl w-1/5">{hsp}% Cabeza</span>
              <span className="w-1/5"></span>
            </div>
            <div className="flex flex-row">
              <span className="text-gray-400 text-xl w-1/5">Ascent</span>
              <span className="text-gray-400 text-xl w-1/5">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</span>
              <span className="text-gray-400 text-xl w-1/5">{dpr} DPR</span>
              <span className="text-gray-400 text-xl w-1/5">{averageScore} Puntuación media</span>
              <span className="flex text-gray-400 text-xl w-1/5 justify-end">anteayer</span>
            </div>
          </div>
          </div>

        <div className="xl:hidden h-auto flex w-full border-b border-stone-800">
          <div className="flex flex-col m-3 border-l-4 border-red-700 w-full">
            <div className="flex flex-row w-full justify-between px-2">
              <div className="flex pb-2">
                <img src={Neon} alt="Neon Agent Logo" className="w-auto h-fit rounded-2xl" />
                <div className="flex flex-col pl-3">
                  <span className="flex text-gray-400 font-bold text-xs">Competitive · 13h ago</span>
                  <span className="text-white font-bold text-sm">Ascent</span>
                </div>
              </div>
              <img src={radiant} className="w-auto h-3/5"></img>
              <div className="flex flex-col">
                <div>
                  <span className="text-green-600 text-base">8 </span><span className="text-white text-base">: </span><span className="text-red-600 text-base">13</span>
                </div>
              <span className="text-white font-bold text-sm bg-red-400 rounded-xl p-1">10th</span>
              </div>
            </div>
            <div className="flex flex-row justify-between px-3">
              <div className="flex flex-col justify-between">
                <span className="flex flex-start text-custom-orange font-bold text-sm">K / D / A</span>
                <span className="text-gray-400 text-sm">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</span>
              </div>
              <div className="flex flex-col justify-between">
                <span className="flex flex-center text-custom-orange font-bold text-sm">K/D</span>
                <span className="text-gray-400 font-bold text-sm">{kda}</span>
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-white font-bold text-base">HS%</span>
                <span className="text-gray-400 font-bold text-sm">{hsp}</span>
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-white font-bold text-base">ACS</span>
                <span className="text-gray-400 text-sm font-bold">{averageScore}</span>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
