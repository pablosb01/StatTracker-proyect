import { HonkaiUserNav } from "../../components/honkai-usernav/HonkaiUserNav";
import { HonkaiUserCharacter } from "../../components/HonkaiUserCharacter/honkaiUserCharacter.jsx";


export function HonkaiUser() {
    return(
        <div className="flex flex-col items-center h-full">
            <HonkaiUserNav/>
            <HonkaiUserCharacter/>
        </div>
    )
}