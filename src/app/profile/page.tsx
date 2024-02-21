import ProfilePage from "../components/profile/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Profile = () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default Profile;
