import UserFormHonkai from "../../components/userFormHonkai/UserFormHonkai";
import HonkaiLogo from "/assets/honkaiFullLogo.png";
import HonkaiCharacters from "../../components/HonkaiCharacters/HonkaiCharacters";
import { HonkaiButton } from "../../components/HonkaiButton.jsx/HonkaiButton";

export function HonkaiHome() {
  return (
    <>
      <div className="flex xl:flex-row flex-col md:justify-center md:items-center xl:items-start">
        <div
          className="absolute xl:h-screen opacity-20 w-full top-[250px] xl:top-10 h-40 sm:w-full bg-cover bg-center z-10"
          style={{
            backgroundImage: `url('/assets/honkai-logo.png')`,
            filter: 'grayscale(100%)'
            
          }}
        />
        <div className="max-w-[800px] 2xl:w-1/2 sm:w-3/5  flex flex-col md:pt-20 z-20 gap-5 mt-10 2xl:mt-0 xl:px-20 md:justify-center md:items-center sm:mb-20">
          <img className="md:w-3/4 lg:w-2/3 " src={HonkaiLogo} />
          <UserFormHonkai />
          <HonkaiButton />
        </div>
        <div className="cajaHonkaiDos xl:max-w-[600px] max-h-[800px] flex flex-col lg:w-[600px] sm:w-full z-20 xl:w-1/2 md:w-1/2 gap-16 items-center xl:mx-40 overflow-y:auto">
        <HonkaiCharacters />
        </div>
      </div>
    </>
  );
}