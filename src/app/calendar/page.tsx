import CalendarPage from "../components/calendar/CalendarPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Calendar = () => {
  return (
    <>
      <CalendarPage />
    </>
  );
};

export default Calendar;
