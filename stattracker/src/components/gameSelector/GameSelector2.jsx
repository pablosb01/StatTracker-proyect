export function GameSelector2({imageSrc, gameName}) {


    return(
        <div className='relative flex justify-center items-center bg-stone-900 rounded-[2rem]'>
            <img className='w-[27vh] h-[32vh] rounded-[10px] transition duration-200 transform ease-in-out' src={imageSrc}/>
            <div className="paralelogramo group bg-gray-600 hover:bg-white transition duration-200 background ease-in-out">
                <p className='block group-hover:hidden '>{gameName}</p>
                <p className='hidden group-hover:block text-stone-900'> Coming Soon... </p>
            </div>
        </div>
    );
}   