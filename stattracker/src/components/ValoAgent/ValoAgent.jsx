import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export function ValoAgent (){
    const [backgroundGrandient, setBackgroundGradient] = useState()

    const currentAgent = useOutletContext()

    function getBackgroundGradient() {
        if(currentAgent) {
            let back = ` bg-gradient-to-b from-[#${currentAgent.backgroundGradientColors[0]}] via-[#${currentAgent.backgroundGradientColors[1]}] via-[#${currentAgent.backgroundGradientColors[2]}] to-[#${currentAgent.backgroundGradientColors[3]}]`
            setBackgroundGradient(back)
    }
    }
    
    useEffect(()=>{
        getBackgroundGradient()
    },[currentAgent])

    console.log(backgroundGrandient)

    return(
        <>
            <div className='relative w-fit h-screen'>
                <img src={currentAgent.background} alt={currentAgent.name} className={`absolute top-0 left-0 h-full object-cover z-0 ${backgroundGrandient}`}/>
                <div className='relative z-10 flex items-center justify-center w-full h-full'>
                    <img src={currentAgent.bustPortrait} className='max-w-2xl w-full h-full filter drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] object-cover'/>
                </div>
            </div>
        </>
    )
}
