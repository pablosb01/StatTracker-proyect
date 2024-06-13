export function ValorantPlayerCard2({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-400 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit w-full">
            
            <div className={`bg-gradient-to-b to-gray-600 from-red-900 rounded-lg drop-shadow-md h-[170px] overflow-hidden`}>
              <img src={playerAvatar} alt="Imagen" className="relative left-1 max-w-44"/>
              <img src={playerMedal} alt="Medalla" className="w-12 bottom-44 relative"/>
              
              
              
            </div>
            <div className="flex justify-around">
              <p className="font-bold">{playerName}</p>
            </div>
          </div>
    )
  }