import { HonkaiUserNav } from "../../components/honkai-usernav/HonkaiUserNav";
import { HonkaiUserCharacter } from "../../components/HonkaiUserCharacter/honkaiUserCharacter.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function HonkaiUser() {
    const { user } = useParams();
    const [apiInfo, setApiInfo] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`https://api.mihomo.me/sr_info_parsed/${user}?lang=en`)
            .then(res => res.json())
            .then(data => {
                setApiInfo(data);
                console.log(apiInfo)
            })
            .catch(err => setError(err));
    },[]);

    if(apiInfo === null) {
        if(error !== null) {
            return <div>Error: {error.message}</div>
        } else {
            return <div>Loading...</div>
        }
    }

    return (
        <div className="flex flex-col items-center h-full">
            <HonkaiUserNav />
            <HonkaiUserCharacter />
        </div>
    );
}