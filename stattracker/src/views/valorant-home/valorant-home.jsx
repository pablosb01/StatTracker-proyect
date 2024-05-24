import { Agents } from '../../components/Agents/Agents'
import UserFormValorant from '../../components/UserFormValorant/UserFormValorant'
import matchInfo from '/src/objects/matchinfo.js'

export function ValoHome() {
    console.log(matchInfo)


    return(
        <>
            <UserFormValorant/>
            <Agents/>
        </>
    )
}