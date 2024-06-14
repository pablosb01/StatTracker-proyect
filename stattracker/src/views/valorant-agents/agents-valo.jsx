import { useEffect, useState } from "react";
import { ImageNavbar } from "../../components/imageNavbar/ImageNavbar";
import { Outlet, useParams } from 'react-router-dom'

export function ValoAgents() {
    const [agents, setAgents] = useState([])
    const {agentName} = useParams() || 'jett';
   
    console.log(agentName + 'agentName')
    

    function getAgentsInfo() {
        fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
            .then(res => res.json())
            .then(data => {
                setAgents(data.data);
            })
            .catch(err => console.error(err))
    }

    console.log(agents)

    useEffect(()=>{
        getAgentsInfo()
    },[])

    console.log(agents)

    const currentAgent = agents.find(agent => agent.displayName.toLowerCase().replace('/', '') === agentName) || 'jett'

    console.log(currentAgent)
  /*   console.log(currentAgent + 'current agent') */

    /* useEffect(() => {
        if (agentsInfo.length > 0 && agentName) {
            const foundAgent = agentsInfo.find(agent => 
                agent.displayName.toLowerCase().replace("/","") === agentName
            )
            setCurrentAgent(foundAgent)
        }
    },[agentsInfo, agentName]) */
    
    console.log(agents)



    return(
        <>
            <ImageNavbar object={agents}/>

            {
                agents.length !== 0 && <Outlet context={currentAgent}/>
            }
        </>
    )
}