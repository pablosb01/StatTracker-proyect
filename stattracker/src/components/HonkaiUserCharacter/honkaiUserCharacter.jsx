import HonkaiUserCharArtifacts from "./HonkaiUserCharArtifacts";
import HonkaiUserLightCone from "./HonkaiUserCharLightCone";
import HonkaiUserCharStats from "./HonkaiUserCharStats";
import HonkaiUserCharOrnaments from "./HonkaiUserCharOrnaments";
import BoxHuc from "./BoxHuc";
import HonkaiUserCharSkillsboxed from "./HonkaiUserCharSkillsboxed";
import HonkaiUserCharSplash from "./HonkaiUserCharSplash";
import { useOutletContext, useParams } from "react-router-dom";

export function HonkaiUserCharacter() {
  const obj = useOutletContext();
  console.log(obj.element.color)

  return (
    <div className="px-[0.1rem] w-full lg:max-w-[1300px] grid grid-cols-3 lg:grid-cols-7 gap-2 rounded-lg transition-all ease-in-out duration-500 ">
      <HonkaiUserCharSplash obj={obj} className=" order-1 lg:row-span-7" />
      <BoxHuc
        color={obj.element.color.replace(/"/g, '')}
        title={`${obj.name.toUpperCase()}`}
        stl="col-span-1 row-span-4 order-2 lg:col-span-2 lg:row-span-4 lg:order-2"
      >
        <HonkaiUserCharStats obj={obj} className="" />
      </BoxHuc>
      {obj.light_cone && (
        <BoxHuc
          color={obj.element.color}
          title="CONO DE LUZ"
          stl="col-span-1 row-span-2 order-3 lg:col-span-2 lg:row-span-2 lg:order-4"
        >
          <HonkaiUserLightCone obj={obj.light_cone} />
        </BoxHuc>
      )}
      <BoxHuc
        color={obj.element.color}
        title="HABILIDADES"
        stl="col-span-1 row-span-2 order-4 lg:col-span-2 lg:row-span-5 lg:order-5"
      >
        <HonkaiUserCharSkillsboxed obj={obj.skills} />
      </BoxHuc>
      <BoxHuc
        color={obj.element.color}
        title="ARTEFACTOS"
        stl="col-span-2 row-span-3 order-5 lg:col-span-2 lg:row-span-6 lg:order-3 h-full"
      >
        <HonkaiUserCharArtifacts obj={obj.relics} />
      </BoxHuc>
      <BoxHuc
        color={obj.element.color}
        title="ORNAMENTOS"
        stl="col-span-1 row-span-3 order-6 lg:col-span-2 lg:row-span-5 lg:order-6"
      >
        <HonkaiUserCharOrnaments obj={obj.relics} />
      </BoxHuc>
    </div>
  );
}
