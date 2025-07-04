import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from '@tabler/icons-react';

export const dropdownData = [
  {
    title: 'Job Title',
    icon: IconSearch,
    options: [
      'Designer',
      'Developer',
      'Product Manager',
      'Marketing Specialist',
      'Data Analyst',
      'Sales Executive',
      'Content Writer',
      'Customer Support',
    ],
  },
  {
    title: 'Location',
    icon: IconMapPin,
    options: [
      'Delhi',
      'New York',
      'San Francisco',
      'London',
      'Berlin',
      'Tokyo',
      'Sydney',
      'Toronto',
    ],
  },
  {
    title: 'Experience',
    icon: IconBriefcase,
    options: ['Entry Level', 'Intermediate', 'Expert'],
  },
  {
    title: 'Job Type',
    icon: IconRecharging,
    options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'],
  },
];

export const jobList = [
  {
    jobTitle: 'Product Designer',
    company: 'Meta',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      "Join Meta's creative team to design user-centric products that connect billions globally. Collaborate with engineers and researchers to push design boundaries.",
  },
  {
    jobTitle: 'Sr. UX Designer',
    company: 'Netflix',
    applicants: 34,
    experience: 'Expert',
    jobType: 'Full-Time',
    location: 'San Francisco',
    package: '40 LPA',
    postedDaysAgo:12,
    description:
      'Lead UX efforts at Netflix to enhance user engagement and storytelling experience. Work cross-functionally to create intuitive interfaces.',
  },
  {
    jobTitle: 'Product Designer',
    company: 'Microsoft',
    applicants: 58,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'Remote',
    package: '35 LPA',
    postedDaysAgo:12,
    description:
      'Craft innovative and accessible product experiences for millions at Microsoft. Collaborate across design and engineering teams remotely.',
   
  },
  {
    jobTitle: 'Product Designer',
    company: 'Walmart',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      "Design next-gen retail experiences for Walmart's global audience. Work on cross-platform consistency and customer satisfaction.",
    
  },
  {
    jobTitle: 'Backend Developer',
    company: 'Google',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      'Develop scalable backend services powering billions of users. Contribute to Meta’s infrastructure and drive performance improvements.',
   
  },
  {
    jobTitle: 'Frontend Developer',
    company: 'Amazon',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      'Build dynamic, responsive UIs that delight users across Meta’s platforms. You’ll work with cutting-edge technologies and design systems.',
   
  },
  {
    jobTitle: 'iOS Developer',
    company: 'Spotify',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      'Join Meta’s mobile team to deliver high-performance iOS apps. You’ll optimize app speed, performance, and user experience.',
    
  },
  {
    jobTitle: 'Product Designer',
    company: 'Oracle',
    applicants: 25,
    experience: 'Entry Level',
    jobType: 'Full-Time',
    location: 'New York',
    package: '32 LPA',
    postedDaysAgo:12,
    description:
      'Help define the visual language for Meta products. Work on features that impact millions while maintaining design consistency.',
  },
];

export const companyLogos: Record<string, string> = {
  Amazon: "/Companies/Amazon.png",
  Figma: "/Companies/Figma.png",
  Google: "/Companies/Google.png",
  Meta: "/Companies/Meta.png",
   Microsoft: "/Companies/Microsoft.png",
   Netflix: "/Companies/Netflix.png",
  Oracle: "/Companies/Oracle.png",
  Pinterest: "/Companies/Pinterest.png",
  Spotify: "/Companies/Spotify.png",
   Walmart: "/Companies/Walmart.png",
};