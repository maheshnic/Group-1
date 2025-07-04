import React, { useState } from 'react';
import Setting from '../Setting/Setting';

const isValidURL = (url: string) => {
  try {
    const parsed = new URL(url);
    return !!parsed.protocol && !!parsed.hostname;
  } catch {
    return false;
  }
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const SettingPage: React.FC = () => {
  const [activeMain, setActiveMain] = useState('Dashboard');
  const [activeSetting, setActiveSetting] = useState('Candidate Apply Setting');

  const mainNav = ['Dashboard', 'Jobs', 'Candidates', 'Messages', 'Evaluation', 'Settings'];
  const settingNav = ['Candidate Apply Setting', 'Communication and Privacy', 'Job preferences', 'Block companies'];

  type ToggleKeys = 'google' | 'linkedin' | 'email' | 'attach';
  type CommToggleKeys = 'emailNotifications' | 'smsAlerts' | 'inAppMessages' | 'profileVisibility' | 'thirdPartyEmails';
  type JobPrefToggleKeys = 'jobType' | 'workLocation' | 'industryFocus' | 'roleLevel' | 'jobAlertFrequency';

  const [toggles, setToggles] = useState<Record<ToggleKeys, boolean>>({
    google: true,
    linkedin: true,
    email: true,
    attach: true
  });

  const [inputs, setInputs] = useState<Record<ToggleKeys, string>>({
    google: '',
    linkedin: '',
    email: '',
    attach: ''
  });

  const [errors, setErrors] = useState<Record<ToggleKeys, string>>({
    google: '',
    linkedin: '',
    email: '',
    attach: ''
  });

  const [commToggles, setCommToggles] = useState<Record<CommToggleKeys, boolean>>({
    emailNotifications: true,
    smsAlerts: false,
    inAppMessages: true,
    profileVisibility: false,
    thirdPartyEmails: false
  });

  const [jobPrefToggles, setJobPrefToggles] = useState<Record<JobPrefToggleKeys, boolean>>({
    jobType: true,
    workLocation: false,
    industryFocus: true,
    roleLevel: false,
    jobAlertFrequency: false
  });

  const handleToggle = (key: ToggleKeys) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const handleInputChange = (key: ToggleKeys, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const handleSubmit = (key: ToggleKeys) => {
    const value = inputs[key];
    const isValid = key === 'email' ? isValidEmail(value) : isValidURL(value);

    if (!isValid) {
      setErrors((prev) => ({
        ...prev,
        [key]: `Please enter a valid ${key === 'email' ? 'email address' : 'URL'}`
      }));
    } else {
      alert(`${key} submitted: ${value}`);
    }
  };

  return (
    <Setting
      activeMain={activeMain}
      setActiveMain={setActiveMain}
      activeSetting={activeSetting}
      setActiveSetting={setActiveSetting}
      mainNav={mainNav}
      settingNav={settingNav}
      toggles={toggles}
      inputs={inputs}
      errors={errors}
      handleToggle={handleToggle}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      commToggles={commToggles}
      setCommToggles={setCommToggles}
      jobPrefToggles={jobPrefToggles}
      setJobPrefToggles={setJobPrefToggles}
    />
  );
};

export default SettingPage;
