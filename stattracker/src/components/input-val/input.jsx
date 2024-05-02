import React, { useState } from "react";

function NameInput() {
    const [riotUsername, setRiotUsername] = useState("");
    const [usernameHashtag, setUsernameHashtag] = useState("");

    async function fetchData() {
        try {
            const response = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${riotUsername}/${usernameHashtag}?api_key=RGAPI-fcccf661-7e64-4343-85a9-4410cab7f9bf`);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    }
    

    function searchUser() {
        fetchData();
    }

    return (
        <>
            <input 
                value={riotUsername} 
                onChange={(e) => setRiotUsername(e.target.value)} 
                placeholder="Riot Username"
            />
            <input 
                value={usernameHashtag} 
                onChange={(e) => setUsernameHashtag(e.target.value)} 
                placeholder="Username Hashtag"
            />
            <button type='submit' onClick={searchUser}>Buscar Perfil</button>
        </>
    );
}

export default NameInput;
