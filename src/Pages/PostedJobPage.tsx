import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";


export default function PostedJobPage() {
  return (
    <div className="min-h-[90vh]mfont-['poppins'] px-4">
        <Divider size="xs"/>
        <div className="flex gap-5">
          <PostedJob/> 
          <PostedJobDesc/> 
        </div>
    </div>
  )
}