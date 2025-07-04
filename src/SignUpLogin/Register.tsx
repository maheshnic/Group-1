import { useState } from 'react';
import { rem, TextInput, PasswordInput, Radio, Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [role, setRole] = useState<'candidate' | 'department' | 'admin'>('candidate');
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    id: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      role,
      name: form.name,
      email: form.email,
      id: form.id,
      password: form.password,
    };

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect based on role
    if (role === 'candidate') navigate('/candidate-landing');
    else if (role === 'department') navigate('/Department-landing');
    else navigate('/admin-dashboard');
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-2/3 bg-white shadow-md rounded-xl p-10 flex flex-col gap-6">
        <div className="text-3xl font-bold text-center text-blue-800">Create Account</div>

        <Radio.Group
          label="Registering as"
          value={role}
          onChange={(value) => setRole(value as any)}
          className="flex gap-5"
          withAsterisk
        >
          <Radio value="candidate" label="Candidate" />
          <Radio value="department" label="Department" />
          <Radio value="admin" label="Admin" />
        </Radio.Group>

        <TextInput
          withAsterisk
          label={role === 'candidate' ? 'Full Name' : role === 'admin' ? 'Admin Name' : 'Department Name'}
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => handleChange('name', e.currentTarget.value)}
        />

        <TextInput
          withAsterisk
          label="Email"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => handleChange('email', e.currentTarget.value)}
        />

        <TextInput
          withAsterisk
          label={role === 'candidate' ? 'Enrollment No.' : role === 'admin' ? 'Admin Code' : 'Department ID'}
          placeholder="Enter ID"
          value={form.id}
          onChange={(e) => handleChange('id', e.currentTarget.value)}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => handleChange('password', e.currentTarget.value)}
        />

        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.currentTarget.value)}
        />

        <Button color="blue" fullWidth className="mt-4" onClick={handleRegister}>
          Register
        </Button>

        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 underline">Login</Link>
        </div>
      </div>
    </div>
  );
}