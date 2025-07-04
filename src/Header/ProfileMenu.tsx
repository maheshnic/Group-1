import React, { useState } from 'react';
import { Menu, Button, Text, Avatar, Switch, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconUserCircle,
  IconMoonStars,
  IconLogout2,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  const [checked, setChecked] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex cursor-pointer items-center gap-2">
          <div>Profile</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle size={14} />}>Profile</Menu.Item>
        </Link>

        <Menu.Item leftSection={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        
        <Link to="/setting">
        <Menu.Item leftSection={<IconMoon size={14} />}>Setting</Menu.Item>
        </Link>
        

        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              size="md"
              color="dark.4"
              onLabel={
                <IconSun
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={2.5}
                  color="yellow"
                />
              }
              offLabel={
                <IconMoonStars
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={2.5}
                  color="gray"
                />
              }
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;