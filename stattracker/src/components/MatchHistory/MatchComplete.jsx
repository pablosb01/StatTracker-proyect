import { MatchResult } from "./MatchResult";
import { MatchStats } from "./MatchStats";

export function MatchComplete() {
  return (
    
    <div className="p-0.5 gap-1 flex justify-between text-white border-b-2 border-black">
        <MatchResult/>
        <MatchStats/>
    </div>

  )
}