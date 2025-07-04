import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-[42px] h-[22px]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <span className="absolute inset-0 bg-gray-300 peer-checked:bg-[#2563EB] rounded-full transition-colors" />
      <span className="absolute top-[2px] left-[2px] w-[18px] h-[18px] bg-white rounded-full transition-transform peer-checked:translate-x-[20px]" />
    </label>
  );
};

export default Toggle;