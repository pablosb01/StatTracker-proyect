import { HonkaiUserNav } from "../../components/honkai-usernav/HonkaiUserNav";
import { HonkaiUserCharacter } from "../../components/HonkaiUserCharacter/honkaiUserCharacter.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function HonkaiUser() {
    const {user} = useParams()
    const [apiInfo, setApiInfo] = useState()

    useEffect(() => {
        fetch(`https://api.mihomo.me/sr_info_parsed/${user}?lang=en`, {mode: 'no-cors'})
            .then(res => res.json())
            .then(data => setApiInfo(data))
            .catch(err => console.err(err))
    },[user])

    console.log(apiInfo)

    return(
        <div className="flex flex-col items-center h-full">
            <HonkaiUserNav />
            <HonkaiUserCharacter/>
        </div>
    )
}