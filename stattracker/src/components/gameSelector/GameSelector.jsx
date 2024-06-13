export function GameSelector({imageSrc, gameName}) {


    return(
        <div className='relative group flex justify-center items-center bg-stone-900 rounded-[2rem]'>
            <img className='w-[27vh] h-[32vh] rounded-[10px] group-hover:scale-[123%] md:group-hover:scale-[116%] lg:group-hover:scale-[123%] transition duration-200 transform ease-in-out' src={imageSrc}/>
            <div className="paralelogramo group-hover:bg-red-400 transition duration-200 ease-in-out">
                <p>{gameName}</p>
            </div>
        </div>
    );
}   