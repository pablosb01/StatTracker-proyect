export function ValorantPlayerCard({playerName, playerAvatar, playerMedal}) {

    return (
          <div className="bg-gray-400 rounded-lg drop-shadow-md overflow-hidden flex flex-col justify-end h-fit w-full">
            <div className="bg-gradient-to-b to-gray-600 from-red-800 rounded-lg drop-shadow-md h-[185px]  overflow-hidden">
              <img src={playerAvatar} alt="Imagen" className="relative max-w-48 right-[48%] xl:right-0 md:right-[20%]"/>
              <img src={playerMedal} alt="Medalla" className="w-12 bottom-48 relative"/>
            </div>
            <div className="flex justify-center items-center h-10">
              <p className="font-bold justify-center text-center">{playerName}</p>
            </div>
          </div>
    )
  }