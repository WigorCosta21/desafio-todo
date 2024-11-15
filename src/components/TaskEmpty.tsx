import styles from "./TaskEmpty.module.css";
import clipboard from "../assets/clipboard.png";

export const TaskEmpty = () => {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="Clipboard" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
};
