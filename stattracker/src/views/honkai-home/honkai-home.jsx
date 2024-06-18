import UserFormHonkai from "../../components/userFormHonkai/UserFormHonkai";
import HonkaiLogo from "/assets/honkai-logo.png";
import HonkaiCharacters from "../../components/HonkaiCharacters/HonkaiCharacters";
import { HonkaiButton } from "../../components/HonkaiButton.jsx/HonkaiButton";

export function HonkaiHome() {
  return (
    <>
      <div className="flex 2xl:flex-row flex-col md:justify-center md:items-center">
        <div
          className="absolute top-0 left-0 w-full h-screen bg-cover bg-center z-10"
          style={{
            backgroundImage: `url('/assets/HonkaiBg.png')`,
            filter: 'grayscale(100%)'
            
          }}
        />
        <div className="2xl:relative max-w-[800px] 2xl:w-1/2  flex flex-col z-20 gap-5 mt-10 xl:px-20 md:justify-center md:items-center">
          <img className="md:w-3/4 lg:w-2/3 " src={HonkaiLogo} />
          <UserFormHonkai />
          <HonkaiButton />
        </div>
        <div className="xl:max-w-[600px] max-h-[800px] flex flex-col lg:w-[700px] w-full z-20 xl:w-1/2 md:w-1/2 gap-16 items-center 2xl:mx-40 overflow-y: auto md:justify-center md:align-middle">
        <HonkaiCharacters />
        </div>
      </div>
    </>
  );
}