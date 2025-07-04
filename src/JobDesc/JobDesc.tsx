import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
import DOMPurify from "dompurify";

const JobDesc = (props:any) => {
  const data = DOMPurify.sanitize(desc);

  return (
    <div className="w-2/3 text-[#2d4b81]">
      {/* Header */}
      <div className="flex justify-between items-start">
        {/* Company Info */}
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-[#eef3ff] rounded-xl">
            <img className="h-14" src={`/Companies/Google.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold text-2xl text-[#364379]">
              Software Engineer III
            </div>
            <div className="text-lg text-[#44639f]">
              Google &#x2022; 3 days ago &#x2022; 48 Applicants
            </div>
          </div>
        </div>

        {/* Apply & Bookmark */}
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button variant="light"size="sm"styles={() => ({root: {backgroundColor: "#5f7cb8",color: "white","&:hover": {backgroundColor: "#5474b4",},},})}>{props.edit?"Edit":"Apply"}</Button>
          </Link>
        {props.edit?<Button color="red.5" size="sm" variant="outline">Delete</Button>:<IconBookmark className="cursor-pointer text-[#748dc1] hover:text-[#2d4b81]" />}
        </div>
      </div>

      <Divider my="xl" />

      {/* Info Cards */}
      <div className="flex justify-between">
        {card.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="icon"
              styles={() => ({
                root: {
                  backgroundColor: "#eef3ff",
                  color: "#364379",
                },
              })}
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-[#44639f]">{item.name}</div>
            <div className="font-semibold text-[#2d4b81]">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Required Skills */}
      <div className="mt-10">
        <div className="text-xl font-semibold mb-5 text-[#2d4b81]">
          Required Skills
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              className="!h-fit font-medium !text-sm !w-fit"
              variant="light"
              p="xs"
              radius="xl"
              aria-label="skill"
              styles={() => ({
                root: {
                  backgroundColor: "#dee2f2",
                  color: "#2d4b81",
                },
              })}
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>

      <Divider my="xl" />

      {/* Job Description */}
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-[#2d4b81] [&_p]:text-justify [&_li]:marker:text-[#2d4b81] [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>

      <Divider my="xl" />

      {/* About Company */}
      <div>
        <div className="text-xl font-semibold mb-5 text-[#2d4b81]">
          About Company
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-[#eef3ff] rounded-xl">
              <img className="h-14" src={`/Companies/Google.png`} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg text-[#364379]">Google</div>
              <div className="text-[#44639f]">10k+ Employees</div>
            </div>
          </div>
          <Link to="/company">
            <Button
              variant="light"
              styles={() => ({
                root: {
                  backgroundColor: "#bdc2de",
                  color: "#2d4b81",
                  "&:hover": {
                    backgroundColor: "#98a0ca",
                  },
                },
              })}
            >
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-justify text-[#2d4b81]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          suscipit sed sint! Aliquam nihil cum beatae, architecto aliquid
          incidunt obcaecati amet quasi voluptatum consectetur, debitis quas
          velit corrupti vel voluptatibus aspernatur labore consequuntur iste?
          Animi iste deserunt distinctio fugiat pariatur!
        </div>
      </div>
    </div>
  );
};

export default JobDesc;