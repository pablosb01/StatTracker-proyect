export function ValorantPlayerCard({playerName, playerAvatar, playerMedal, medalSize, cardSize}) {

    return (
          <div className="bg-gray-300 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit ">
            <div className={`bg-gray-500 rounded-lg drop-shadow-md h-${cardSize} overflow-hidden`}>
              <img src={playerMedal} alt="Medalla" className={`w-${medalSize} absolute`}/>
              <img src={playerAvatar} alt="Imagen"/>
            </div>
            <div className="flex justify-around">
              <p className="font-bold">{playerName}</p>
            </div>
          </div>
    )
  }