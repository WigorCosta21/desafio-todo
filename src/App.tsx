import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { HeaderTask } from "./components/HeaderTask";
import { Task } from "./components/Task";
import { TaskData } from "./data/Task";

import styles from "./App.module.css";
import "./global.css";

const App = () => {
  const [tasks, setTasks] = useState(TaskData);

  const handleToggleComplete = (id: number) => {
    const newTask = [...tasks];
    newTask.map((task) =>
      task.id === id ? (task.isComplete = !task.isComplete) : task
    );

    setTasks(newTask);
  };

  const tasksCounter = tasks.length;

  const completTasksCounter = tasks.filter(
    (task) => task.isComplete === true
  ).length;

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskContainer}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>
            Criar <PlusCircle color="#f2f2f2" size={16} weight="bold" />
          </Button>
        </div>
        <HeaderTask
          tasksCounter={tasksCounter}
          completTasksCounter={completTasksCounter}
        />

        <ul className={styles.list}>
          {tasks.map((task) => (
            <li key={task.id}>
              <Task task={task} onToggleComplete={handleToggleComplete} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
