import UserFormHonkai from "../../components/userFormHonkai/UserFormHonkai";
import HonkaiLogo from "/assets/honkai-logo.png";
import HonkaiCharacters from "../../components/HonkaiCharacters/HonkaiCharacters";

export function HonkaiHome() {
  return (
    <>
      <div className="flex flex-row">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center  z-10"
          style={{
            backgroundImage: `url('/assets/HonkaiBg.png')`,
            filter: 'grayscale(100%)'
            
          }}
        />
        <div className="relative max-w-[800px] xl:w-1/2 md:w-2/3 flex flex-col z-20 gap-10 mt-10 mr-40 xl:px-20">
          <img className="w-1/2" src={HonkaiLogo} />
          <UserFormHonkai />
          {/* <CurrentBanners /> */}
        </div>
        <div className="xl:max-w-[600px] max-h-[800px] flex flex-col w-full z-20 xl:w-1/2 md:w-1/2 gap-16 items-center xl:px-20 overflow-y: auto">
        <HonkaiCharacters />
        </div>
      </div>
    </>
  );
}