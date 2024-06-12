export function ValorantPlayerCard1({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-400 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit w-full">
            <div className={`bg-gradient-to-b to-gray-600 from-red-700 rounded-lg drop-shadow-md h-[220px] overflow-hidden`}>
              <img src={playerAvatar} alt="Imagen" className="relative right-20 max-w-56 xl:right-5 lg:right-5"/>
              <img src={playerMedal} alt="Medalla" className="w-12 bottom-56 relative"/>
            </div>
            <div className="flex justify-around">
              <p className="font-bold">{playerName}</p>
            </div>
          </div>
    )
  }