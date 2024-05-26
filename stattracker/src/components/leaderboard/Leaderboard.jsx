import { ValorantPlayerCard } from "./ValorantPlayerCard"

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-2/5 rounded-lg drop-shadow-md bg-gray-400">
        <div className="h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-red-400 to-red-600">
          <h2 className=" text-left self-center p-1.5 pl-3 font-bold text-3xl text-white">
            LEADERBOARD
          </h2>
        </div>
        <div className="flex justify-around gap-2 p-2 items-end">
          <ValorantPlayerCard playerName={top3PlayersUserInfo[1].name} playerAvatar={top3PlayersUserInfo[1].avatar} playerMedal={top3PlayersUserInfo[1].medal} medalSize={16} cardSize={52}/>
          <ValorantPlayerCard playerName={top3PlayersUserInfo[0].name} playerAvatar={top3PlayersUserInfo[0].avatar} playerMedal={top3PlayersUserInfo[0].medal} medalSize={20} cardSize={48}/>
          <ValorantPlayerCard playerName={top3PlayersUserInfo[2].name} playerAvatar={top3PlayersUserInfo[2].avatar} playerMedal={top3PlayersUserInfo[2].medal} medalSize={12} cardSize={44}/>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
