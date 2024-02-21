import NotificationsPage from "../components/notifications/notificationsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Notifications = () => {
  return (
    <>
      <NotificationsPage />
    </>
  );
};

export default Notifications;
