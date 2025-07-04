import { Tabs } from "@mantine/core";
import { jobList } from "../Data/JobsData";
import Card from "./Card";


export default function JobHistory() {
  return (
    <div className="px-8 py-6 bg-[#F9FAFB] min-h-screen">
      <h1 className="text-2xl font-bold text-blue-950 mb-4">Job History</h1>

      <Tabs variant="outline" radius="lg" defaultValue="applied">
        <Tabs.List className="[&_button]:!text-base font-semibold mb-5 [&_button[data-active='true']]:text-blue-950">
          <Tabs.Tab value="applied">Applied</Tabs.Tab>
          <Tabs.Tab value="saved">Saved</Tabs.Tab>
          <Tabs.Tab value="offered">Offered</Tabs.Tab>
          <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="applied">
          <div className="flex flex-wrap gap-5 justify-start">
            {jobList.map((job, index) => (
              <Card key={index} {...job} applied />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="saved">
          <div className="flex flex-wrap gap-5 justify-start">
            {jobList.map((job, index) => (
              <Card key={index} {...job} saved />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="offered">
          <div className="flex flex-wrap gap-5 justify-start">
            {jobList.map((job, index) => (
              <Card key={index} {...job} offered />
            ))}
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="interviewing">
          <div className="flex flex-wrap gap-5 justify-start">
            {jobList.map((job, index) => (
              <Card key={index} {...job} interviewing />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}