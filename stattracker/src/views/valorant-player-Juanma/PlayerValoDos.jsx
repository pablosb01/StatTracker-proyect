const matchData = [{
    name: 'Neon',
    imgSrc: './src/assets/neon.png',
    winLose: 'Derrota',
    roundsResult: '8-13',
    mapIndex: 'Ascent',
    pointsGame: '+ 150 RR',
    kdaCalc: '0.60 KDA',
    kdaDetail: '6/19/5',
    mprCalc: '0.30 MPR',
    drpCalc: '82.50 DPR',
    hsPercentage: '21.7% Cabeza',
    avgPoints: '106 Puntuación media',
    positionGame: '10th',
    mode: 'Competitive',
    dayGame: 'anteayer'
}]

export function PlayerValorantDos() {
    return(
        <div className="caja w-full h-[380px] md:w-full rounded-[7px] overflow-hidden bg-gray-300 mx-62">
            <div className="h-1/6 bg-stone-900 border border-gray-300 text-white px-4 flex items-center text-4xl leading-none rounded-[7px] box-shadow-0_4_4_rgba(0,0,0,0.25)">
                <span>Match History</span>
            </div>
            <div className="h-5/6 overflow-y-auto">
                {matchData.map((match, index) => (
                    <div className="flex h-1/4 md:p-3 p-1 justify-evenly border-b border-stone-800" key={index}>
                        <div className="flex items-center">
                            <img src={match.imgSrc} alt={match.name} className="xl:w-14 xl:h-14 w-12 h-12 rounded-full md:mr-8 mr-2" />
                            <div className="flex flex-col justify-between">
                                <span className="font-bold text-md xl:text-xl">{match.winLose}</span>
                                <span className="text-md text-gray-48">{match.roundsResult}</span>
                                <span className="text-md text-gray-48">{match.mapIndex}</span>
                            </div>
                        </div>
                        <div className="flex flex-row md:gap-8 gap-2 justify-between">
                            <div className='flex flex-col items-center justify-center'>
                                <span className="font-bold text-md md:text-xl">{match.pointsGame}</span>
                                <span className="text-xl md:text-2xl">{match.kdaCalc}</span>
                                <span className="text-xl md:text-2xl">{match.kdaDetail}</span>
                            </div>
                            <div className='flex flex-col items-center justify-center w-fit'>
                                <span className="font-bold md:text-xl text-md">{match.mprCalc}</span>
                                <span className="md:text-2xl text-xl">{match.drpCalc}</span>
                            </div>
                            <div className='flex flex-col items-center justify-center w-fit'>
                                <span className="font-bold md:text-xl text-md">{match.hsPercentage}</span>
                                <span className="md:text-2xl text-xl">{match.avgPoints}</span>
                            </div>
                            <div className='flex flex-col items-center justify-center w-fit'>
                                <div className="flex flex-col items-center">
                                    <span className="font-bold md:text-xl text-md">{match.positionGame}</span>
                                    <span className="text-md text-gray-48">{match.mode}</span>
                                </div>
                                <span className="md:text-2xl text-xl justify-end">{match.dayGame}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}