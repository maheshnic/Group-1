import { IconBookmark, IconCalendarMonth, IconClockHour3 } from '@tabler/icons-react';
import { Text, Divider, Button } from '@mantine/core';
import { companyLogos } from '../Data/JobsData';
import { Link } from 'react-router-dom';

export default function Card(props: any) {
  const logo = companyLogos[props.company] || '/companies/default.png';

  const statusLabel = props.applied
    ? 'Applied'
    : props.interviewing
    ? 'Interviewing'
    : 'Posted';

  return (
    <Link
      to="/jobs"
      className="p-4 w-72 flex flex-col gap-3 rounded-xl bg-white shadow hover:shadow-md transition"
    >
      {/* Top Section */}
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
            <div className="font-semibold text-sm">{props.jobTitle}</div>
            <div className="text-xs text-blue-800">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark
          className={`cursor-pointer ${
            props.saved ? 'text-blue-300' : 'text-gray-500'
          } hover:text-blue-500`}
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs">
        <div className="py-1 px-2 bg-blue-50 rounded-lg text-blue-800">
          {props.experience}
        </div>
        <div className="py-1 px-2 bg-blue-50 rounded-lg text-blue-800">
          {props.jobType}
        </div>
        <div className="py-1 px-2 bg-blue-50 rounded-lg text-blue-800">
          {props.location}
        </div>
      </div>

      {/* Description */}
      <Text className="!text-xs text-justify text-gray-700" lineClamp={3}>
        {props.description}
      </Text>

      <Divider size="xs" />

      {/* Footer Info */}
      <div className="flex justify-between items-center text-sm">
        <div className="font-semibold text-gray-800">
          &#8377; {props.package}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <IconClockHour3 className="h-4 w-4" stroke={1.5} />
          {statusLabel} • {props.postedDaysAgo} days ago
        </div>
      </div>

      {/* Action Buttons */}
      {(props.offered || props.interviewing) && <Divider size="xs" />}

      {props.offered && (
        <div className="flex gap-2">
          <Button color="blue.2" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="blue.2" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}

      {props.interviewing && (
        <div className="flex gap-1 text-sm items-center mt-1 text-blue-900">
          <IconCalendarMonth className="w-5 h-5" stroke={1.5} />
          Sun, 25 August &bull; <span>10:00 AM</span>
        </div>
      )}
    </Link>
  );
}