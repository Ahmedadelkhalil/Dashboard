import DashboardPage from "./components/dashboard/DashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Dashboard = () => {
  return (
    <>
      <DashboardPage />
    </>
  );
};

export default Dashboard;
