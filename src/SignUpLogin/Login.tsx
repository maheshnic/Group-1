import { useState } from 'react';
import { rem, TextInput, PasswordInput, Button, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedUser.name !== name) {
      setError('User not found');
    } else if (storedUser.password !== password) {
      setError('Password is invalid');
    } else {
      // Redirect to role-based dashboard
      if (storedUser.role === 'candidate') navigate('/candidate-dashboard');
      else if (storedUser.role === 'department') navigate('/department-dashboard');
      else navigate('/admin-dashboard');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-2/3 bg-white shadow-md rounded-xl p-10 flex flex-col gap-6">
        <div className="text-3xl font-bold text-center text-blue-800">Login</div>

        <TextInput
          withAsterisk
          label="Name"
          placeholder="Enter your name"
          leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} />}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        {error && <Text className="text-red-600 text-sm -mt-2">{error}</Text>}

        <div className="text-right text-sm">
          <Link to="/forgot-password" className="text-blue-600 underline">Forgot Password?</Link>
        </div>

        <Button color="blue" fullWidth className="mt-2" onClick={handleLogin}>
          Login
        </Button>

        <div className="text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 underline">
            Register first
          </Link>
        </div>
      </div>
    </div>
  );
}