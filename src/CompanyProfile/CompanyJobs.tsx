import { jobList } from '../Data/JobsData';
import JobCard from '../FindJobs/JobCard';

export default function CompanyJobs() {
  return (
    <div className="mt-10 p-6 bg-white rounded-xl border border-blue-100 shadow-sm">
      <div className="text-blue-950 text-xl font-semibold mb-4">Open Positions</div>
      
      <div className="flex flex-wrap gap-4">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
