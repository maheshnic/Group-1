import { IconBookmark, IconClockHour3 } from '@tabler/icons-react';
import { Text, Divider } from '@mantine/core';
import { companyLogos } from '../Data/JobsData';
import { Link } from 'react-router-dom';

export default function JobCard(props: any) {
  const logo = companyLogos[props.company] || '/Companies/default.png';

  return (
    <Link
      to="/jobs"
      className="p-4 w-72 flex flex-col gap-3 rounded-xl bg-white border border-blue-700 hover:border-blue-500 shadow-lg hover:shadow-md hover:shadow-blue-950 transition"
    >
      {/* Top: Logo + Title */}
      <div className="flex justify-between items-start">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-blue-100 rounded-md">
            <img
              src={logo}
              alt={`${props.company} logo`}
              className="h-7 w-7 object-contain"
            />
          </div>
          <div>
            <div className="font-semibold text-sm text-blue-950">{props.jobTitle}</div>
            <div className="text-xs text-blue-800">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="cursor-pointer text-gray-400 hover:text-blue-500" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs border-blue-700">
        <div className="py-1 px-2 bg-blue-200 rounded-lg text-blue-800">{props.experience}</div>
        <div className="py-1 px-2 bg-blue-200 rounded-lg text-blue-800">{props.jobType}</div>
        <div className="py-1 px-2 bg-blue-200 rounded-lg text-blue-800">{props.location}</div>
      </div>

      {/* Description */}
      <Text className="!text-xs text-justify text-gray-700" lineClamp={3}>
        {props.description}
      </Text>

      <Divider size="xs" color="blue" />

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <div className="font-semibold text-blue-950">&#8377; {props.package}</div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <IconClockHour3 className="h-4 w-4 text-blue-400" stroke={1.5} />
          {props.posted}
        </div>
      </div>
    </Link>
  );
}
