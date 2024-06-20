import { HonkaiUserNav } from "../../components/honkai-usernav/HonkaiUserNav";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function HonkaiUser() {
    const { user } = useParams();
    const { char } = useParams()
    const [apiInfo, setApiInfo] = useState();
    const [error, setError] = useState();
    /* console.log('characterNumber:'+char) */

    useEffect(() => {
        fetch(`https://honkaiserver.onrender.com/honkai/${user}`)
            .then(res => res.json())
            .then(data => {
                setApiInfo(data);
                /* console.log(data.characters[char]) */
            })
            .catch(err => setError(err));
    },[]);

    if(!apiInfo) {
        if(error) {
            return <div>Error: {error.message}</div>
        } else {
            return <div>Loading...</div>
        }
    }

    return (
        <div className="flex flex-col items-center h-full">
            <HonkaiUserNav obj={apiInfo}/>
            {
                apiInfo.length !== 0 && <Outlet context={apiInfo.characters[char]}/>
            }
        </div>
    );
}