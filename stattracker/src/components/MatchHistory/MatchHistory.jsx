import { MatchComplete } from "./MatchComplete";

export function MatchHistory() {

  
  return (
    <div className="mx-auto rounded-lg overflow-hidden drop-shadow-md bg-gray-700">
        <div className="flex items-center h-[54px] rounded-lg drop-shadow-md bg-stone-900 border border-gray-300">
            <p className="text-left items-center p-1.5 pl-3 text-3xl text-white font-sans">Match History</p>
        </div>
        <div>
            <MatchComplete/>
            <MatchComplete/>
            <MatchComplete/>
        </div>
    </div>
  )
}
