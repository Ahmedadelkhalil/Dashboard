import TaskPage from "../components/tasks/TaskPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tasks",
  description: "Nextjs Dashboard By Ahmed Adel",
};

const Tasks = () => {
  return (
    <>
      <TaskPage />
    </>
  );
};

export default Tasks;
