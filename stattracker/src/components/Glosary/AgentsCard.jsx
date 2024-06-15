import PhoenixArtwork from "/assets/PhoenixArtWork.png";
import Duelist from "/assets/Duelist.png";
import SkillUno from "/assets/PhoenixUno.png";
import SkillDos from "/assets/PhoenixDos.png";
import SkillTres from "/assets/PhoenixTres.png";
import SkillCuatro from "/assets/PhoenixCuatro.png";

export function AgentsCard() {
  
  return (
    <>
      <div className="relative">
        <div className="absolute w-[275px] h-[650px] bg-[#1c1917] rounded-xl overflow-hidden border border-[#1F2326]">
          <img
            src={PhoenixArtwork}
            className="absolute scale-[1.85] top-[190px] left-12"
          />
        </div>
        <span
          className="absolute top-[115px] left-[-140px] text-[5rem] text-[#1c1917] rotate-90 "
          style={{
            WebkitTextStroke: "0.75px #FF4656",
            WebkitTextStrokeColor: "#FF4656",
          }}
        >
          Phoenix
        </span>
        <img
          src={Duelist}
          className="relative left-[260px] top-[60px] border border-white p-1 scale-[2] bg-[#1c1917]"
        />
        <div className="absolute bottom-10">
          <div className="flex flex-row justify-between border border-white">
            <img src={SkillUno} className="w-[53px] h-[72px]"/>
            <img src={SkillDos} />
            <img src={SkillTres} />
            <img src={SkillCuatro} />
          </div>
        </div>
      </div>
    </>
  );
}
