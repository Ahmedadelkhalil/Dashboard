import HelpPage from "../components/help/helpPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Help = () => {
  return (
    <>
      <HelpPage />
    </>
  );
};

export default Help;
