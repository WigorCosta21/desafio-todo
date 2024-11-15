import styles from "./HeaderTask.module.css";

type HeaderTaskProps = {
  tasksCounter: number;
  completTasksCounter: number;
};

export const HeaderTask = ({
  tasksCounter,
  completTasksCounter,
}: HeaderTaskProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </div>
      <div className={styles.content}>
        <p>Concluídas</p>
        <span>{completTasksCounter}</span>
      </div>
    </header>
  );
};
