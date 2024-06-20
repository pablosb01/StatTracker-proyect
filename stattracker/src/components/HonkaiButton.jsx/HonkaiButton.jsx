export function HonkaiButton() {

    function handleDownload () {
        window.open('https://hsr.hoyoverse.com/ua2?utm_source=EU_google_EU_search_UA2_brand&hoyotrace_channel=ga_channel&gad_source=1&gclid=Cj0KCQjw4MSzBhC8ARIsAPFOuyVbkaS0eKFKew8omAF-eEvlvtzql1_KXbO8ZPFbM6hoqotXSxW_sA0aAmRMEALw_wcB', '_blank');
    }

    return(
        <div className="flex justify-center 2xl:mt-10">
            <button onClick={handleDownload} className='bg-red-700 hover:bg-red-500 w-[220px] md:w-[248px] h-14 flex rounded text-white justify-center items-center  hover:text-black transition-colors duration-500 ease-in-out'>
                <p className='font-sans bold '>Download</p>
            </button>
        </div>
    )
}