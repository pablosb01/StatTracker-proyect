import './GameSelector.css'

export function GameSelector({imageSrc}) {

    return(
        <div className='game-card'>
            <img src={imageSrc}/>
        </div>
    )
}