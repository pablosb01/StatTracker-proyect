import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import LeaderBoard from '../../components/leaderboard/Leaderboard'
import matchInfo from '/src/objects/matchinfo.js'
import ValoLogo from '/public/assets/valorant-logo.png'
import { Download } from '../../components/downloadbutton/DownloadButton'

export function ValoHome() {
    console.log(matchInfo)


    return(
        <>
            <div className='flex w-screen items-center gap-32 flex-col justify-center py-10 md:flex-col lg:flex-col xl:flex-row px-4 lg:gap-2'>
                <div className='relative xl:w-1/2 md:w-2/3 flex flex-col gap-16 items-center xl:px-20'>
                    <img className='w-1/2'src={ValoLogo}/>
                    <UserFormValorant/>
                    <Agents/>
                </div>
                <div className='flex items-center flex-col w-full gap-16 justify-center md:w-1/2 xl:w-fit xl:px-20'>
                    <LeaderBoard/>
                    <Download/>
                </div>
            </div>
        </>
    )
}