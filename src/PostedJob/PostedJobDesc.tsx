import { Badge, Tabs } from '@mantine/core';
import JobDesc from '../JobDesc/JobDesc';
import { talents } from '../Data/TalentData';
import TalentCard from '../FindTalent/TalentCard';

export default function PostedJobDesc() {
  return (
    <div className="mt-6 w-11/12 md:w-3/4 mx-auto px-4 md:px-6">
      {/* Job Title and Location */}
      <div className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
        Software Engineer
        <Badge variant="light" color="blue.9" size="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-gray-600 mb-6">New York, United States</div>

      {/* Tabs */}
      <Tabs variant="outline" radius="lg" defaultValue="overview">
        <Tabs.List
          className="[&_button]:!text-base md:!text-lg font-semibold mb-5 
          [&_button[data-active='true']]:text-blue-950 
          [&_button[data-active='true']]:border-blue-950 
          [&_button[data-active='true']]:border-b-2 
          [&_button]:transition-colors duration-300"
        >
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
          <Tabs.Tab value="invited">Invited</Tabs.Tab>
        </Tabs.List>

        {/* Overview Tab */}
        <Tabs.Panel value="overview" className="w-full">
          <JobDesc edit />
        </Tabs.Panel>

        {/* Applicants Tab */}
        <Tabs.Panel value="applicants">
          <div className="flex flex-wrap gap-5 justify-center mt-10">
            {talents.map((talent, index) => (
              <TalentCard key={index} {...talent} posted />
            ))}
          </div>
        </Tabs.Panel>

        {/* Invited Tab */}
        <Tabs.Panel value="invited">
          <div className="flex flex-wrap gap-5 justify-center mt-10">
            {talents.map((talent, index) => (
              <TalentCard key={index} {...talent} invited />
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}