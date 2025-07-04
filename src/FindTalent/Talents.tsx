import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import {talents} from "../Data/TalentData"

export default function Talents() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Talents</h2>
        <Sort />
      </div>

      <div className="flex mt-10 flex-wrap gap-5 justify-between">
        {
            talents.map((talent,index)=><TalentCard key={index}{...talent}/>)
            
        }
      </div>
    </div>
  );
}