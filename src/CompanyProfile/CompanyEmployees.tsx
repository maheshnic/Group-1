import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

export default function CompanyEmployees() {
  return (
    <div className="flex mt-10 flex-wrap gap-10">
           {
               talents.map((talent,index)=><TalentCard key={index}{...talent}/>)
               
           }
         </div>
  )
}