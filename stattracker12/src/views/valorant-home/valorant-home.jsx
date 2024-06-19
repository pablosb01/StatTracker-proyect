import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import LeaderBoard from '../../components/leaderboard/Leaderboard'
import matchInfo from '/src/objects/matchinfo.js'
import ValoLogo from '/assets/valorant-logo.png'
import { Download } from '../../components/downloadbutton/DownloadButton'
import {useState, useEffect} from "react" 

export function ValoHome() {
    const [leaderboardData, setLeaderboardData] = useState();
    /* console.log(matchInfo) */

    let apiKey = 'RGAPI-1c653bf0-78a3-4609-812a-d5920753ff7a'
    let episode = "79f9d00f-433a-85d6-dfc3-60aef115e699"



    function getLeaderboardInfo(apiKey, episode) {
        fetch(`https://eu.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${episode}?size=3&startIndex=0&api_key=${apiKey}`)
         .then(response => response.json())
         .then(data => setLeaderboardData(data))
         .then(() => console.log(leaderboardData))
         /* .then(() => setLoading(true)) */
         .catch(error => setError(error));
    }

    useEffect(()=> {
        getLeaderboardInfo(apiKey, episode)
    },[apiKey, episode])

    

    return(
        <>
            <div className='flex w-full items-center gap-x-32 gap-y-16 flex-col justify-center py-10 md:flex-col 2xl:flex-row px-4 lg:gap-16'>
                <div className='relative xl:w-1/2 md:w-2/3 flex flex-col gap-16 items-center xl:px-20'>
                    <img className='w-1/2'src={ValoLogo}/>
                    <UserFormValorant/>
                    <Agents/>
                </div>
                <div className='xl:relative xl:max-w-[600px] flex flex-col w-full xl:w-1/2 md:w-1/2 gap-16 items-center xl:px-20'>
                    <LeaderBoard/>
                    <Download/>
                </div>
            </div>
        </>
    )
}