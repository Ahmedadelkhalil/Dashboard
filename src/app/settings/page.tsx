import SettingsPage from "../components/settings/settingsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Settings = () => {
  return (
    <>
      <SettingsPage />
    </>
  );
};

export default Settings;
