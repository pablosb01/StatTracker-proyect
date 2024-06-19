import { useState, useEffect } from "react";
import { HonkaiCharacterPrueba } from "./HonkaiCharacterPrueba.jsx";
import { HonkaiCharacter } from "./HonkaiCharacter.jsx";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

function HonkaiCharacters() {
  const [characters, setCharacters] = useState({});
  const [error, setError] = useState(null);

  const [order, setOrder] = useState("");

  const [pathSelect, setPathSelect] = useState("");

  const [elementSelect, setElementSelect] = useState("");

  const [isOpen, SetIsOpen] = useState(false);

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handlePath = (event) => {
    setPathSelect(event.target.value);
  };

  const handleElement = (event) => {
    setElementSelect(event.target.value);
  };

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

  let sortedCharacters = Object.values(characters);

  if (order === "Ascending") {
    sortedCharacters = sortedCharacters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (order === "Descending") {
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
  console.log(characters);
  sortedCharacters = sortedCharacters.map((character) => {
    if (character.name === "{NICKNAME}") {
      character.name = "Trailbrazer";
    }
    return character;
  });

  if (!order) {
    sortedCharacters = sortedCharacters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="cajaHonkai mt-[25px] max-h-[800px] rounded-xl sm:w-[700px] mr-2 ml-2 bg-gray-300/50">
      <div className="flex justify-between items-center gap-2 rounded-xl xl:gap-5 h-12 w-full drop-shadow-md group bg-gradient-to-r from-[#004675] to-[#0083DB]  hover:from-[#0083DB] hover:to-[#004675] ">
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 xl:text-3xl text-lg text-white font-sans md:ml-10 md:text-2xl">
          CHARACTERS
        </h2>
        <div className="relative w-full flex gap-2 xl:gap-5 md:justify-evenly">
          <div className="relative flex flex-col w-40 h-32 items-center md:justify-evenly">
            <button
              className="flex text-[#0083DB] bg-[#D9D9D9] rounded-md xl:text-sm justify-between items-center tracking-wider border-3 px-3 border-transparent active:border-[#0083DB] duration-300 active:text-white w-full text-sm text-nowrap"
              onClick={() => SetIsOpen((prev) => !prev)}
            >
              {order} Order
              {!isOpen ? (
                <AiOutlineArrowDown className="h-3.5" />
              ) : (
                <AiOutlineArrowUp className="h-3.5" />
              )}
            </button>
            {isOpen && (
              <div className="absolute bg-[#D9D9D9] rounded-md p-2 flex flex-col items-start top-[70px] w-full z-50">
                <ul className="">
                  <li
                    className="text-sm"
                    onClick={() => {
                      setOrder("Ascending");
                      SetIsOpen(false);
                    }}
                  >
                    Ascending
                  </li>
                  <li
                    className="text-sm"
                    onClick={() => {
                      setOrder("Descending");
                      SetIsOpen(false);
                    }}
                  >
                    Descending
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" xl:max-h-[720px] 2xl:mb-3 max-h-[650px] mb-2 grid sm:grid-cols-5 rounded-b-lg grid-cols-2 overflow-auto p-5 group-hover:tracking-widest transition-all duration-300 ease-in-out mx-auto gap-5 2xl:gap-0 w-fit py-6">
        {sortedCharacters.map((character, index) => (
          <HonkaiCharacterPrueba character={character} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HonkaiCharacters;
