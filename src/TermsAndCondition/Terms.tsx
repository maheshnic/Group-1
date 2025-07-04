// src/Components/Terms.tsx

import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded-2xl px-6 py-12 max-w-4xl my-6 mx-auto text-gray-800 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-950">Terms & Conditions</h1>

      <ol className="space-y-4 list-decimal pl-6">
        <li>
          By accessing this job portal, you agree to abide by the terms outlined herein. These conditions govern the use of the platform, tools, and communication channels provided.
        </li>
        <li>
          Users must complete the registration process by submitting valid and up-to-date information. Duplicate or fraudulent accounts are strictly prohibited.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your login credentials. All activities carried out under your account will be considered your responsibility.
        </li>
        <li>
          Resumes, portfolios, or certifications uploaded must be accurate and verifiable. Misleading documents may result in suspension or legal action.
        </li>
        <li>
          Applicants must not submit the same application multiple times unless otherwise requested by the employer.
        </li>
        <li>
          Employers must specify roles, responsibilities, required skills, and offered compensation clearly in job postings.
        </li>
        <li>
          Discrimination on the basis of gender, caste, religion, disability, or any protected category is prohibited in all job postings and communications.
        </li>
        <li>
          Users are not permitted to distribute spam, malware, or unsolicited promotional content through any feature on the portal.
        </li>
        <li>
          Any abusive messages, threats, or harassment sent through the messaging feature may result in immediate account suspension.
        </li>
        <li>
          Employers are not allowed to request payment from job seekers at any stage of the hiring process. Any such attempt must be reported immediately.
        </li>
        <li>
          We collect personal information only for functionality and matching purposes. Refer to our Privacy Policy to know your rights and data usage practices.
        </li>
        <li>
          The platform may use cookies and analytics to enhance user experience and service quality.
        </li>
        <li>
          Third-party verification tools (e.g., background checks or test assessments) may be used by employers, and their usage will be governed by their respective privacy terms.
        </li>
        <li>
          You may not share or sell access to your account or platform data without written consent from the portal administrators.
        </li>
        <li>
          We do not guarantee a job offer or interview opportunity, and we are not involved in employer decision-making.
        </li>
        <li>
          The platform may experience outages or delays. We are not liable for any technical issues or resulting opportunity loss.
        </li>
        <li>
          Your account may be suspended or permanently banned for breaching any of these terms, engaging in fraud, or disrupting platform integrity.
        </li>
        <li>
          These terms may change over time. Continued use of the platform after modifications constitutes acceptance of the revised policies.
        </li>
        <li>
          If you disagree with any part of the terms, you must discontinue use of the platform immediately.
        </li>
      </ol>
    </div>
  );
};

export default Terms;
