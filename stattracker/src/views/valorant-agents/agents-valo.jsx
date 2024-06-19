import { useEffect, useState } from "react";
import { ImageNavbar } from "../../components/imageNavbar/ImageNavbar";
import { Outlet, useParams } from 'react-router-dom'

export function ValoAgents() {
    const [agents, setAgents] = useState([])
    const {agentName} = useParams();
   
    function getAgentsInfo() {
        fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            .then(res => res.json())
            .then(data => {
                setAgents(data.data);
            })
            .catch(err => console.error(err))
    }


    useEffect(getAgentsInfo, [])

    const currentAgent = agents.find(agent => agent.displayName.toLowerCase().replace('/', '') === agentName) || agents[0]

    return(
        <>
            <ImageNavbar agents={agents}/>

            {agents.length !== 0 && <Outlet context={currentAgent}/>}
        </>
    )
}