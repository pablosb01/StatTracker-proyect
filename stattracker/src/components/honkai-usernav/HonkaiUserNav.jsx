import { HonkaiUserNavChar } from "./HonkaiUserNavChar";

export function HonkaiUserNav({obj}) {

  let link = 'https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master'

  return (
    <nav className="w-full  lg:min-h-32 flex flex-col lg:flex-row justify-between p-1">
      <div className="h-full flex flex-col items-center shrink-0">
        <img src={`${link}/${obj.player.avatar.icon}`} alt="" className="h-3/4 max-h-20"/>
        <p className="text-white">{obj.player.nickname} UID: {obj.player.uid}</p>
      </div>
      <HonkaiUserNavChar obj={obj}/>
    </nav>
  );
}