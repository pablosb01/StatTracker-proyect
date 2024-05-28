import { GameSelector } from "../../components/gameSelector/GameSelector";
import "./home.css";
/* import Jett from '/src/assets/home-imgs/jett.png'; */
import { Link } from 'react-router-dom';
import  Logo  from '/src/assets/home-imgs/scole-biglogo.png';
import { GameSelector2 } from "../../components/gameSelector/GameSelector2";



function Home() {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Logo} className='w-1/4 pt-8'/>
                    <h1 className='text-white font-sans text-xl pt-4'>Start tracking your stats</h1>
                </div>
                <div className='flex flex-row gap-8 justify-center pt-4'>
                    <Link to='/valorant'>
                        <GameSelector imageSrc='/src/assets/home-imgs/jett.png' gameName='VALORANT'/>
                    </Link>
                    <Link to='/honkai'>
                        <GameSelector imageSrc='/src/assets/home-imgs/march.png' gameName='HONKAI: Star Rail'/>
                    </Link>
                    <GameSelector2 imageSrc='/src/assets/home-imgs/cs2.png' gameName='Counter Strike 2'/>
                    <GameSelector2 imageSrc='/src/assets/home-imgs/xiao.png' gameName='Genshin Impact'/>
                </div>
            </div>
        </>
    );
}

export default Home;