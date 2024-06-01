import StatsCard from "../../components/StatsCard/StatsCard";
/* import player from '/src/objects/player' */
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ranksIcon from '/src/objects/ranks.js'
import gameData from '/src/objects/matchinfo.js'

export function PlayerValorant() {
    //hooks para fetch y almacenar raw
    const [puId, setPuId] = useState(null);
    const [error, setError] = useState(null);
    const {accountName, hashtag} = useParams();
    const [gamesId, setGamesId] = useState()
    const [matchInfo, setMatchInfo] = useState([]);
    const [loading, setLoading] = useState(false)
    //hooks para resultados de logica
    const [rank, setRank] = useState()
    const [rankId ,setRankId] = useState()
    const [rankName, setRankName] = useState()
    const [totalKills, setTotalKills] = useState()
    const [totalDeaths, setTotalDeaths] = useState()
    const [totalAssists, setTotalAssists] = useState()
    const [kda, setKda] = useState();
    const [totalHeadshots, setTotalHeadshots] = useState()
    const [headshotPercent, setHeadshotPercent] = useState()

    const apiKey = 'RGAPI-5d2556b1-3701-48f6-a3e2-3a265e24e1de'


    //!FETCH PARA SACAR EL ID DE JUGADOR

    console.log(gameData);

    /* function getId(apiKey, accountName, hashtag) {
        fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${accountName}/${hashtag}?api_key=${apiKey}`)
         .then(response => response.json())
         .then(data => setPuId(data))
         .then(() => setLoading(true))
         .catch(error => setError(error));
    }

    useEffect(() => {
        getId(apiKey, accountName, hashtag)
    }, [apiKey, accountName, hashtag]);
 */
    //!FETCH PARA SACAR LA LISTA DE PARTIDAS (ID DE CADA PARTIDA)

    /* function getMatchList(apiKey, puId) {
        if(puId) {
            fetch(`https://europe.api.riotgames.com/val/match/v1/matchlists/by-puuid/${puId}?api_key=${apiKey}`)
                .then(response => response.json())
                .then(data => setGamesId(data))
                .catch(error => setError(error));
        }
    }

    useEffect(() => {
        getMatchList(apiKey, puId)
    }, [apiKey, puId]); */


    //!FETCH PARA SACAR LOS DATOS DE CADA PARTIDA Y GUARDARLOS TODOS EN EL MISMO useState

    /* function getMatchInfo (apiKey, gamesId) {
        if (gamesId && gamesId.matchIds) {
            const matchIds = gamesId.matchIds.slice(0, 10);
            matchIds.forEach((matchId) => {
              fetch(`https://europe.api.riotgames.com/val/match/v1/matches/${matchId}?api_key=${apiKey}`)
               .then((res) => res.json())
               .then((data) => setMatchInfo((prevInfo) => [...prevInfo, data]))
               .then(() => {setLoading(false)})
            });
          }
        
    }

    useEffect(() => {
        getMatchInfo(apiKey, gamesId)
    }, [apiKey, gamesId]); */

    //!LOGICA PARA SACAR MEDIA DE DATOS DEL JUGADOR

    /* function playerRank(matchInfo, puId) {
        matchInfo[0].players.forEach(player => {
            if(player.puuid === puId){
                setRank(player.competitiveTier);
            }
        })
    }

    playerRank(matchInfo, puId); */

    //logica para cambiar el output del rango para que se vea bonito en pantalla


    /* useEffect(() => {
        if(rank) {
            const rankNumber = rankMap[rank]
            setRankId(rankNumber)
            const ladderName = ranksIcon[rankNumber]
            setRankName(ladderName)
        }
    },[rank])




    function statsSum(matchInfo, puId) {
        setTotalAssists(0)
        setTotalDeaths(0)
        setTotalKills(0)
        matchInfo.forEach(match => {
            match.players.forEach(player => {
                if (player.puuid === puId) {
                    setTotalAssists((prev) => {return prev + player.stats.assists});
                    setTotalDeaths((prev) => {return prev + player.stats.deaths});
                    setTotalKills((prev) => {return prev + player.stats.kills});
                }
            })
        })

    }

    statsSum(matchInfo, puId);

    useEffect(() => {
        const kdaValue = (totalKills + totalAssists) / totalDeaths;
        setKda(kdaValue);
    },[totalKills, totalDeaths, totalAssists]);
 */

    /* function getTotalHeadshots (matchInfo, puId) {
        setTotalHeadshots(0)
        matchInfo.forEach(match => {
            match.roundResults.forEach(round => {
                round.playerStats.forEach(player => {
                    if (player.puuid === puId) {
                        player.damage.forEach(damage => {
                            setTotalHeadshots((prev) => {return prev + damage.headshots});
                        })
                    }
                })
            })
        })
    }

    getTotalHeadshots(matchInfo, puId)

    function calculateHeadshotPercentage () {
        const headshotPercentage = (totalHeadshots / totalKills) * 100;
        setHeadshotPercentage(headshotPercentage.toFixed(2));
    }

    useEffect(()=> {
        calculateHeadshotPercentage(matchInfo, puId);
    },[totalHeadshots, totalKills]) */

    setPuId("FjXIt87aLFSWcVkZJhxiTyAgf90zeiz2yjiPQtxbmng8oYlFeqwS9ziS7-Er8NClXt2ephk_gS754g")

    function getTotalHeadshots (matchInfo, puId) {
        setTotalHeadshots(0)
        
        gameData.roundResults.forEach(round => {
            round.playerStats.forEach(player => {
                if (player.puuid === puId) {
                     player.damage.forEach(damage => {
                        setTotalHeadshots((prev) => {return prev + damage.headshots});
                    })
                }
            })
        })
        
    }

    
    getTotalHeadshots(gameData, puId)

    console.log(totalHeadshots)

    function calculateHeadshotPercentage () {
        const headshotPercentage = (totalHeadshots / totalKills) * 100;
        setHeadshotPercentage(headshotPercentage.toFixed(2));
    }

    useEffect(()=> {
        calculateHeadshotPercentage(matchInfo, puId);
    },[totalHeadshots, totalKills])

    

    const playerOverall = {
        rank: rank,
        kills: totalKills,
        deaths: totalDeaths,
        assists: totalAssists,
        kda: kda,
        rankName: rankName,
        rankId: rankId,
    }

    /* if(loading) {
        return <div>loading..</div>
    }

    if(error) {
        return <div>error: {error.message}</div>
    } */

    const player = {
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
    }
    

    return(
        <>
            {/* <StatsCard rank='12' ladderPoints='50' wins='2' defeats='2'/> */}
            <StatsCard player={player}/>
            <h1>{accountName}</h1>
            <h1>{hashtag}</h1>
        </>
    )
}