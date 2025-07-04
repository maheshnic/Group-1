import { useState } from 'react';
import { Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option
      className="text-xs hover:bg-blue-50 text-blue-950"
      value={item}
      key={item}
    >
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      width={200}
      position="bottom-start"
      withArrow
      onOptionSubmit={(val) => {
        setSelectedItem(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <div
          onClick={() => combobox.toggleDropdown()}
          className="cursor-pointer flex gap-2 px-3 py-1.5 text-sm rounded-xl items-center border border-blue-300 hover:shadow-md hover:border-blue-500 bg-white text-blue-950 transition"
        >
          {selectedItem}
          <IconAdjustments className="h-5 w-5 text-blue-700 group-hover:text-blue-800 transition" />
        </div>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Sort;
