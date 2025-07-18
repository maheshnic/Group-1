import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";



const ApplyJobPage=()=>{
  return (
    <div className="min-h-[90vh] font-['poppins'] p-4">
       <Link className="my-4 inline-block" to="/jobs"> 
                    <Button leftSection={<IconArrowLeft size={20}/>}variant="light" fullWidth>Back</Button></Link>
                    <ApplyJobComp/>
    </div>
  )
}
export default ApplyJobPage;