import gameData from "../../objects/matchinfo";
import { useEffect, useState } from "react"
import Neon from '/assets/neon.png'
import radiant from '/assets/radiant.png'


export function MatchStats({playerid}) {
  const [agent, setAgent] = useState(null);
  const [agentInfo, setAgentInfo] = useState(null);
  const [agentPicture, setAgentPicture] = useState(null);
  const [gameResult, setGameResult] = useState(null)
  const [resultColor, setResultColor] = useState(null)
  const [borderColor, setBorderColor] = useState(null)
  const [roundsWon, setRoundsWon] = useState(null)
  const [roundsLost, setRoundsLost] = useState(null)

  const puuid = playerid;

  function getPlayerAgent(puuid) {
    const player = gameData.players.find(player => player.puuid === puuid);
    if (player) {
      setAgent(player.characterId);
    } else {
      console.error(`Player not found with puuid ${puuid}`);
    }
  }

  useEffect(() => {
    if (puuid) {
      getPlayerAgent(puuid);
    }
  }, [puuid]);

  useEffect(() => {
    if (agent) {
      fetch(`https://valorant-api.com/v1/agents/${agent}`)
      .then(response => response.json())
      .then(data => {
          setAgentInfo(data);
          setAgentPicture(data.data.displayIcon);
        })
      .catch(err => console.error(err));
    }
  }, [agent]);

  function getResult(puuid){
    if(!puuid) {
      return null;
    }
    const player = gameData.players.find(currentPlayer => currentPlayer.puuid === puuid);
    if(!player) {
      return null;
    }
    if (player.teamId === "BLUE") {
      const blueTeam = gameData.teams.find(team => team.teamId === 'Blue');
      if (blueTeam) {
        return blueTeam.won? "Win" : "Defeat";
      } else {
        return "Unknown";
      }
    } else if (player.teamId === "RED") {
      const redTeam = gameData.teams.find(team => team.teamId === 'Red');
      if (redTeam) {
        return redTeam.won? "Win" : "Defeat";
      } else {
        return "Unknown";
      }
    } else {
      return "Unknown team";
    }
  }

  useEffect(()=>{
    const result = getResult(puuid);
    if (result) {
      setGameResult(result);
    }else{
      console.log('no result found')
    }
  },[puuid])

  function getResultColor (gameResult) {
    if (gameResult === "Win") {
      return 'text-green-700 font-bold text-2xl pb-2 w-1/5'
    } else if (gameResult === 'Defeat') {
      return 'text-red-700 font-bold text-2xl pb-2 w-1/5'
    } else {
      return null;
    }
  }

  useEffect(() => {
    const resColor = getResultColor(gameResult)
    setResultColor(resColor)
  },[gameResult])

  function getResultColorBorder (gameResult) {
    if (gameResult === "Win") {
      return 'flex flex-col m-3 border-l-4 border-green-700 w-full'
    } else if (gameResult === 'Defeat') {
      return 'flex flex-col m-3 border-l-4 border-red-700 w-full'
    } else {
      return null;
    }
  }

  useEffect(() => {
    const borColor = getResultColorBorder(gameResult)
    setBorderColor(borColor)
  },[gameResult])


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

    console.log(gameData)

    function getWonRounds(gameData, puuid) {
      let playerTeam = '';
      let wonRounds = 0;
      let lostRounds = 0;
      gameData.players.forEach(player => {
        if (player.puuid === puuid) {
          playerTeam = player.teamId;
        }
      })

      gameData.teams.forEach(team => {
        if(team.teamId.toUpperCase() === playerTeam){
          wonRounds = team.roundsWon
          lostRounds = team.roundsPlayed - team.roundsWon
        }
        
      })

      return {wonRounds, lostRounds}
    }

    useEffect(()=>{
      let rounds = getWonRounds(gameData, puuid)
      let roundsResult = `${rounds.wonRounds} - ${rounds.lostRounds}`
      setRoundsWon(rounds.wonRounds)
      setRoundsLost(rounds.lostRounds)
    },[puuid])

    
    
    
    
    
    const hsp = calculateHeadshotperc().toFixed(1)
    const totalDamage = calculateTotalDamage(puuid)
    const numberOfRounds = gameData.roundResults.length;
    const mpr = (playerStats.kills / numberOfRounds).toFixed(2);
    const kda = ((playerStats.kills + playerStats.assists)/playerStats.deaths).toFixed(2);
    const dpr = (totalDamage/numberOfRounds).toFixed(2);
    const averageScore = (playerStats.score/ numberOfRounds).toFixed(0);
  
    return (
      <>
        <div className="lg:flex items-center flex  h-auto md:p-3 hidden border-b border-stone-800">
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
          <img src={agentPicture} alt="Neon Agent Logo" className="w-18 h-16 rounded-xl" />
          <div className="flex flex-col w-full pl-5">
              <div className="grid grid-rows-2 xl:flex xl:flex-row">
                <span className={resultColor}>{gameResult}</span>
                <span className="text-red-500 font-bold text-lg pt-1 w-1/5">+150 RR</span>
                <span className="w-1/5"></span>
                <span className="w-1/5"></span>
                <span className="flex text-gray-400 font-bold text-lg w-1/5 justify-end">10th · Competitive</span>
              </div>
            <div className="flex flex-row">
              <span className="flex text-black text-3xl w-1/5">
                <span className='text-green-800'>{roundsWon}</span>
                -
                <span className='text-red-800'>{roundsLost}</span>
              </span>
              <span className="text-custom-orange font-bold text-xl w-1/5">{kda} KDA</span>
              <span className="text-black font-bold text-xl w-1/5">{mpr} MPR</span>
              <span className="text-black font-bold text-xl w-1/5">{hsp}% Cabeza</span>
              <span className="w-1/5"></span>
            </div>
            <div className="flex flex-row">
              <span className="text-black-400 text-xl w-1/5">Ascent</span>
              <span className="text-black-400 text-xl w-1/5">{playerStats.kills}/{playerStats.deaths}/{playerStats.assists}</span>
              <span className="text-black-400 text-xl w-1/5">{dpr} DPR</span>
              <span className="text-black-400 text-xl w-1/5">{averageScore} Puntuación media</span>
              <span className="flex text-black-400 text-xl w-1/5 justify-end">anteayer</span>
            </div>
          </div>
        </div>

        <div className="xl:hidden h-auto flex w-full border-b border-stone-800">
          <div className={borderColor}>
            <div className="flex flex-row w-full justify-between px-2">
              <div className="flex pb-2">
                <img src={agentPicture} alt="Neon Agent Logo" className="w-18 h-16 rounded-2xl" />
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
