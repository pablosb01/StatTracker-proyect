import gameData from "../../objects/matchinfo";

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

const numberOfRounds = gameData.roundResults.length;
const mpr = kills / numberOfRounds;



