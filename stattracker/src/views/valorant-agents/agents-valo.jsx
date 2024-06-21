import { useEffect, useState } from "react";
import { ImageNavbar } from "../../components/imageNavbar/ImageNavbar";
import { Outlet, useParams } from 'react-router-dom'

export function ValoAgents() {
    const [agents, setAgents] = useState([])
    const {agentName} = useParams() || 'jett';
   
    
    

    function getAgentsInfo() {
        fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            .then(res => res.json())
            .then(data => {
                setAgents(data.data);
            })
            .catch(err => console.error(err))
    }

    

    useEffect(()=>{
        getAgentsInfo()
    },[])

    

    const currentAgent = agents.find(agent => agent.displayName.toLowerCase().replace('/', '') === agentName) || 'jett'

    console.log(currentAgent)

    if(!agents) {
        return(
            <div className="fixed w-screen h-screen flex items-center justify-center">
                <Loader/>
            </div>
        )
    }
    
    



    return(
        <>
            <ImageNavbar object={agents}/>

            {
                agents.length !== 0 && <Outlet context={currentAgent}/>
            }
        </>
    )
}