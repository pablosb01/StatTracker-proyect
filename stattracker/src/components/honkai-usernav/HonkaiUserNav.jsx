import { HonkaiUserNavChar } from "./HonkaiUserNavChar";

export function HonkaiUserNav({ obj }) {
  let link = "https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master";

  return (
    <nav className="w-full  lg:min-h-32 flex flex-col lg:flex-row justify-between p-1">
      <div className="h-full flex  xl:flex-row items-center justify-center shrink-0">
        <img
          src={`${link}/${obj.player.avatar.icon}`}
          alt=""
          className=" max-h-[6rem] hover:scale-[115%] drop-shadow-[0_0_4px_rgba(255,255,255,0)] hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out"
        />
        <div className="flex  flex-col   justify-center">
          <p className="text-white/70 text-4xl pl-4 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
            {obj.player.nickname}
          </p>
          <p className="text-gray-300/50 text-xl pl-4">
            <span className="font-[500]">UID:</span> <span className="font-[400]">{obj.player.uid}</span>
          </p>
        </div>
      </div>
      <HonkaiUserNavChar obj={obj} />
    </nav>
  );
}
