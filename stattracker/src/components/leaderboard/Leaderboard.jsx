import { ValorantPlayerCard } from "./ValorantPlayerCard"
import { ValorantPlayerCard1 } from "./ValorantPlayerCard1"
import { ValorantPlayerCard2 } from "./ValorantPlayerCard2"

function LeaderBoard() {

  const top3PlayersUserInfo=[{
      name:"Bulb", 
      avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/200px-Bulbasaur.png",
      medal: "/src/assets/medals/Oro.png",
      leaderboardRank: 1
  },{
      name:"Ivy", 
      avatar:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/8/86/latest/20190406151903/Ivysaur.png/200px-Ivysaur.png",
      medal: "/src/assets/medals/Plata.png",
      leaderboardRank: 2
  },{
      name: "Venus", 
      avatar: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/200px-Venusaur.png",
      medal: "/src/assets/medals/Bronce.png",
      leaderboardRank: 3
  }
  ]


  return (
    <div className="flex justify-center">
      <div className="rounded-lg drop-shadow-md bg-gray-300">
        <div className="flex items-center h-[54px] rounded-lg drop-shadow-md bg-stone-900 border border-gray-300">
          <h2 className=" text-left items-center p-1.5 pl-3  text-3xl text-white font-sans">
            LEADERBOARD
          </h2>
        </div>
        <div className="flex justify-around gap-2 p-2 items-end">
          <ValorantPlayerCard playerName={top3PlayersUserInfo[1].name} playerAvatar={top3PlayersUserInfo[1].avatar} playerMedal={top3PlayersUserInfo[1].medal}/>
          <ValorantPlayerCard1 playerName={top3PlayersUserInfo[0].name} playerAvatar={top3PlayersUserInfo[0].avatar} playerMedal={top3PlayersUserInfo[0].medal}/>
          <ValorantPlayerCard2 playerName={top3PlayersUserInfo[2].name} playerAvatar={top3PlayersUserInfo[2].avatar} playerMedal={top3PlayersUserInfo[2].medal} />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
