
import { GameSelector } from "../../components/gameSelector/GameSelector";
import "./home.css";
import valoHome from "/src/assets/valorant-home.png"
import honkHome from "/src/assets/honkai-home.jpg"
import exampleImage from "/src/assets/example.png"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home-background">
            <h1>Start tracking your stats</h1>
                <div className='card-container'>
                    
                    <Link to='valo'>
                        <GameSelector imageSrc={valoHome}/>
                    </Link>

                    <GameSelector imageSrc={honkHome}/>
                    <GameSelector imageSrc={exampleImage}/>
                    <GameSelector imageSrc={exampleImage}/>
                </div>
                
            </div>
        </>
    );
}

export default Home;
