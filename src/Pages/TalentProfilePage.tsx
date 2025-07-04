import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import RecommendTalent from "../TalentProfile/RecommendTalent";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";



const TalentProfilePage=()=>{
  return (
    <div className="min-h-[90vh] font-['poppins'] p-4">
       
        <Link className="my-4 inline-block" to="/find-talent"> 
              <Button leftSection={<IconArrowLeft size={20}/>}variant="light" fullWidth>Back</Button></Link>
              <div className="flex gap-5">
                <Profile {... profile}/>
                <RecommendTalent/>
              </div>
    </div>
  )
}
export default TalentProfilePage;