import { Tabs } from "@mantine/core";
import { activeJobs, drafts } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob=()=>{
    return <div className="w-1/6 mt-5">
        <div className="text-2xl font-semibold mb-5">Jobs</div>
        <div>
            <Tabs autoContrast variant="pills" defaultValue="active">
                      <Tabs.List className="[&_button[aria-selected='false']]">
                        <Tabs.Tab value="active">Active[8]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts[3]</Tabs.Tab>
                      </Tabs.List>

                      <Tabs.Panel value="active">
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                activeJobs.map((item,index)=><PostedJobCard key={index} {...item}/>)
                            }
                        </div>
                      </Tabs.Panel>
                        <Tabs.Panel value="draft">
                             <div className="flex flex-col gap-5 mt-5">
                            {
                                drafts.map((item,index)=><PostedJobCard key={index} {...item}/>)
                            }
                        </div>
                        </Tabs.Panel>
                    </Tabs>
        </div>
    </div>
}
export default PostedJob;