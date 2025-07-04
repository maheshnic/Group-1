import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-[90vh] font-[Poppins]">
      <Divider mx="md" mb="xl" />
      <Profile />
    </div>
  );
};

export default ProfilePage;
