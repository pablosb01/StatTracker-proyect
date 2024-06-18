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
  console.log(obj)

  return (
    <div className=" w-full lg:max-w-[1300px] grid grid-cols-3 lg:grid-cols-7 gap-2 rounded-lg ">
      <HonkaiUserCharSplash obj={obj} />
      <BoxHuc
        title={`${obj.name.toUpperCase()}`}
        stl="col-span-1 row-span-4 order-2 lg:col-span-2 lg:row-span-6 lg:order-2">
        <HonkaiUserCharStats obj={obj} />
      </BoxHuc>
      {obj.light_cone && <BoxHuc
        title="LIGHT CONE"
        stl="col-span-1 row-span-2 order-3 lg:col-span-2 lg:row-span-2 lg:order-5">
        <HonkaiUserLightCone obj={obj.light_cone} />
      </BoxHuc>}
      <BoxHuc
        title="SKILLS"
        stl="col-span-1 row-span-2 order-4 lg:col-span-2 lg:row-span-3 lg:order-6">
        <HonkaiUserCharSkillsboxed />
      </BoxHuc>
      <BoxHuc
        title="ARTIFACTS"
        stl="col-span-2 row-span-3 order-5 lg:col-span-2 lg:row-span-6 lg:order-4">
        <HonkaiUserCharArtifacts />
      </BoxHuc>
      <BoxHuc
        title="ORNAMENTS"
        stl="col-span-1 row-span-3 order-6 lg:col-span-2 lg:row-span-5 lg:order-3">
        <HonkaiUserCharOrnaments />
      </BoxHuc>
    </div>
  );
}
