import { useLocation } from 'react-router-dom';
import Register from '../SignUpLogin/Register';
import Login from '../SignUpLogin/Login';


export default function RegisterPage() {
  const location = useLocation();
  const isRegister = location.pathname === '/register';
  const isLogin = location.pathname === '/login';

  // Show nothing if not on register or login path
  if (!isRegister && !isLogin) return null;

  return (
    <div className="min-h-screen bg-blue-900 font-poppins overflow-hidden">
      <div className="w-full h-screen flex">
        {/* Left Panel (Form) */}
        <div className="w-1/2 h-full flex items-center justify-center px-10">
          {isRegister ? <Register /> : <Login />}
        </div>

        {/* Right Panel (Message Side) */}
        <div
          className={`w-1/2 h-full flex flex-col items-center justify-center bg-blue-600 text-white ${
            isRegister ? 'rounded-l-[200px]' : 'rounded-r-[200px]'
          }`}
        >
          <div className="text-xl font-bold">JobPortal</div>
          <div className="text-2xl font-semibold text-center px-6 mt-4">
            Find the Job made for you
          </div>
        </div>
      </div>
    </div>
  );
}