import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  return (
    <div className="w-2/3 bg-white rounded-xl shadow-md overflow-hidden text-blue-950">
      {/* Banner & Avatar */}
      <div className="relative">
        <img className="rounded-t-xl w-full h-56 object-cover" src="background.jpeg" alt="Profile background" />
        <img
          className="w-40 h-40 rounded-full absolute left-6 -bottom-20 border-4 border-white shadow-md object-cover"
          src="Avatar1.jpeg"
          alt="Profile avatar"
        />
      </div>

      {/* Info Section */}
      <div className="px-6 pt-24 pb-4">
        <div className="text-3xl font-bold flex justify-between items-center">
          {props.name}
          <Button variant="light" color="blue" className="text-blue-950 border-blue-950">Message</Button>
        </div>
        <div className="text-lg flex gap-2 items-center mt-1">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>
        <div className="text-md flex gap-2 items-center mt-1">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>

      <Divider my="xs" />

      {/* About */}
      <div className="px-6 py-4">
        <div className="text-2xl font-semibold mb-2">About</div>
        <p className="text-sm text-justify text-blue-900">{props.about}</p>
      </div>

      <Divider my="xs" />

      {/* Skills */}
      <div className="px-6 py-4">
        <div className="text-2xl font-semibold mb-2">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-950 text-sm font-medium rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Divider my="xs" />

      {/* Experience */}
      <div className="px-6 py-4">
        <div className="text-2xl font-semibold mb-4">Experience</div>
        <div className="flex flex-col gap-6">
          {props.experience.map((exp: any, index: number) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider my="xs" />

      {/* Certifications */}
      <div className="px-6 py-4">
        <div className="text-2xl font-semibold mb-4">Certifications</div>
        <div className="flex flex-col gap-6">
          {props.certifications.map((certi: any, index: number) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;