import React, { useState, useEffect } from "react";

function NameInput1() {
    const [riotUsername, setRiotUsername] = useState("");
    const [usernameHashtag, setUsernameHashtag] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${riotUsername}/${usernameHashtag}?api_key=RGAPI-fcccf661-7e64-4343-85a9-4410cab7f9bf`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (riotUsername !== "" && usernameHashtag !== "") {
            fetchData();
        }
    }, [riotUsername, usernameHashtag]);

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
            <button type='submit' disabled={loading || riotUsername === "" || usernameHashtag === ""}>Buscar Perfil</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {userData && (
                <div>
                    {/* Render user data here */}
                </div>
            )}
        </>
    );
}

export default NameInput1;
