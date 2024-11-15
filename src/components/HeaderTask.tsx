import styles from "./HeaderTask.module.css";

export const HeaderTask = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div className={styles.content}>
        <p>Concluídas</p>
        <span>0</span>
      </div>
    </header>
  );
};
