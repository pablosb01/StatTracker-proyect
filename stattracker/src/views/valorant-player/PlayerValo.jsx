import StatsCard from "../../components/StatsCard/StatsCard";
import player from '/src/objects/player'

export function PlayerValorant() {

    /* const player = {
        rank: 13,
        ladderPoints: 50,
        wins: 20,
        defeats: 4,
        kills: 184,
        deaths: 180,
        assist: 30,
        headshots: 27,
        combatscore: 323,
        economy: 217,
    } */

    return(
        <>
            {/* <StatsCard rank='12' ladderPoints='50' wins='2' defeats='2'/> */}
            <StatsCard player={player}/>
        </>
    )
}