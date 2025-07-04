import Sort from './Sort';
import JobCard from './JobCard';
import { jobList } from '../Data/JobsData';

export default function Jobs() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-blue-950">Recommended Jobs</h2>
        <Sort />
      </div>

      <div className="flex mt-10 flex-wrap gap-5 justify-between">
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}