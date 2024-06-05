const matchData = [
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
    {name: 'Neon', imgSrc: './src/assets/neon.png', winLose: 'Derrota', roundsResult: '8-13', mapIndex: 'Ascent', pointsGame: '+ 150 RR', kdaCalc: '0.60 KDA', kdaDetail: '6/19/5', mprCalc: '0.30 MPR', drpCalc: '82.50 DPR', hsPercentage: '21.7% Cabeza', avgPoints: '106 Puntuación media', positionGame: '10th', mode: 'Competitive', dayGame: 'anteayer'},
]

export function PlayerValoCuatro() {
  return (
    <div className="bg-stone-900 rounded-md caja w-full h-auto md:w-full rounded-[7px] overflow-hidden mx-62">
        <div className="h-1/6 bg-stone-900 border border-gray-300 text-white px-4 flex items-center text-4xl leading-none rounded-[7px] box-shadow-0_4_4_rgba(0,0,0,0.25)">
            <span>Match History</span>
        </div>
        <div className="h-5/6 overflow-y-auto">
        {matchData.map((match, index) => (
      <div className="flex justify-evenly items-center pb-3 h-1/4 md:p-3 p-1 border-b border-stone-800" key={index}>
        <div className="flex items-center">
          <img src={match.imgSrc} alt={match.name} className="w-12 h-12"/>
          <div className="ml-4">
            <p className="text-red-500 font-bold text-sm pb-3 pt-4">{match.winLose}</p>
            <p className="text-white text-sm">{match.roundsResult}</p>
            <p className="text-gray-400 text-xs">{match.mapIndex}</p>
          </div> 
        </div>
        <div className="ml-4">
          <p className="text-red-500 font-bold text-xs pb-3 pt-3.5">{match.pointsGame}</p>
          <p className="text-custom-orange font-bold text-sm">{match.kdaCalc}</p>
          <p className="text-gray-400 text-xs">{match.kdaDetail}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-bold text-sm pt-10">{match.mprCalc}</p>
          <p className="text-gray-400 text-xs">{match.drpCalc}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-bold text-sm pt-10">{match.hsPercentage}</p>
          <p className="text-gray-400 text-xs">{match.avgPoints}</p>
        </div>
        <div className="flex flex-col">
            <p className="text-gray-400 font-bold text-xs pb-3 pt-3.5">{match.positionGame} · {match.mode}</p>
            <p className="text-stone-900 font-bold text-sm">.</p>
            <p className="text-gray-400 text-xs">{match.dayGame}</p>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
}