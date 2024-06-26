import { GameSelector } from "../../components/gameSelector/GameSelector";
/* import Jett from '/public/assets/home-imgs/jett.png'; */
import { Link } from 'react-router-dom';
import  Logo  from '/assets/home-imgs/scole-biglogo.png';
import { GameSelector2 } from "../../components/gameSelector/GameSelector2";
import Jett from '/assets/home-imgs/jett.png'
import March from '/assets/home-imgs/march.png';
import cs2 from '/assets/home-imgs/cs2.png';
import honkai from '/assets/home-imgs/xiao.png';


function Home() {
    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <Link className='flex justify-center items-center'to='/riot'>
                        <img src={Logo} className='w-1/2 pt-8 md:w-1/3 lg:w-1/3 xl:w-1/4'/>
                    </Link>
                    <h1 className='text-white font-sans text-xl pt-4'>Start tracking your stats</h1>
                </div>
                <div className='flex flex-col flex-wrap gap-20 justify-center pt-4 md:flex-wrap md:gap-16 lg:gap-12 md:flex-2 md:flex-row'>
                    <Link to='/valorant'>
                        <GameSelector imageSrc={Jett} gameName='VALORANT'/>
                    </Link>
                    
                    <Link to='/honkai'>
                        <GameSelector imageSrc={March} gameName='HONKAI: Star Rail'/>
                    </Link>
                    
                    <GameSelector2 imageSrc={cs2} gameName='Counter Strike 2'/>
                    <GameSelector2 imageSrc={honkai} gameName='Genshin Impact'/>
                </div>
            </div>
        </>
    );
}

export default Home;