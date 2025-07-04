import { useNavigate } from 'react-router-dom';

export default function CandidateLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
     

      {/* Content */}
      <div className="p-8 text-gray-800">
        <h1 className="text-2xl font-semibold mb-2 text-blue-800">Welcome to your Dashboard</h1>
        <p className="text-sm text-gray-600">
          Explore opportunities, check status, and manage your applications here.
        </p>
      </div>
    </div>
  );
}