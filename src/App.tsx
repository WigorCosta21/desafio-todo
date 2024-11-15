import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import styles from "./App.module.css";
import "./global.css";
import { HeaderTask } from "./components/HeaderTask";
import { TaskEmpty } from "./components/TaskEmpty";

const App = () => {
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
        <HeaderTask tasksCounter={0} completTasksCounter={0} />
        <TaskEmpty />
      </section>
    </main>
  );
};

export default App;
