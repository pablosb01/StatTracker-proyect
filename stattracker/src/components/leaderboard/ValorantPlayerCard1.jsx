export function ValorantPlayerCard1({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-300 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit max-w-40">
            <div className={`bg-gray-500 rounded-lg drop-shadow-md h-[280px] overflow-hidden`}>
              <img src={playerMedal} alt="Medalla" className={`w-12 absolute`}/>
              <img src={playerAvatar} alt="Imagen" className="w-fit"/>
            </div>
            <div className="flex justify-around">
              <p className="font-bold">{playerName}</p>
            </div>
          </div>
    )
  }