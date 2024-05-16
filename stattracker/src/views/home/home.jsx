
import { GameSelector } from "../../components/gameSelector/GameSelector";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.css";
import valoHome from "/src/assets/valorant-home.png"
import honkHome from "/src/assets/honkai-home.jpg"
import exampleImage from "/src/assets/example.png"

function Home() {
    return (
        <>
            <Sidebar />
            <div className="home-background">
            <h1>Start tracking your stats</h1>
                <div className='card-container'>
                    
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
