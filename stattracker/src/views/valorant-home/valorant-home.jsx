import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import LeaderBoard from '../../components/leaderboard/Leaderboard'
import matchInfo from '/src/objects/matchinfo.js'
import ValoLogo from '/src/assets/valorant-logo.png'

export function ValoHome() {
    console.log(matchInfo)


    return(
        <>
            <div className='flex items-center justify-center'>
                <div className=''>
                    <img className='w-[450px] flex justify-center'src={ValoLogo}/>
                    <UserFormValorant/>
                    <Agents/>
                </div>
                <div className='flex items-center justify-center'>
                    <LeaderBoard/>
                </div>
            </div>
        </>
    )
}