import { HonkaiUserNavChar } from "./HonkaiUserNavChar";

export function HonkaiUserNav() {
  return (
    <nav className="w-screen  lg:min-h-32 flex flex-col lg:flex-row justify-between p-1">
      <div className="h-full flex flex-col items-center shrink-0">
        <img src="/assets/honkai/honkaiFullLogo.png" alt="" className="h-3/4 max-h-20"/>
        <p className="text-white">Dadasepe UID: 78397492</p>
      </div>
      <HonkaiUserNavChar/>
    </nav>
  );
}