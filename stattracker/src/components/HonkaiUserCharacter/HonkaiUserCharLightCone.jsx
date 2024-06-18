import hsrlink from "../../objects/hsrlink.js";

export default function HonkaiUserCharLightCone({ obj }) {
  const { link } = hsrlink;

  return (
    <div className="flex justify-end overflow-visible">
      <div className="relative md:right-[7%] lg:right-[10%] xl:right-[20%]">
        <img src={`${link}${obj.icon}`} alt="" className=" object-center scale-125 hover:scale-150 transition-all duration-300 ease-in-out" />
      </div>
      <div className="grid grid-cols-2 gap-0.5 p-0.5">
        <div className="flex flex-row justify-center items-center  text-white font-bold bg-gray-300/10 rounded-xl">
          <img
            src={`${link}${obj.attributes[0].icon}`}
            alt=""
            className="max-h-6"
          />
        </div>
        <div className="flex justify-center items-center text-white px-2 bg-gray-300/10 rounded-2xl">
          <p>{obj.attributes[0].value.toFixed(2)}</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold bg-gray-300/5 rounded-2xl">
          <img
            src={`${link}${obj.attributes[1].icon}`}
            alt=""
            className="max-h-6"
          />
        </div>
        <div className="flex justify-center items-center text-white px-2 bg-gray-300/5 rounded-2xl">
          <p>{obj.attributes[1].value.toFixed(2)}</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold bg-gray-300/10 rounded-2xl">
          <img
            src={`${link}${obj.attributes[2].icon}`}
            alt=""
            className="max-h-6"
          />
        </div>
        <div className="flex justify-center items-center text-white px-2 bg-gray-300/10 rounded-2xl">
          <p>{obj.attributes[2].value.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
