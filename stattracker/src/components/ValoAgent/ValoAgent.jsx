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

    return(
        <div className='flex flex-row w-full'>
            <div className='relative w-fit h-screen px-2'>
                <img src={currentAgent.background} alt={currentAgent.name} className={`absolute top-0 left-0 h-full object-cover z-0 ${backgroundGrandient}`}/>
                <div className='relative z-10 flex items-center justify-center w-full h-full'>
                    <img src={currentAgent.bustPortrait} className={`max-w-xl w-full h-full filter drop-shadow-[0_0_10px_#ffffffff] object-cover`}/>
                </div>
            </div>
            <div className='mx-auto p-5 w-3/5'>
                <span className='flex flex-row gap-5 justify-between items-center'>
                    <h1 className='text-white text-6xl font-fat border-b-2 border-red-600'>{currentAgent.displayName.toUpperCase()}</h1>
                    <span className='flex flex-col justify-between items-center gap-2 border border-red-600 border-2 p-4 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]'>
                        <h2 className='text-white text-xl'>Role:</h2>
                        <span className='flex flex-row gap gap-4'>
                            <img className='h-10'src={currentAgent.role.displayIcon}/>
                            <h1 className='text-gray-400 text-3xl'>{currentAgent.role.displayName}</h1>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}
