import { getDivisionNameByRankNumber } from './rank'
import { Match, Player } from '../../types/valorant/match'
import ranks from '../../objects/ranks.json'
import { Rank } from '../../types/valorant/rank'

export function getDivisionPortions(rankHistory: number[]) {
    const portions = rankHistory.reduce((acc, curr) => {
        // eslint-disable-next-line
        const [prevPortion] = acc.toReversed()
        return [...acc, curr]
    }, [] as number[])
}

function getPlayerRankHistory(puuid: string, matchHistory: Match[]) {
    return matchHistory.map(match => {
        const player = match.players.find(player => player.puuid === puuid) as Player
        const rankKey = player.competitiveTier
        const typedRank = ranks as {[key: string]: Rank }
        return (ranks[rankKey] as Rank).tier
    })
}