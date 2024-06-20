import { useState, useEffect } from "react";
import { HonkaiCharacterPrueba } from "./HonkaiCharacterPrueba.jsx";
import { HonkaiCharacter } from "./HonkaiCharacter.jsx";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function HonkaiCharacters() {
  const [characters, setCharacters] = useState({});
  const [error, setError] = useState(null);

  const [order, setOrder] = useState("");

  const [pathSelect, setPathSelect] = useState("");

  const [elementSelect, setElementSelect] = useState("");

  const [isOpen, SetIsOpen] = useState(false);

  const [isOpenPath, SetIsOpenPath] = useState(false);

  const [isOpenElement, SetIsOpenElement] = useState(false);

  const [buttonsReset, SetButtonReset] = useState("");

  function handleResetPath() {
    setPathSelect("");
  }

  function handleResetElement() {
    setElementSelect("");
  }

  function handleResetAll() {
    setOrder("");
    setPathSelect("");
    setElementSelect("");
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
    <div className="cajaHonkai mt-[25px] sm:w-auto max-h-[800px] rounded-xl lg:w-[700px] mr-2 ml-2 bg-gray-300/50">
      <div className="flex justify-between items-center gap-2 rounded-xl xl:gap-5 h-12 w-full drop-shadow-md group bg-gradient-to-r from-[#004675] to-[#0083DB]  hover:from-[#0083DB] hover:to-[#004675] pr-1.5 whitespace-nowrap">
        <h2 className="text-left tracking-wide group-hover:tracking-widest transition-all duration-300 ease-in-out items-center p-1.5 xl:text-3xl text-xs text-white font-sans md:ml-10 md:text-2xl">
          CHARACTERS
        </h2>
        <button
          className="text-white border rounded-full p-0.5"
          onClick={handleResetAll}
        >
          <RxCross1 />
        </button>
        <div className="relative w-full flex gap-2 xl:gap-5 md:justify-evenly">
          <div className="relative flex flex-col w-auto h-auto items-center md:justify-evenly">
            <button
              className="flex text-[#004675] bg-[#D9D9D9] rounded-md xl:text-sm justify-between items-center tracking-wider border-3 px-3 border-transparent active:border-[#0083DB] duration-300 active:text-white w-full text-xs text-nowrap"
              onClick={() => SetIsOpen(!isOpen)}
              type="open"
              id="buttonOrder"
            >
              {order} Order
              {!isOpen ? (
                <AiOutlineArrowDown className="h-3.5" />
              ) : (
                <AiOutlineArrowUp className="h-3.5" />
              )}
            </button>
            {isOpen && (
              <div className="absolute bg-[#D9D9D9] rounded-md p-2 flex flex-col items-start top-[21px] z-50">
                <ul className="">
                  <li
                    className="sm:text-sm cursor-pointer"
                    onClick={() => {
                      setOrder("Ascending");
                      SetIsOpen(false);
                    }}
                  >
                    Ascending
                  </li>
                  <li
                    className="sm:text-sm cursor-pointer"
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
        <div className="relative w-full flex gap-2 xl:gap-5 md:justify-evenly">
          <div className="relative flex flex-col w-auto h-auto items-center md:justify-evenly">
            <button
              className="flex text-[##004675] bg-[#D9D9D9] rounded-md xl:text-sm justify-between items-center tracking-wider border-3 px-3 border-transparent active:border-[#0083DB] duration-300 active:text-white w-full text-xs text-nowrap"
              onClick={() => SetIsOpenPath(!isOpenPath)}
              type="button"
              id="buttonPath"
            >
              Path
              {!isOpenPath ? (
                <AiOutlineArrowDown className="h-3.5" />
              ) : (
                <AiOutlineArrowUp className="h-3.5" />
              )}
            </button>
            {isOpenPath && (
              <div className="absolute bg-[#D9D9D9] rounded-md p-2 flex flex-col items-start top-[21px] z-50">
                <ul className="">
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect(handleResetPath);
                      SetIsOpenPath(false);
                    }}
                  >
                    Reset
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Knight");
                      SetIsOpenPath(false);
                    }}
                  >
                    Knight
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Mage");
                      SetIsOpenPath(false);
                    }}
                  >
                    Mage
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Priest");
                      SetIsOpenPath(false);
                    }}
                  >
                    Priest
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Rogue");
                      SetIsOpenPath(false);
                    }}
                  >
                    Rogue
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Shaman");
                      SetIsOpenPath(false);
                    }}
                  >
                    Shaman
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Warlock");
                      SetIsOpenPath(false);
                    }}
                  >
                    Warlock
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setPathSelect("Warrior");
                      SetIsOpenPath(false);
                    }}
                  >
                    Warrior
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="relative w-full flex gap-2 xl:gap-5 md:justify-evenly">
          <div className="relative flex flex-col w-auto h-auto items-center md:justify-evenly">
            <button
              className="flex text-[#004675] bg-[#D9D9D9] rounded-md xl:text-sm justify-between items-center tracking-wider border-3 px-3 border-transparent active:border-[#0083DB] duration-300 active:text-white w-full text-xs text-nowrap"
              onClick={() => SetIsOpenElement((prev) => !prev)}
              type="button"
            >
              Element
              {!isOpenElement ? (
                <AiOutlineArrowDown className="h-3.5" />
              ) : (
                <AiOutlineArrowUp className="h-3.5" />
              )}
            </button>
            {isOpenElement && (
              <div className="absolute bg-[#D9D9D9] rounded-md p-2 flex flex-col items-start top-[21px] z-50">
                <ul className="">
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect(handleResetElement);
                      SetIsOpenElement(false);
                    }}
                  >
                    Reset
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Fire");
                      SetIsOpenElement(false);
                    }}
                  >
                    Fire
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Ice");
                      SetIsOpenElement(false);
                    }}
                  >
                    Ice
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Imaginary");
                      SetIsOpenElement(false);
                    }}
                  >
                    Imaginary
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Physical");
                      SetIsOpenElement(false);
                    }}
                  >
                    Physical
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Quantum");
                      SetIsOpenElement(false);
                    }}
                  >
                    Quantum
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Thunder");
                      SetIsOpenElement(false);
                    }}
                  >
                    Thunder
                  </li>
                  <li
                    className="sm:text-sm text:xs cursor-pointer"
                    onClick={() => {
                      setElementSelect("Wind");
                      SetIsOpenElement(false);
                    }}
                  >
                    Windior
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cajaDivHonkai xl:max-h-[720px] 2xl:mb-3 max-h-[650px] sm:max-w-[740px] mb-2 grid sm:grid-cols-3 xl:grid-cols-5 rounded-b-lg overflow-auto p-5 group-hover:tracking-widest transition-all duration-300 ease-in-out mx-auto gap-5 2xl:gap-0 w-fit py-6">
        {sortedCharacters.map((character, index) => (
          <HonkaiCharacterPrueba character={character} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HonkaiCharacters;
