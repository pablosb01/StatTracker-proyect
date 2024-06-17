import { useState, useEffect } from "react";

function HonkaiCharacters() {
  const [characters, setCharacters] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/index_new/es/characters.json"
        );
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-20 max-h-[800px] overflow-hidden">
      <div className="flex items-center w-fit gap-10 h-12 rounded-lg drop-shadow-md group bg-gradient-to-r from-[#004675] to-[#0083DB] border border-gray-300 hover:from-[#0083DB] hover:to-[#004675] px-3">
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 text-3xl text-white font-sans">
          CHARACTERS
        </h2>

        <button className="text-white text-[#858585] bg-[#D9D9D9] rounded-md px-1 inline-flex text-lg text-center items-center whitespace-nowrap">
          Order by Alphabet
          <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <button className="text-white text-[#858585] bg-[#D9D9D9] rounded-md px-1 inline-flex text-lg text-center items-center whitespace-nowrap">
          Select path
          <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <button className="text-white text-[#858585] bg-[#D9D9D9] rounded-md px-1 inline-flex text-lg text-center items-center whitespace-nowrap">
          Select Element
          <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
      <div  className="bg-[#BDBDBD] h-[800px] grid grid-cols-5 overflow-y-auto p-5"
        >
      {Object.values(characters).map((character, index) => (
        <div
        key={`${character.StoryCharacterID}-${index}`}
        className=" flex flex-col border border-[#858585]  rounded-xl m-2 justify-center "
        >
          <img
            className="rounded-3xl border border-[#858585]  mb-1"
            src={`https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/${character.icon}`}
            alt="Imagen Character"
            style={{
              background: character.rarity === 5 ? 'linear-gradient(#935D53 0%, #C6A470 75%)': character.rarity === 4 ? 'linear-gradient(#414067 0%, #9864CD 75%)': ''
            }}
            />
          <span className="">{character.name}</span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default HonkaiCharacters;
