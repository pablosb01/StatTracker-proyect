export function HonkaiCharacter({character, index}) {

  return (
    <div
    key={`${character.StoryCharacterID}-${index}`}
    className="flex flex-col border rounded-3xl border-[#858585] bg-[#D9D9D9] m-2 text-center pb-2 w-[115px] h-auto mr-"
  >
    <img
      className="mb-1 rounded-2xl"
      src={`https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/${character.icon}`}
      alt="Imagen Character"
      style={{
        background:
          character.rarity === 5
            ? "linear-gradient(#935D53 0%, #C6A470 75%)"
            : character.rarity === 4
            ? "linear-gradient(#414067 0%, #9864CD 75%)"
            : "",
      }}
    />
    <div className="2xl:h-[30px] flex justify-center items-center">
      <span className="underline underline-offset1 font-bold text-sm">
        {character.name}
      </span>
    </div>
  </div>
  );
}


