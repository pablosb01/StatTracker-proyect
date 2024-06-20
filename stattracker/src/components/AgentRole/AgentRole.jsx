export function AgentRole ({currentAgent}) {
    return (
        <>
            <span className='flex flex-col justify-between items-center gap-2 border border-red-600 border-2 p-4 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]'>
                <h2 className='text-white text-xl'>Role:</h2>
                <span className='flex flex-row gap gap-4'>
                    <img className='h-10'src={currentAgent.role.displayIcon}/>
                    <h1 className='text-gray-400 text-3xl'>{currentAgent.role.displayName}</h1>
                </span>
            </span>
        </>
    ) 
}