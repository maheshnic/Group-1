import { Avatar, Indicator } from '@mantine/core';
import { IconUser, IconBell } from '@tabler/icons-react';
import NavLinks from './NavLinks';
import ProfileMenu from './ProfileMenu';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  if (location.pathname === "/register" || location.pathname === "/login") {
    return null;
  }

  return (
    <div className="w-full bg-blue-950 px-6 flex justify-between items-center font-[Poppins] text-white py-3">
      <div className="text-xl font-bold">JobPortal</div>

      <NavLinks />

      <div className="flex gap-3 items-center">
        <ProfileMenu />
        <div className="bg-blue-900 p-1.5 rounded-full">
          <IconUser size={24} color="white" />
        </div>
        <div className="bg-blue-900 p-1.5 rounded-full">
          <Indicator color="rgba(240, 24, 24, 1)" offset={6} processing>
            <IconBell size={24} color="white" />
          </Indicator>
        </div>
      </div>
    </div>
  );
}

