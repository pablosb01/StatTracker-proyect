
import { GameSelector } from "../components/gameSelector/GameSelector";
import { Sidebar } from "../components/sidebar/Sidebar";
import "./home.css";
import valoHome from "../components/gameSelector/valorant-home.png"
import honkHome from "../components/gameSelector/honkai-home.jpg"
import exampleImage from "../components/gameSelector/example.png"

function Home() {
    return (
        <>
            <Sidebar />
            <div className="homeBackground">
            <h1>Start tracking your stats</h1>
                <div className='cardContainer'>
                    
                    <GameSelector imageSrc={valoHome}/>
                    <GameSelector imageSrc={honkHome}/>
                    <GameSelector imageSrc={exampleImage}/>
                    <GameSelector imageSrc={exampleImage}/>
                </div>
                
            </div>
        </>
    );
}

export default Home;
