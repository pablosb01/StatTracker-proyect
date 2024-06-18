import { useState, useEffect } from "react";

function HonkaiCharacters() {
  const [characters, setCharacters] = useState({});
  const [error, setError] = useState(null);

  const [order, setOrder] = useState("");

  const [pathSelect, setPathSelect] = useState("");

  const [elementSelect, setElementSelect] = useState("");

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handlePath = (event) => {
    setPathSelect(event.target.value)
  }

  const handleElement = (event) => {
    setElementSelect(event.target.value)
  }

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

  let sortedCharacters = Object.values(characters);

  if (order === "ascending") {
    sortedCharacters = sortedCharacters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (order === "descending") {
    sortedCharacters = sortedCharacters.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  if (pathSelect) {
    sortedCharacters = sortedCharacters.filter(
      (character) => character.path === pathSelect
    );
  }

  if (elementSelect) {
    sortedCharacters = sortedCharacters.filter(
      (character) => character.element === elementSelect
    );
  }

  return (
    <div className="cajaHonkai mt-20 max-h-[800px] overflow-hidden rounded-xl w-full mr-2 ml-2">
      <div className="flex items-center gap-2 h-12 w-full drop-shadow-md group bg-gradient-to-r from-[#004675] to-[#0083DB] border border-gray-300 hover:from-[#0083DB] hover:to-[#004675] ">
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 xl:text-3xl text-lg text-white font-sans">
          CHARACTERS
        </h2>
        <div className="w-full flex gap-2">
          <select
            onChange={handleOrder}
            className="text-[#858585] bg-[#D9D9D9] rounded-md px-1 xl:text-lg text-center items-center whitespace-nowrap w-[70px] text-sm"
            >
            <option selected disabled>Order</option>
            <option value="ascending">Ascending Order</option>
            <option value="descending">Descending order</option>
            <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
                />
            </svg>
          </select>
          <select onChange={handlePath} className="text-[#858585] bg-[#D9D9D9] rounded-md px-0.5 xl:text-lg text-center items-center whitespace-nowrap w-[60px] text-sm">
            <option selected disabled value="">Path</option>
            <option value="Knight">Knight</option>
            <option value="Mage">Mage</option>
            <option value="Priest">Priest</option>
            <option value="Rogue">Rogue</option>
            <option value="Shaman">Shaman</option>
            <option value="Warlock">Warlock</option>
            <option value="Warrior">Warrior</option>
            <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
                />
            </svg>
          </select>
          <select onChange={handleElement} className=" text-[#858585] bg-[#D9D9D9] rounded-md px-1 xl:text-lg text-center items-center whitespace-nowrap w-[80px] text-sm">
            <option value="">Element</option>
            <option value="Fire">Fire</option>
            <option value="Ice">Ice</option>
            <option value="Imaginary">Imaginary</option>
            <option value="Physical">Physical</option>
            <option value="Quantum">Quantum</option>
            <option value="Thunder">Thunder</option>
            <option value="Wind">Wind</option>
            <svg className="w-2.5 h-2.5 ms-3" viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
                />
            </svg>
          </select>
        </div>
      </div>
      <div className="bg-[#BDBDBD] xl:max-h-[800px] max-h-[2000px] mb-2 grid xl:grid-cols-5 grid-cols-2 gap- overflow-y-auto p-5 group-hover:tracking-widest transition-all duration-300 ease-in-out">
        {sortedCharacters.map((character, index) => (
          <div
            key={`${character.StoryCharacterID}-${index}`}
            className="flex flex-col border rounded-2xl border-[#858585] bg-[#D9D9D9] m-2 text-center pb-2 w-[115px] h-[170px] sm:w-[50px]"
          >
            <img
              className="mb-1 max-w-[120px] sm:max-w-[50px] h-[150px] rounded-2xl"
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
            <span className="underline underline-offset1 font-bold text-xs px-2 py-1">
              {character.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HonkaiCharacters;
