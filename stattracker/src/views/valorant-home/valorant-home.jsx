import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import LeaderBoard from '../../components/leaderboard/Leaderboard'
import matchInfo from '/src/objects/matchinfo.js'
import ValoLogo from '/src/assets/valorant-logo.png'
import { Download } from '../../components/downloadbutton/DownloadButton'
import { Overview } from '../../components/overview/Overview'

export function ValoHome() {
    /* console.log(matchInfo) */


    return(
        <>
            <Overview />
        </>
    )
}