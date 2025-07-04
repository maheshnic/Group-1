import React, { useState } from 'react';
import { Card, Text, Title } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

type FAQProps = {
  question: string;
  answer: string;
};

export default function FAQs({ question, answer }: FAQProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      p="md"
      mb="sm"
      onClick={() => setOpen(!open)}
      classNames={{
        root: 'bg-blue-200 cursor-pointer hover:shadow-md transition-all duration-300',
      }}
    >
      <div className="flex justify-between items-center">
        <Title order={5} className="text-blue-950">{question}</Title>
        {open ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
      </div>

      {open && (
        <Text className="mt-1 text-xs italic text-blue-700">
          {answer}
        </Text>
      )}
    </Card>
  );
}
