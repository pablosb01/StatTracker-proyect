import React, { useState } from "react"
import './Sidebar.css'
import sidebarIcon from './logo-small.png'
import sidebarIcon2 from './logo-big.png'

export function Sidebar() {
    
    const [isOpen, setIsOpen] = useState(false)
    const [buttonImage, setButtonImage] = useState(sidebarIcon)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setButtonImage(isOpen ? sidebarIcon : sidebarIcon2)
    }

    console.log(isOpen)


    return(
        <div className='global-container'>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <img src={buttonImage} onClick={toggleSidebar} className={'logo-small'}/>
            </div>
        </div>
    )
}