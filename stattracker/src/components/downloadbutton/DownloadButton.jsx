export function Download() {

    function handleDownload () {
        window.open('https://playvalorant.com/es-es/download/', '_blank');
    }

    return(
        <>
            <button onClick={handleDownload} className='bg-red-600 w-1/2 h-14 flex rounded justify-center items-center hover:bg-red-400 transition-colors duration-500 ease-in-out'>
                <p className='font-sans bold text-white'>Download</p>
            </button>
        </>
    )
}