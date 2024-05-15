import './GameSelector.css'

export function GameSelector({imageSrc}) {

    return(
        <div className='gameCard'>
            <img src={imageSrc}/>
        </div>
    )
}