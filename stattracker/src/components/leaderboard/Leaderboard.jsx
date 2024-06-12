import { ValorantPlayerCard } from "./ValorantPlayerCard"
import { ValorantPlayerCard1 } from "./ValorantPlayerCard1"
import { ValorantPlayerCard2 } from "./ValorantPlayerCard2"
import { useState, useEffect } from "react";

import leaderboardArr from "../../objects/leaderboard";

function LeaderBoard() {

  return (
    <div className="flex justify-center w-full max-w-[600px]">
      <div className="rounded-lg drop-shadow-md bg-gray-300">
        <div className="flex items-center h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-black to-red-900 border border-gray-300">
          <h2 className="text-left tracking-widest items-center p-1.5 pl-3  text-3xl text-white font-sans">
            LEADERBOARD
          </h2>
        </div>
        <div className="flex justify-around gap-2 p-2 items-end">
          <ValorantPlayerCard playerName={leaderboardArr[1].username} playerAvatar={leaderboardArr[1].avatar} playerMedal={leaderboardArr[1].medal}/>
          <ValorantPlayerCard1 playerName={leaderboardArr[0].username} playerAvatar={leaderboardArr[0].avatar} playerMedal={leaderboardArr[0].medal}/>
          <ValorantPlayerCard2 playerName={leaderboardArr[2].username} playerAvatar={leaderboardArr[2].avatar} playerMedal={leaderboardArr[2].medal} />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
