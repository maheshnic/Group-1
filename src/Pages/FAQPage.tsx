import React, { useState } from 'react';
import FAQs from '../FAQ/FAQ';
import { Textarea, Button, Title, Text, Container } from '@mantine/core';

const faqData = [
  {
    question: 'How can I apply for a job?',
    answer: 'You can apply by logging in and navigating to the Jobs section, then clicking on "Apply" next to your desired role.'
  },
  {
    question: 'Can I update my resume later?',
    answer: 'Yes, you can update your resume anytime by going to your profile settings.'
  },
  {
    question: 'Will I receive interview notifications?',
    answer: 'Absolutely. We’ll notify you via email and in your dashboard if you’re shortlisted.'
  },
  {
    question: 'Do I need to pay any fee to apply?',
    answer: 'No, applying to jobs through our platform is completely free of cost.'
  },
  {
    question: 'Can I apply for multiple jobs at once?',
    answer: 'Yes, you can apply to as many job postings as you qualify for.'
  },
  {
    question: 'What should I do if I forget my password?',
    answer: 'Click on the "Forgot Password" link on the login page to reset your password via email.'
  },
  {
    question: 'Are internships available on this portal?',
    answer: 'Yes, many companies also post internship opportunities along with full-time jobs.'
  },
  {
    question: 'How do I know if a company has viewed my application?',
    answer: 'Your dashboard will show the status of your application, including whether it’s viewed, shortlisted, or rejected.'
  },
  {
    question: 'Is my data safe on this portal?',
    answer: 'Absolutely. We use secure encryption and follow strict data privacy standards to keep your information safe.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach out through the "Ask Your Query" section below or email us at support@jobportal.com.'
  },
  {
    question: 'Can I get placement assistance?',
    answer: 'Yes! We provide resume reviews, interview tips, and mock interview sessions to help you get placed.'
  },
  {
    question: 'Do companies conduct online or offline interviews?',
    answer: 'It depends on the company. You’ll be informed in advance if the interview is online or requires physical presence.'
  }
];


export default function FAQsPage() {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      alert('Your query has been submitted!');
      setQuery('');
    }
  };

  return (
    <Container size="md" className="mt-10 mb-20">
      <Title order={2} className="text-center text-blue-950 mb-6">Frequently Asked Questions</Title>
      {faqData.map((faq, idx) => (
        <FAQs key={idx} question={faq.question} answer={faq.answer} />
      ))}

      {/* Ask Your Query Section */}
      <div className="mt-12">
        <Title order={3} className="text-blue-950 mb-4">Ask Your Query</Title>
        <Textarea
          placeholder="Write your question here..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          autosize
          minRows={3}
        />
        <Button className="mt-3" onClick={handleSubmit} color="blue">Submit</Button>
      </div>
    </Container>
  );
}