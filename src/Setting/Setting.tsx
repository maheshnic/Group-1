import React from 'react';
import Toggle from './Toggle';



interface SettingProps {
  activeMain: string;
  setActiveMain: (value: string) => void;
  activeSetting: string;
  setActiveSetting: (value: string) => void;
  mainNav: string[];
  settingNav: string[];
  toggles: Record<'google' | 'linkedin' | 'email' | 'attach', boolean>;
  inputs: Record<'google' | 'linkedin' | 'email' | 'attach', string>;
  errors: Record<'google' | 'linkedin' | 'email' | 'attach', string>;
  handleToggle: (key: 'google' | 'linkedin' | 'email' | 'attach') => void;
  handleInputChange: (key: 'google' | 'linkedin' | 'email' | 'attach', value: string) => void;
  handleSubmit: (key: 'google' | 'linkedin' | 'email' | 'attach') => void;
  commToggles: Record<
    'emailNotifications' | 'smsAlerts' | 'inAppMessages' | 'profileVisibility' | 'thirdPartyEmails',
    boolean
  >;
  setCommToggles: React.Dispatch<
    React.SetStateAction<
      Record<
        'emailNotifications' | 'smsAlerts' | 'inAppMessages' | 'profileVisibility' | 'thirdPartyEmails',
        boolean
      >
    >
  >;
  jobPrefToggles: Record<
    'jobType' | 'workLocation' | 'industryFocus' | 'roleLevel' | 'jobAlertFrequency',
    boolean
  >;
  setJobPrefToggles: React.Dispatch<
    React.SetStateAction<
      Record<'jobType' | 'workLocation' | 'industryFocus' | 'roleLevel' | 'jobAlertFrequency', boolean>
    >
  >;
}

