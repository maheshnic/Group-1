import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react';
import { Text, Divider, Avatar, Button, Modal } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { DateInput, TimeInput } from '@mantine/dates';


export default function TalentCard(props: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="p-4 w-96 flex flex-col gap-3 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      
      {/* Top Section: Avatar + Info */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-blue-100 rounded-full">
          <Avatar
  size="lg"
  src={props.image ? `/Companies/${props.image}.png` : '/Companies/default.png'}
  alt={`${props.name} avatar`}
/>

          </div>
          <div>
            <div className="font-semibold text-lg text-gray-800">{props.name}</div>
            <div className="text-sm text-blue-700">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="cursor-pointer text-gray-400 hover:text-blue-500 transition" stroke={1.5} />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 text-xs">
        {props.topSkills?.map((skill: any, index: number) => (
          <div key={index} className="py-1 px-2 bg-blue-50 rounded-lg text-blue-700 border border-blue-200">
            {skill}
          </div>
        ))}
      </div>

      {/* About */}
      <Text className="!text-xs text-justify text-gray-700" lineClamp={3}>
        {props.about}
      </Text>

      <Divider size="xs" />

      {/* Info Section */}
      {props.invited ? (
        <div className="flex gap-2 items-center text-sm text-blue-800 font-medium">
          <IconCalendarMonth className="w-4 h-4" stroke={1.5} />
          Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="font-semibold text-gray-800">{props.expectedCTC}</div>
          <div className="flex items-center gap-1 text-xs">
            <IconMapPin className="h-4 w-4" stroke={1.5} />
            {props.location}
          </div>
        </div>
      )}

      <Divider size="xs" />

      {/* Footer Buttons */}
      <div className="flex [&>]:w-1/2 [&>]:p-1 gap-2">
        {!props.invited && (
          <>
            <Link to="/talent-profile" className="w-full">
              <Button variant="outline" fullWidth color="blue">
                Profile
              </Button>
            </Link>
            {props.posted ? (
              <Button
                onClick={open}
                rightSection={<IconCalendarMonth className="w-5 h-5" />}
                variant="light"
                fullWidth
                color="blue"
              >
                Schedule
              </Button>
            ) : (
              <Button variant="light" fullWidth color="blue">
                Message
              </Button>
            )}
          </>
        )}

        {props.invited && (
          <>
            <Button variant="outline" fullWidth color="green">
              Accept
            </Button>
            <Button variant="light" fullWidth color="red">
              Reject
            </Button>
          </>
        )}
      </div>

      {/* Modal */}
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4 mt-2">
          <DateInput
            value={value}
            minDate={new Date()}
            onChange={setValue}
            label="Date"
            placeholder="Pick date"
            className="w-full"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
            className="w-full"
          />
          <Button variant="light" fullWidth color="blue">
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
}