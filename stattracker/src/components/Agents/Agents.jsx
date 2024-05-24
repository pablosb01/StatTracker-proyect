import React from 'react';
import './Agents.css';

const agentsData = [
  { name: 'Clove', role: 'Controller', winRate: '52.3%', pickRate: '9.7%', imgSrc: './src/assets/clove.png'},
  { name: 'Reyna', role: 'Duelist', winRate: '50.3%', pickRate: '10.8%', imgSrc: './src/assets/reyna.png'},
  { name: 'Phoenix', role: 'Duelist', winRate: '50.0%', pickRate: '3.2%', imgSrc: './src/assets/phoenix.png'},
  { name: 'Gekko', role: 'Initiator', winRate: '49.9%', pickRate: '5.9%', imgSrc: './src/assets/gekko.png'},
  { name: 'Sage', role: 'Sentinel', winRate: '49.9%', pickRate: '6.6%', imgSrc: './src/assets/sage.png'},
  { name: 'Cypher', role: 'Sentinel', winRate: '49.7%', pickRate: '7.8%', imgSrc: './src/assets/cypher.png'},
  { name: 'Killjoy', role: 'Sentinel', winRate: '49.7%', pickRate: '3.8%', imgSrc: './src/assets/killjoy.png'},
  { name: 'Jett', role: 'Duelist', winRate: '49.6%', pickRate: '9.3%', imgSrc: './src/assets/jett.png'},
  { name: 'Deadlock', role: 'Sentinel', winRate: '49.6%', pickRate: '1.2%', imgSrc: './src/assets/deadlock.png'},
  { name: 'Sova', role: 'Initiator', winRate: '49.6%', pickRate: '5.1%', imgSrc: './src/assets/sova.png'},
  { name: 'Raze', role: 'Duelist', winRate: '49.3%', pickRate: '6.7%', imgSrc: './src/assets/raze.png'},
  { name: 'Chamber', role: 'Sentinel', winRate: '49.1%', pickRate: '4.0%', imgSrc: './src/assets/chamber.png'},
  { name: 'Fade', role: 'Initiator', winRate: '49.0%', pickRate: '1.8%', imgSrc: './src/assets/fade.png'},
  { name: 'Skye', role: 'Initiator', winRate: '48.7%', pickRate: '3.2%', imgSrc: './src/assets/skye.png'},
  { name: 'Viper', role: 'Controller', winRate: '48.6%', pickRate: '2.8%', imgSrc: './src/assets/viper.png'},
  { name: 'Breach', role: 'Initiator', winRate: '48.3%', pickRate: '2.0%', imgSrc: './src/assets/breach.png'},
  { name: 'Brimstone', role: 'Controller', winRate: '47.6%', pickRate: '2.1%', imgSrc: './src/assets/brimstone.png'},
  { name: 'Neon', role: 'Duelist', winRate: '47.6%', pickRate: '1.6%', imgSrc: './src/assets/neon.png'},
  { name: 'Yoru', role: 'Duelist', winRate: '46.9%', pickRate: '2.1%', imgSrc: './src/assets/yoru.png'},
  { name: 'Iso', role: 'Duelist', winRate: '46.1%', pickRate: '1.0%', imgSrc: './src/assets/iso.png'},
  { name: 'Astra', role: 'Controller', winRate: '46.0%', pickRate: '0.4%', imgSrc: './src/assets/astra.png'},
  { name: 'Omen', role: 'Controller', winRate: '46.0%', pickRate: '5.4%', imgSrc: './src/assets/omen.png'},
  { name: 'Kayo', role: 'Initiator', winRate: '45.6%', pickRate: '2.6%', imgSrc: './src/assets/kayo.png'},
  { name: 'Harbor', role: 'Controller', winRate: '45.0%', pickRate: '0.7%', imgSrc: './src/assets/harbor.png'},
];

export function Agents() {
  return (
    <div className="agents-card">
      <div className="agents-header">
        <span>AGENTS</span>
      </div>
      <div className="agents-list">
        {agentsData.map((agent, index) => (
          <div className="agent-item" key={index}>
            <div className="agent-info">
              <img src={agent.imgSrc} alt={agent.name} className="agent-image" />
              <div className="agent-details">
                <span className="agent-name">{agent.name}</span>
                <span className="agent-role">{agent.role}</span>
              </div>
            </div>
            <div className="agent-stats">
                <div>
              <span className="agent-winrate">Win Rate:</span>
              <span className="agent-winrate1">{agent.winRate}</span>
              </div>
              <div>
              <span className="agent-pickrate">Pick Rate:</span>
              <span className="agent-pickrate1">{agent.pickRate}</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}