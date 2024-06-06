import gameData from "../../objects/matchinfo.js";

let puuid = "Hng3HRgjI7CMrBDFH4jd6TS08gALhYD_muPm9JKN2bcwT_s-wOBumpfcrWeSXv7OVydqBXSRunlUsA"

function getPlayerStatsByPuuid(puuid) {
    const player = gameData.players.find(p => p.puuid === puuid);
  
    if (!player) {
      throw Error = "User ID not found"
    }
  
    return {
      kills: player.stats.kills,
      deaths: player.stats.deaths,
      assists: player.stats.assists,
    };
}

let stats = getPlayerStatsByPuuid(puuid)
console.log(stats)

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

let dmg = calculateTotalDamage(puuid)
console.log(dmg)

function getNumberOfRounds (puuid) {
  let numbersround = 0;
  gameData.players.forEach(player => {
    if(player.puuid == puuid) {
      numbersround += player.roundsPlayed
    }
  })
}

let numberRounds2 = getNumberOfRounds(puuid)
const mpr = stats.kills / numberRounds2;

console.log(mpr)
  


 