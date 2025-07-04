import { Link } from 'react-router-dom';

export default function DepartmentHeader() {
  return (
    <div className="relative">
      {/* Background Banner */}
      <div
        className="h-48 w-full bg-blue-950 bg-cover bg-center flex flex-col justify-center items-center text-white shadow"
        style={{
          backgroundImage:
            "man.jpg",
        }}
      >
        <h1 className="text-2xl font-bold tracking-widest">DEPARTMENT DASHBOARD</h1>
        <p className="text-sm opacity-80 mt-1">Navigate your career journey here</p>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-md px-10 py-3 -mt-5 mx-5 rounded-lg flex justify-center gap-10 text-blue-950 font-semibold">
        <Link to="/find-talent" className="hover:text-blue-800 transition">Find Candidates</Link>
        <Link to="/post-job" className="hover:text-blue-800 transition">Post Jobs</Link>
        <Link to="/posted-job" className="hover:text-blue-800 transition">Posted Jobs</Link>
        <Link to="/setting" className="hover:text-blue-800 transition">Posted Jobs</Link>
      </div>
    </div>
  );
}