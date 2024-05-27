import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import LeaderBoard from '../../components/leaderboard/Leaderboard'
import matchInfo from '/src/objects/matchinfo.js'
import ValoLogo from '/src/assets/valorant-logo.png'
import { Download } from '../../components/downloadbutton/DownloadButton'

export function ValoHome() {
    console.log(matchInfo)


    return(
        <>
            <div className='flex items-center gap-3 justify-center py-10 md:flex-col lg:flex-row'>
                <div className='relative w-1/2 flex flex-col gap-16 items-center'>
                    <img className='w-1/2 m-auto'src={ValoLogo}/>
                    <UserFormValorant/>
                    <Agents/>
                </div>
                <div className='flex items-center flex-col gap-16 justify-center'>
                    <LeaderBoard/>
                    <Download/>
                </div>
            </div>
        </>
    )
}