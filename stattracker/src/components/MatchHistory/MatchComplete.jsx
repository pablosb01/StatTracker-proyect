import { MatchStats } from "./MatchStats";

export function MatchComplete({puuid}) {
  return (
    <MatchStats playerid={puuid}/>
  )
}
