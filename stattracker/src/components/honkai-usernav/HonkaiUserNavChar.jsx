import { Link } from "react-router-dom";

export function HonkaiUserNavChar({ obj }) {
  const link = "https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master/";

console.log(obj)

  return (
    <div className="flex justify-around gap-1 w-full lg:w-auto lg:p-1 lg:pr-0 sm:h-[100px] md:h-[115px] transition-all duration-300 ease-in-out">
      {obj.characters.map((char, index) => (
        <Link to={`${index}`}>
          <div className=" rounded-xl max-h-24 hover:max-h-28 overflow-hidden drop-shadow-[0_0_-1px_rgba(255,255,255,3)] hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out">
            <img
              src={link + char.icon}
              alt=""
              className=" rounded-xl max-h-24 hover:max-h-28 hover:scale-[115%] transition-all duration-300 ease-in-out"
              style={{
                background:
                  char.rarity === 5
                    ? "linear-gradient(#C9A36A 0%, #36211f 75%)"
                    : char.rarity === 4
                    ? "linear-gradient(#9864CD 0%, #25243b 75%)"
                    : "",
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
