import HonkaiUserCharArtifacts from "./HonkaiUserCharArtifacts";
import HonkaiUserLightCone from "./HonkaiUserCharLightCone";

import HonkaiUserCharStats from "./HonkaiUserCharStats";
import HonkaiUserCharOrnaments from "./HonkaiUserCharOrnaments"
import BoxHuc from "./BoxHuc";
import HonkaiUserCharSkillsboxed from "./HonkaiUserCharSkillsboxed";
import HonkaiUserCharSplash from "./HonkaiUserCharSplash";

export function HonkaiUserCharacter() {
  return (
    <div className=" w-full lg:max-w-[1300px] grid grid-cols-3 lg:grid-cols-7 gap-2 rounded-lg">
      <HonkaiUserCharSplash/>
      <BoxHuc title="RUAN MEI" stl="col-span-1 row-span-4 order-2 lg:col-span-2 lg:row-span-6 lg:order-2">
        <HonkaiUserCharStats/>
      </BoxHuc>
      <BoxHuc title="LIGHT CONE" stl="col-span-1 row-span-2 order-3 lg:col-span-2 lg:row-span-2 lg:order-5">
        <HonkaiUserLightCone/>
      </BoxHuc>
      <BoxHuc title="SKILLS" stl="col-span-1 row-span-2 order-4 lg:col-span-2 lg:row-span-3 lg:order-6">
        <HonkaiUserCharSkillsboxed/>
      </BoxHuc>
      <BoxHuc title="ARTIFACTS" stl="col-span-2 row-span-3 order-5 lg:col-span-2 lg:row-span-6 lg:order-4">
        <HonkaiUserCharArtifacts/>
      </BoxHuc>
      <BoxHuc title="ORNAMENTS" stl="col-span-1 row-span-3 order-6 lg:col-span-2 lg:row-span-5 lg:order-3">
        <HonkaiUserCharOrnaments/>
      </BoxHuc>
    </div>
  );
}