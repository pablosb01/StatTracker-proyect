export interface Match {
    matchInfo: MatchInfo
    players: Player[]
    roundResults: RoundResult[]
    teams: Team[]
}

export interface MatchInfo {
    matchId: string
    mapId: string
    gameLengthMillis: number
    gameStartMillis: number
    provisioningFlowId: string
    isCompleted: boolean
    customGameName: string
    queueId: string
    gameMode: string
    isRanked: boolean
    seasonId: string
}

export interface Player {
    puuid: string
    teamId: string
    partyId: string
    characterId: string
    stats: Stats
    competitiveTier: string
    playerCard: string
    playerTitle: string
}

export interface Stats {
    score: number
    roundsPlayed: number
    kills: number
    deaths: number
    assists: number
    playtimeMillis: number
}

export interface RoundResult {
    roundNum: number
    roundResult: string
    roundCeremony: string
    winningTeam: string
    plantRoundTime: number
    plantLocation: PlantLocation
    plantSite: string
    defuseRoundTime: number
    defuseLocation: DefuseLocation
    playerStats: PlayerStat[]
    roundResultCode: string
    bombPlanter?: string
    plantPlayerLocations?: PlantPlayerLocation[]
    bombDefuser?: string
    defusePlayerLocations?: DefusePlayerLocation[]
}

export interface PlayerStat {
    puuid: string
    kills: Kill[]
    damage: Damage[]
    score: number
    economy: Economy
    ability: Ability
}

export interface Kill {
    timeSinceGameStartMillis: number
    timeSinceRoundStartMillis: number
    killer: string
    victim: string
    victimLocation: VictimLocation
    assistants: string[]
    playerLocations: PlayerLocation[]
    finishingDamage: FinishingDamage
}

export interface Coordinate {
    x: number
    y: number
}

export interface PlantLocation extends Coordinate {}

export interface DefuseLocation extends Coordinate {}

export interface VictimLocation extends Coordinate {}

export interface Location extends Coordinate {}

export interface Location2 extends Coordinate {}

export interface Location3 extends Coordinate {}

export interface PlayerLocation {
    puuid: string
    viewRadians: number
    location: Location
}

export interface FinishingDamage {
    damageType: string
    damageItem: string
    isSecondaryFireMode: boolean
}

export interface Damage {
    receiver: string
    damage: number
    legshots: number
    bodyshots: number
    headshots: number
}

export interface Economy {
    loadoutValue: number
    weapon: string
    armor: string
    remaining: number
    spent: number
}

export interface Ability { }

export interface PlantPlayerLocation {
    puuid: string
    viewRadians: number
    location: Location2
}

export interface DefusePlayerLocation {
    puuid: string
    viewRadians: number
    location: Location3
}

export interface Team {
    teamId: string
    won: boolean
    roundsPlayed: number
    roundsWon: number
    numPoints: number
}
