import { AgentsCard } from "../../components/Glosary/AgentsCard";
import AgentsSpam from "../../components/Glosary/AgentsSpam";
import InputFilter from "../../components/Glosary/InputFilter";
import InputSearch from "../../components/Glosary/InputSearch";

export function HonkaiHome() {
  return (
    <div className="">
        <div className="flex flex-row gap-10 m-10 mb-[50px]">
            <InputSearch />
            <InputFilter />
        </div>
        <div className="flex flex-row">
            <AgentsSpam />
            <AgentsCard />
        </div>
    </div>
  );
}

