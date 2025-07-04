import React, { useState } from 'react';
import { Divider, RangeSlider } from '@mantine/core';
import Multiinput from './Multiinput';
import { dropdownData } from '../Data/JobsData';

export default function SearchBar() {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex px-5 py-8 items-start gap-4 bg-white rounded-xl shadow border border-blue-250">
      {dropdownData.map((item, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5">
            <Multiinput {...item} />
          </div>
          {index < dropdownData.length - 1 && (
            <Divider mr="xs" size="xs" orientation="vertical" color="blue.2" />
          )}
        </React.Fragment>
      ))}

      {/* Salary Range Filter */}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between mb-2 text-blue-950 font-medium">
          <div>Salary</div>
          <div className="text-blue-700 font-semibold">
            ₹{value[0]} LPA - ₹{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          size="xs"
          color="blue"
          value={value}
          onChange={setValue}
          thumbSize={14}
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