const Setting: React.FC<SettingProps> = ({
  activeMain,
  setActiveMain,
  activeSetting,
  setActiveSetting,
  mainNav,
  settingNav,
  toggles,
  inputs,
  errors,
  handleToggle,
  handleInputChange,
  handleSubmit,
  commToggles,
  setCommToggles,
  jobPrefToggles,
  setJobPrefToggles,
}) => {
  return (
    <div className="flex h-screen font-sans bg-[#F9FAFB] text-[#333] m-0 p-0">
      {/* Sidebar */}
      <aside className="w-[380px] bg-white border-r border-gray-200 flex">
        <div className="w-[220px] border-r bg-blue-950 py-6 px-4">
          <div className="text-2xl text-white font-bold mb-6">JOB PORTAL</div>
          <div className="space-y-1 text-sm">
            {mainNav.map((item) => (
              <div
                key={item}
                onClick={() => setActiveMain(item)}
                className={`py-[10px] px-[10px] rounded text-white cursor-pointer ${
                  activeMain === item ? 'bg-[#70869d] text-blue-400 font-medium' : 'hover:bg-blue-800'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Settings Navigation */}
        {activeMain === 'Settings' && (
          <div className="w-[160px] py-6 px-3">
            <div className="text-2xl text-gray-800 font-semibold tracking-widest mb-2">SETTINGS</div>
            <div className="space-y-1 text-sm">
              {settingNav.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveSetting(item)}
                  className={`py-[10px] px-[10px] rounded cursor-pointer ${
                    activeSetting === item ? 'bg-[#DBEAFE] text-[#2563EB] font-medium' : 'hover:bg-gray-100'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-200 p-8 overflow-y-auto w-full">
        <h1 className="text-xl font-semibold mb-6">{activeSetting}</h1>

        {/* Candidate Apply Setting */}
        {activeSetting === 'Candidate Apply Setting' && (
          <div className="bg-white border rounded-lg p-6 space-y-6 text-sm shadow-sm">
            <h2 className="text-base font-medium mb-2">Login Options</h2>
            {(['google', 'linkedin', 'email'] as const).map((key) => {
              const labels: Record<typeof key, string> = {
                google: 'Google Login',
                linkedin: 'LinkedIn Login',
                email: 'Email Login',
              };
              const placeholders: Record<typeof key, string> = {
                google: 'Enter Google Auth URL',
                linkedin: 'Enter LinkedIn Auth URL',
                email: 'Enter Login Email',
              };
              return (
                <div key={key} className="py-3 border-t first:border-none">
                  <div className="flex justify-between items-center">
                    <span>{labels[key]}</span>
                    <Toggle checked={toggles[key]} onChange={() => handleToggle(key)} />
                  </div>
                  {toggles[key] && (
                    <>
                      <div className="mt-3 flex gap-2">
                        <input
                          type="text"
                          placeholder={placeholders[key]}
                          value={inputs[key]}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          className={`flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-1 ${
                            errors[key] ? 'border-red-500 ring-red-400' : 'focus:ring-blue-500'
                          }`}
                        />
                        <button
                          onClick={() => handleSubmit(key)}
                          className="px-4 py-2 bg-[#858fa5] text-white text-sm rounded hover:bg-blue-900 transition"
                        >
                          Submit
                        </button>
                      </div>
                      {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                    </>
                  )}
                </div>
              );
            })}

            {/* Attach Resume */}
            <div className="pt-4 border-t">
              <h2 className="text-base font-medium mb-2">Attachment</h2>
              <div className="py-3">
                <div className="flex justify-between items-center">
                  <span>Attach resume with email</span>
                  <Toggle checked={toggles.attach} onChange={() => handleToggle('attach')} />
                </div>
                {toggles.attach && (
                  <>
                    <div className="mt-3 flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter Resume File URL"
                        value={inputs.attach}
                        onChange={(e) => handleInputChange('attach', e.target.value)}
                        className={`flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-1 ${
                          errors.attach ? 'border-red-500 ring-red-400' : 'focus:ring-blue-500'
                        }`}
                      />
                      <button
                        onClick={() => handleSubmit('attach')}
                        className="px-4 py-2 bg-[#858fa5] text-white text-sm rounded hover:bg-blue-900 transition"
                      >
                        Submit
                      </button>
                    </div>
                    {errors.attach && <p className="text-red-500 text-xs mt-1">{errors.attach}</p>}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Communication and Privacy */}
        {activeSetting === 'Communication and Privacy' && (
          <div className="bg-white border rounded-lg p-6 space-y-6 text-sm shadow-sm">
            <h2 className="text-base font-medium mb-4">Communication and Privacy Preferences</h2>
            <div className="space-y-4">
              {(
                [
                  {
                    key: 'emailNotifications',
                    label: 'Email Notifications',
                    description: 'Receive important updates and job recommendations.',
                  },
                  {
                    key: 'smsAlerts',
                    label: 'SMS Alerts',
                    description: 'Get text alerts for interview calls and application status.',
                  },
                  {
                    key: 'inAppMessages',
                    label: 'In-app Messages',
                    description: 'Enable messages directly from employers or the system.',
                  },
                  {
                    key: 'profileVisibility',
                    label: 'Profile Visibility',
                    description: 'Control who can view your profile.',
                  },
                  {
                    key: 'thirdPartyEmails',
                    label: 'Third-party Emails',
                    description: 'Allow verified third-party partners to contact you.',
                  },
                ] as const
              ).map(({ key, label, description }) => (
                <div key={key} className="flex justify-between items-center gap-4 border-t pt-4">
                  <div className="flex-1">
                    <p className="font-medium">{label}</p>
                    <p className="text-gray-500 text-xs">{description}</p>
                  </div>
                  <Toggle
                    checked={commToggles[key]}
                    onChange={() => setCommToggles((prev) => ({ ...prev, [key]: !prev[key] }))}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Job Preferences */}
        {activeSetting === 'Job preferences' && (
          <div className="bg-white border rounded-lg p-6 space-y-6 text-sm shadow-sm">
            <h2 className="text-base font-medium mb-4">Job Preferences</h2>
            <div className="space-y-4">
              {(
                [
                  {
                    key: 'jobType',
                    label: 'Job Type',
                    description: 'Preferred job nature: Full-time, Part-time, Contract.',
                  },
                  {
                    key: 'workLocation',
                    label: 'Work Location',
                    description: 'Remote, hybrid, or on-site preference.',
                  },
                  {
                    key: 'industryFocus',
                    label: 'Industry Focus',
                    description: 'Prioritize opportunities in your preferred fields.',
                  },
                  {
                    key: 'roleLevel',
                    label: 'Role Level',
                    description: 'Internship, entry-level, or senior roles.',
                  },
                  {
                    key: 'jobAlertFrequency',
                    label: 'Job Alert Frequency',
                    description: 'Get alerts daily, weekly, or instantly.',
                  },
                ] as const
              ).map(({ key, label, description }) => (
                <div key={key} className="flex justify-between items-center gap-4 border-t pt-4">
                  <div className="flex-1">
                    <p className="font-medium">{label}</p>
                    <p className="text-gray-500 text-xs">{description}</p>
                  </div>
                  <Toggle
                    checked={jobPrefToggles[key]}
                    onChange={() => setJobPrefToggles((prev) => ({ ...prev, [key]: !prev[key] }))}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Block Companies */}
        {activeSetting === 'Block companies' && (
          <div className="bg-white border rounded-lg p-6 space-y-6 text-sm shadow-sm">
            <h2 className="text-base font-medium mb-4">Block Companies</h2>
            <p className="text-sm text-gray-700">
              Recruiters from companies blocked by you will not be able to see your profile.
            </p>
            <div className="mt-4">
              <label htmlFor="blockCompanySearch" className="block font-medium mb-1">
                Search companies you want to block
              </label>
              <input
                id="blockCompanySearch"
                type="text"
                placeholder="Enter company name"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Profiles are hidden from current companies by default.
            </p>
            <div className="flex justify-end gap-4 mt-6">
              <button className="px-4 py-2 border text-sm rounded hover:bg-gray-100 transition">
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#2563EB] text-white text-sm rounded hover:bg-blue-800 transition">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;