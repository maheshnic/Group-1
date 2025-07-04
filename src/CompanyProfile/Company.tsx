import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";


const Company=()=>{
return <div className="w-3/4">
   <div className="relative">
          <img className="rounded-t-xl w-full h-56 object-cover" src="background.jpeg" alt="Profile background" />
          <img
            className="w-36 h-36 rounded-3xl absolute left-6 -bottom-20 border-4  border-white shadow-md object-cover"
            src="/Companies/Google.png"
            alt="r"
          />
        </div>
  
        <div className="px-6 pt-24 pb-4">
          <div className="text-3xl font-bold flex justify-between items-center">
           Google
            <Avatar.Group>
              <Avatar src="Avatar.jpeg"/>
              <Avatar src="Avatar1.jpeg"/>
              <Avatar src="Avatar.jpeg"/>
              <Avatar>+10</Avatar>
            </Avatar.Group>
          </div>
          <div className="text-md flex gap-2 items-center mt-1">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            New York,United States
          </div>
          <Divider my="xl"/>
        </div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-blue-950">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
            <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
            <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
        </Tabs>
  </div>
}
export default Company;