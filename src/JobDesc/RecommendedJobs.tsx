import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

export default function RecommendedJobs() {
  return (
    <div className="p-4 rounded-2xl bg-[#eef3ff] text-[#2d4b81] shadow-sm">
      {/* Title */}
      <div className="text-xl font-semibold mb-5 text-[#364379]">
        Recommended Jobs
      </div>

      {/* Job List */}
      <div className="flex flex-col gap-5">
        {jobList.map(
          (job, index) =>
            index < 6 && (
              <div
                key={index}
                className="rounded-xl border border-[#dce4f5] bg-white hover:bg-[#f5f8ff] transition duration-200"
              >
                <JobCard {...job} />
              </div>
            )
        )}
      </div>
    </div>
  );
}