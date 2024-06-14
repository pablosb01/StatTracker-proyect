import { useOutletContext } from "react-router-dom"
import { useState } from 'react'
import { useParams } from "react-router-dom"

export function ValoAgent (){

    const currentAgent = useOutletContext()

    return(
        <>
            <img className="h-full" src={currentAgent.bustPortrait}/>
        </>
    )
}