import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Input } from "./components/Input";

const App = () => {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskContainer}>
          <Input placeholder="Adicione uma nova tarefa" />
        </div>
      </section>
    </main>
  );
};

export default App;
