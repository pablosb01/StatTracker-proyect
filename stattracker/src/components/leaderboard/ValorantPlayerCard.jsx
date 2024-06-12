export function ValorantPlayerCard({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-400 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit w-full">
            <div className="bg-gradient-to-b to-gray-600 from-red-800 rounded-lg drop-shadow-md h-[185px]  overflow-hidden">
              <img src={playerAvatar} alt="Imagen" className="relative max-w-48 right-14 xl:right-0 lg:right-3"/>
              <img src={playerMedal} alt="Medalla" className="w-12 bottom-48 relative"/>
            </div>
            <div className="flex justify-around">
              <p className="font-bold">{playerName}</p>
            </div>
          </div>
    )
  }