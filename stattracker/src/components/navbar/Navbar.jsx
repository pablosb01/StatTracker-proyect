import { Link } from "react-router-dom";
import ValorantLogo from "/public/assets/logos/ValorantLogo";
import logo from "/assets/small-logo-nb.png";
import { NavItem } from "../navitem/NavItem";
import HonkaiLogo from "/public/assets/logos/HonkaiLogo";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";
import SvgEn from "../SvgFlags/SvgEn.jsx"
import SvgEs from "../SvgFlags/SvgEs.jsx"
import SvgFr from "../SvgFlags/SvgFr.jsx"
import SvgIt from "../SvgFlags/SvgIt.jsx"
import SvgDe from "../SvgFlags/SvgDe.jsx"
import SvgPt from "../SvgFlags/SvgPt.jsx"

export function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const [languageIcon, setLanguageIcon] = useState(<SvgEn />)

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setLanguageIcon(languages[language].icon);
  };

  const languages = {
    es: { name: 'Español', icon: <SvgEs /> },
    en: { name: 'English', icon: <SvgEn /> },
    fr: { name: 'Français', icon: <SvgFr /> },
    it: { name: 'Italiano', icon: <SvgIt /> },
    de: { name: 'Deutsch', icon: <SvgDe /> },
    pt: { name: 'Português', icon: <SvgPt /> },
  };



  return (
    <nav className="w-full flex justify-between bg-stone-900 px-5 sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-lg font-bold text-white">
          <img
            src={logo}
            alt="Logo"
            className="h-12 my-3 hover:scale-[120%] transition duration-200 scale ease-in-out"
          />
        </Link>
        <ul className="ml-5 h-full flex">
            <NavItem link={'valorant'} icon={<ValorantLogo />}>
              VALORANT
            </NavItem>
            <NavItem link={'honkai'} icon={<HonkaiLogo />}>
              HONKAI
            </NavItem>
        </ul>
      </div>
      <div className="flex flex-row-reverse items-center justify-center">
        <button
          className="text-white items-center active:text-red-600 active:bg-stone-800 rounded-md px-3"
          onClick={() => SetIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdOutlineArrowDropUp className="h-3.5" />
          ) : (
          <MdOutlineArrowDropDown className='h-3.5' />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-[60px] bg-stone-800 rounded-lg items-center justify-center border border-3 p-5">
            <ul>
              {Object.keys(languages).map((language) => (
                <li key={language}>
                  <button onClick={() => handleLanguageChange(language)}>
                    {languages[language].icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="ml-2">{languageIcon}</div>
      </div>
    </nav>
  );
}
