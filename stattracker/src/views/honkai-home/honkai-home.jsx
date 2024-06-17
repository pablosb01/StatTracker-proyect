import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export function HonkaiHome() {
    const navigate = useNavigate()
    const [uid, setUid] = useState()

    const handleSubmit = (e) => {
        const newUrl = `/honkai/${uid}`;
        navigate(newUrl, {replace: true});
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='number' placeholder="UID" value={uid} minLenght='9' onChange={(e) => setUid(e.target.value)}/>  
                <button type='submit'>submit</button>
            </form>
        </>
    )
}