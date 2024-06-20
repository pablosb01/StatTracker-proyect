import hsrlink from "../../objects/hsrlink.js";

export default function HonkaiUserCharLightCone({ obj }) {
  const { link } = hsrlink;

  return (
    <div className="flex justify-end overflow-visible">
      <div className="relative sm:right-[2%] md:right-[3%]  lg:right-[4%] xl:right-[3%]">
        <img src={`${link}${obj.icon}`} alt="" className=" object-center scale-125 hover:scale-150 transition-all duration-300 ease-in-out" />
      </div>
      <div className="grid grid-cols-3 gap-0.5 p-0.5 sm:min-w-[40%] md:min-w-[50%] lg:min-w-[60%] text-center transition-all ease-in-out duration-500">
        <div className="flex  flex-row justify-center items-center  text-white font-bold bg-[#524e4d]/50 rounded-[2rem]">
          <img
            src={`${link}${obj.attributes[0].icon}`}
            alt=""
            className=" max-h-8 sm:max-h-9 md:max-h-10"
          />
        </div>
        <div className="flex col-span-2 justify-center items-center text-white px-2 bg-[#524e4d]/50 rounded-[2rem]">
          <p>{obj.attributes[0].value.toFixed(2)}</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold bg-[#3d3938]/50 rounded-[2rem]">
          <img
            src={`${link}${obj.attributes[1].icon}`}
            alt=""
            className="max-h-8 sm:max-h-9 md:max-h-10"
          />
        </div>
        <div className="flex col-span-2 justify-center items-center text-white px-2 bg-[#3d3938]/50 rounded-[2rem]">
          <p>{obj.attributes[1].value.toFixed(2)}</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold bg-[#524e4d]/50 rounded-[2rem]">
          <img
            src={`${link}${obj.attributes[2].icon}`}
            alt=""
            className="max-h-8 sm:max-h-9 md:max-h-10"
          />
        </div>
        <div className="flex col-span-2 justify-center items-center text-white px-2 bg-[#524e4d]/50 rounded-[2rem]">
          <p>{obj.attributes[2].value.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
