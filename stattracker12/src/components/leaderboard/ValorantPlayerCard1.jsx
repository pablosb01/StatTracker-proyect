export function ValorantPlayerCard1({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-400 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit w-full">
            <div className={`bg-gradient-to-b to-gray-600 from-red-700 rounded-lg drop-shadow-md h-[220px] overflow-hidden flex justify-center`}>
              <img src={playerAvatar} alt="Imagen" className="relative max-w-56 "/>
              <img src={playerMedal} alt="Medalla" className="w-12 top-0 left-0 absolute"/>
            </div>
            <div className="flex justify-center items-center h-10">
              <p className="font-bold justify-center text-center">{playerName}</p>
            </div>
          </div>
    )
  }