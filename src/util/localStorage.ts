import { ITask } from "../types/Task";

export const loadTasksFromLocalStorage = (): ITask[] => {
  const savedTasks = localStorage.getItem("@taskslist");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const saveTasksToLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("@taskslist", JSON.stringify(tasks));
};
