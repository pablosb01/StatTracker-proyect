import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Ability } from "../Ability/Ability"
import { AgentRole } from "../AgentRole/AgentRole"
import { AbilitySM } from "../Ability/AbilitySM"


export function ValoAgent (){
    const [backgroundGrandient, setBackgroundGradient] = useState()

    const currentAgent = useOutletContext()

    return(
        <>
        <div className='flex flex-row w-full hidden xl:flex'>
            <div className='relative w-fit h-screen px-2 my-auto'>
                <img src={currentAgent.background} alt={currentAgent.name} className={`absolute top-0 left-0 h-full object-cover z-0`}/>
                <div className='relative z-10 flex items-center justify-center w-full h-full'>
                    <img src={currentAgent.bustPortrait} className={`max-w-xl w-full h-full object-cover`} style={{filter: `drop-shadow(0 0 10px #${currentAgent.backgroundGradientColors[0]})`}}/>
                </div>
            </div>
            <div className='mx-auto p-5 w-3/5'>
                <span className='flex flex-row gap-5 justify-between items-center'>
                    <h1 className='text-white text-6xl font-fat border-b-2 border-red-600'>{currentAgent.displayName.toUpperCase()}</h1>
                    <AgentRole currentAgent={currentAgent}/>
                </span>
                <AgentRole currentAgent={currentAgent}/>
                <h3 className='text-white text-xl py-5'>{currentAgent.description}</h3>
                <div className='border border-white-600 border-2 p-10 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]'>
                    <h2 className='text-white text-4xl mx-auto font-fat w-fit'>ABILITIES:</h2>
                    {/* <div className='flex flex-col gap-6 border border-red-600 border-2 p-8 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]'>
                        <div className='flex items-center justify-left flex-row gap-4'>
                            <img className='h-8 w-8'src={currentAgent.abilities[0].displayIcon}/>
                            <h3 className='text-gray-400 text-xl'>{currentAgent.abilities[0].displayName}</h3>
                        </div>
                        <div>
                            <p className='text-white text-lg'>{currentAgent.abilities[0].description}</p>
                        </div>
                    </div> */}

                    {/* <Ability ab={currentAgent.abilities[0]}/> */}

                    {currentAgent.abilities.map((ab, index) => 
                        (<Ability ab={ab}/>)
                    )}
                </div>
            </div>
        </div>
        <div className='flex xl:hidden justify-between items-center flex-row gap-2 p-2 py-6'>
            <img className='w-10 h-10 md:w-24 md:h-24'src={currentAgent.displayIcon}/>
            <h1 className='text-white text-3xl md:text-6xl font-fat border-b-2 border-red-600'>{currentAgent.displayName.toUpperCase()}</h1>
            <span className='flex flex-col justify-between items-center border border-red-600 border-2 p-1 md:p-4 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]'>
                <h2 className='text-white text-lg md:text-2xl'>Role:</h2>
                <span className='flex flex-row items-center gap-1 mx-2'>
                    <img className='h-4 md:h-6'src={currentAgent.role.displayIcon}/>
                    <h1 className='text-gray-400 text-xl lg:text-2xl'>{currentAgent.role.displayName}</h1>
                </span>
            </span>
            
        </div>
        <div className='flex flex-col gap-2 px-4'>
            <h2 className='text-white text-2xl md:text-4xl mx-auto font-fat w-fit'>ABILITIES:</h2>
            {currentAgent.abilities.map((ab, index) => 
                            (<AbilitySM ab={ab}/>)
                        )}
        </div>
        </>
    )
}
