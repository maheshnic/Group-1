import React, { useState } from "react";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "education">("personal");

  return (
    <>
      

      <div className="max-w-[900px] mx-auto bg-white p-5 rounded-[10px] shadow-[0_0_10px_#ccc] mt-6 mb-6">
        <h1 className="text-center text-2xl font-semibold">Candidate Profile</h1>

        {/* Tabs */}
        <div className="flex justify-center mt-10 mb-5">
          <button
            onClick={() => setActiveTab("personal")}
            className={`px-5 py-2 mx-1 font-bold rounded-[5px] border-none cursor-pointer ${
              activeTab === "personal" ? "bg-[#4a90e2] text-white" : "bg-[#ddd]"
            }`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-5 py-2 mx-1 font-bold rounded-[5px] border-none cursor-pointer ${
              activeTab === "education" ? "bg-[#4a90e2] text-white" : "bg-[#ddd]"
            }`}
          >
            Education & Job Preference
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "personal" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
            <form className="grid gap-3">
              <label className="flex flex-col font-bold">
                Title:
                <select className="p-2 rounded border border-[#ccc]">
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Mrs</option>
                </select>
              </label>
              <label className="flex flex-col font-bold">
                Full Name:
                <input type="text" readOnly value="XYZ Sharma" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Father's Name:
                <input type="text" placeholder="Enter Father's Name" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Mother's Name:
                <input type="text" placeholder="Enter Mother's Name" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Date of Birth:
                <input type="date" readOnly className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Gender:
                <select className="p-2 rounded border border-[#ccc]">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
              <label className="flex flex-col font-bold">
                Aadhaar No:
                <input type="password" value="1234-XXXX-XXXX" readOnly className="p-2 rounded border border-[#ccc]" />
              </label>

              <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
              <label className="flex flex-col font-bold">
                Mobile Number:
                <input type="text" maxLength={10} className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Email ID:
                <input type="email" className="p-2 rounded border border-[#ccc]" />
              </label>

              <h3 className="text-lg font-semibold mt-4">Address</h3>
              <label className="flex flex-col font-bold">
                State:
                <input type="text" readOnly value="Tripura" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                District:
                <input type="text" readOnly value="West Tripura" className="p-2 rounded border border-[#ccc]" />
              </label>

              <h3 className="text-lg font-semibold mt-4">Tripura Residence</h3>
              <label className="flex flex-col font-bold">
                Are you resident of Tripura?
                <input type="text" readOnly value="Yes" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                PRTC No:
                <input type="text" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                PRTC Issuing District:
                <input type="text" readOnly value="West Tripura" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                PRTC Issue Date:
                <input type="date" readOnly className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                PRTC Certificate Upload:
                <input type="file" accept=".pdf,.jpg,.jpeg" className="p-2 rounded border border-[#ccc]" />
              </label>
            </form>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Education & Job Preferences</h2>
            <form className="grid gap-3">
              <label className="flex flex-col font-bold">
                Highest Qualification:
                <select className="p-2 rounded border border-[#ccc]">
                  <option>Graduation</option>
                  <option>Post-Graduation</option>
                </select>
              </label>
              <label className="flex flex-col font-bold">
                Stream / Specialization:
                <input type="text" placeholder="e.g. Computer Science" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Skills:
                <input type="text" placeholder="e.g. MS Word, Typing" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Experience Level:
                <select className="p-2 rounded border border-[#ccc]">
                  <option>Fresher</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </select>
              </label>
              <label className="flex flex-col font-bold">
                Years of Experience:
                <input type="number" placeholder="If not fresher" className="p-2 rounded border border-[#ccc]" />
              </label>

              <h3 className="text-lg font-semibold mt-4">Job Preferences</h3>
              <label className="flex flex-col font-bold">
                Preferred Job Role:
                <input type="text" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Preferred Work Location:
                <select multiple className="p-2 rounded border border-[#ccc]">
                  <option>Agartala</option>
                  <option>Udaipur</option>
                </select>
              </label>

              <h3 className="text-lg font-semibold mt-4">Documents</h3>
              <label className="flex flex-col font-bold">
                Upload Resume:
                <input type="file" accept=".pdf" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Upload Cover Letter:
                <input type="file" accept=".pdf" className="p-2 rounded border border-[#ccc]" />
              </label>
              <label className="flex flex-col font-bold">
                Upload Certifications:
                <input type="file" accept=".pdf" className="p-2 rounded border border-[#ccc]" />
              </label>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
