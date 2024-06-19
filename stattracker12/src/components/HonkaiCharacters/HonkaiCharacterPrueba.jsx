export function HonkaiCharacterPrueba({ character, index }) {
  return (
    <div
      key={`${character.StoryCharacterID}-${index}`}
      className="flex flex-col group shadow-lg justify-end rounded-xl m-2 text-center w-[120px] h-[170px] overflow-hidden"
    >
      <img
        className="mb-1 rounded-xl relative w-max z-10 top-[3rem] scale-[125%] group-hover:scale-[145%] transition-all ease-in-out duration-500"
        src={`https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/${character.preview}`}
        alt="Imagen Character"
        style={{
          background:
            character.rarity === 5
              ? "linear-gradient(#C9A36A 0%, #36211f 60%)"
              : character.rarity === 4
              ? "linear-gradient(#9864CD 0%, #25243b 60%)"
              : "",
        }}
      />
      <div className="min-h-[40px] flex justify-center items-end pb-2 bg-gradient-to-t from-black/35 group-hover:from-black/50 z-40 rounded-b-xl ">
        <span className=" font-bold text-white/85 drop-shadow-[0_0_1px_rgba(255,255,255,0.2)] group-hover:tracking-wider  text-sm group-hover:text-base transition-all ease-in-out duration-500">
          {character.name.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
