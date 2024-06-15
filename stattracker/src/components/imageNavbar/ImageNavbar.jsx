import { Link } from 'react-router-dom';

export function ImageNavbar(object) {

    
    return (
        <nav className="w-screen flex justify-between bg-stone-900 px-5 sticky top-0 z-50">
            {Object.values(object).map(arr => 
                arr.map((agent, index) => {
                    if (agent.displayName && agent.displayIcon) {
                        return (
                            <Link key={index} to={agent.displayName.toLowerCase().replace("/","")}>
                                <img className='flex hover:scale-[140%] transition duration-200 scale ease-in-out' src={agent.displayIcon} alt={agent.displayName}/>
                            </Link>
                        );
                    }
                })
            )}

            
        </nav>
    );
}
