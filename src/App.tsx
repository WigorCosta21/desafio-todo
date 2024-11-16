import { useEffect, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { HeaderTask } from "./components/HeaderTask";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { TaskEmpty } from "./components/TaskEmpty";

import { ITask } from "./types/Task";

import styles from "./App.module.css";
import "./global.css";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./util/localStorage";

const App = () => {
  const [tasks, setTasks] = useState<ITask[]>(loadTasksFromLocalStorage);
  const [inputTask, setInputTask] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleToggleComplete = (id: string) => {
    const newTask = [...tasks];
    newTask.map((task) =>
      task.id === id ? (task.isComplete = !task.isComplete) : task
    );

    setTasks(newTask);
  };

  const handleDeleteTask = (id: string) => {
    const newTask = tasks.filter((task) => task.id !== id);

    setTasks(newTask);
  };

  const handleAddTask = () => {
    if (inputTask.trim() === "") {
      setIsValid(true);
      return;
    }

    const newTask: ITask = {
      id: uuidv4(),
      text: inputTask,
      isComplete: false,
    };

    setTasks([newTask, ...tasks]);
    setInputTask("");
    setIsValid(false);
  };

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const tasksCounter = tasks.length;

  const completTasksCounter = tasks.filter(
    (task) => task.isComplete === true
  ).length;

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskContainer}>
          <div className={styles.InputAndButton}>
            <Input
              placeholder="Adicione uma nova tarefa"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
            />
            <Button onClick={handleAddTask}>
              Criar <PlusCircle color="#f2f2f2" size={16} weight="bold" />
            </Button>
          </div>
          {isValid && (
            <p className={styles.error}>O campo não pode estar vazio!</p>
          )}
        </div>

        <HeaderTask
          tasksCounter={tasksCounter}
          completTasksCounter={completTasksCounter}
        />

        {tasksCounter > 0 ? (
          <ul className={styles.list}>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onDeleteTask={handleDeleteTask}
                />
              </li>
            ))}
          </ul>
        ) : (
          <TaskEmpty />
        )}
      </section>
    </main>
  );
};

export default App;
