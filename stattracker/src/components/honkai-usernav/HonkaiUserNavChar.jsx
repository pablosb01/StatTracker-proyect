import { Link } from 'react-router-dom'

export function HonkaiUserNavChar({obj}) {

  const link = 'https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/'


    return (
        <div className="flex justify-between gap-1 w-full lg:w-auto lg:p-1 lg:pr-0 sm:h-[100px] md:h-[115px] transition-all duration-300 ease-in-out"  >
          {/* <div className="bg-orange-300 rounded-xl h-min border hover:border-2 duration-300 ease-in-out"><img src="/assets/honkai/RuanMeiIcon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-orange-300 rounded-xl h-min"><img src="/assets/honkai/AcheronIcon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-violet-500 rounded-xl h-min"><img src="/assets/honkai/Gallagher_Icon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-orange-300 rounded-xl h-min"><img src="/assets/honkai/Imbibitor_Icon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-orange-300 rounded-xl h-min"><img src="/assets/honkai/JiaoqiuIcon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-violet-500 rounded-xl h-min"><img src="/assets/honkai/Luka-Icon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-orange-300 rounded-xl h-min"><img src="/assets/honkai/Sparkle_Icon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
          <div className="bg-orange-300 rounded-xl h-min"><img src="/assets/honkai/Swan_Icon.png" alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div> */}

          {obj.characters.map((char, index) => (
            <Link to={`${index}`}>
              <div className="bg-orange-300 rounded-xl h-min"><img src={link + char.icon} alt="" className="max-h-24 rounded-xl hover:max-h-28 transition-all duration-300 ease-in-out"/></div>
            </Link>
          ))}
        </div>
    );
  }