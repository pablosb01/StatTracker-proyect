import { Match } from "/src/types/valorant/match"
import { deepCopy, replaceValues } from "../object"

/**
 * Retrieve an array of 10 matches changing the puuid passed via prop ratio one player per game as if that puuid played that game
 * EDGE CASE: puuid is in the match. It interchange itself by the corresponding player
 * @param puuid 
 * @param match 
 * @returns {Match[]}
 */ 
export function matchesFromAMatchData(puuid: string, match: Match) {
    const mockMatchHistory = match.players.map(({puuid: currentPuuid}) => {
        if(currentPuuid === puuid)
            return match
        const matchCopy = deepCopy(match) as Match

        replaceValues(matchCopy, puuid, 'thisIsAPuuidPlaceholder')

        replaceValues(matchCopy, currentPuuid, puuid)

        replaceValues(matchCopy, 'thisIsAPuuidPlaceholder', currentPuuid)
        return matchCopy
    })
    return mockMatchHistory
}