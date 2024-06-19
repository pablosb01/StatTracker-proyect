import ranks from '../../objects/ranks.json'
import { Rank } from '../../types/valorant/rank'

export function getDivisionNameByRankNumber(rankNumber: number) {
    const rank = Object.values(ranks)[rankNumber] as Rank
    return rank.divisionName
}