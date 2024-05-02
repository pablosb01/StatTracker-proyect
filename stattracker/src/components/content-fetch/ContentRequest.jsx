//https://eu.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-9f5cfe86-c600-46d0-8e37-590a4fcc063b
import React, { useState, useEffect } from "react";

function ContentRequest() {
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
                const response = await fetch(`https://eu.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-9f5cfe86-c600-46d0-8e37-590a4fcc063b`);
                
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
            
        </>
    );
}

export default NameInput1;
