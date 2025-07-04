import React, { useState } from 'react';
import { Divider, Input, RangeSlider } from '@mantine/core';
import Multiinput from '../FindJobs/Multiinput';
import {searchFields} from "../Data/TalentData";
import { IconUserCircle } from '@tabler/icons-react';

export default function SearchBar() {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-start gap-4">
        <div className='flex items-center'>
            <div className='text-blue-950 rounded-full p-1 mr-2'><IconUserCircle size={20}/></div>
            <Input className="[&_input]"variant="unstyled" placeholder="Talent Name"/>
        </div>
      {searchFields.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <Multiinput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>
      ))}

      {/* Salary Range Filter */}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between mb-2">
          <div>Salary</div>
          <div>
            ₹{value[0]} LPA - ₹{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          value={value}
          onChange={setValue}
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }}
        />
      </div>
    </div>
  );
}