import { NavLink } from 'react-router-dom';

export function ImageNavbar(object) {

    
    return (
        <nav className="w-screen flex sticky justify-between bg-stone-800 px-5 gap-1 top-0 pt-3">
            {Object.values(object).map(arr => 
                arr.map((agent, index) => {
                    if (agent.displayName && agent.displayIcon) {
                        return (
                            <NavLink className={({ isActive }) => 
                                `relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-10 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)] ${isActive ? 'bg-stone-800 bg-gradient-to-b to-green-600 from-red-800border-gray-400 text-red-600 ' : 'hover:bg-stone-800 bg-gradient-to-b to-gray-600 from-red-800 text-white'}`
                            }
                            key={index} to={agent.displayName.toLowerCase().replace("/","")}>
                                <img className='' src={agent.displayIcon} alt={agent.displayName}/>
                            </NavLink>
                        );
                    }
                })
            )}

            
        </nav>
    );
}

//relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-10 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]