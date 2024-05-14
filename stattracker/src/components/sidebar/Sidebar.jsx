import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import sidebarIcon from "./logo-small.png";
import sidebarIcon2 from "./logo-big.png";
import { SvgRow } from "../SvgRow/SvgRow";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonImage, setButtonImage] = useState(sidebarIcon);

  const toggleSidebar = () => {
    if (window.innerWidth < 1200) {
        return
    }
    setIsOpen(!isOpen);
    setButtonImage(isOpen ? sidebarIcon : sidebarIcon2);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 && !isOpen) {
        setIsOpen(true); // Si el ancho de la ventana se reduce por debajo de 1200px y la barra lateral está cerrada, ábrela automáticamente
        setButtonImage(sidebarIcon2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  console.log(isOpen);

  return (
    
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className={"logo-container"}>
        <img
          src={buttonImage}
          onClick={toggleSidebar}
          className={"logo-small"}
        />
      </div>
      <div className={"svg-container"}>
        <SvgRow name={"GitHub"} />
        <SvgRow name={"Instagram"} />
        <SvgRow name={"VALORANT"} />
        <SvgRow name={"Honkai"} />
      </div>
    </div>
    
  );
}
