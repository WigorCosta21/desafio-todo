import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../types/Task";

import styles from "./Task.module.css";

type TaskProps = {
  task: ITask;
  onToggleComplete: (id: number) => void;
};

export const Task = ({ task, onToggleComplete }: TaskProps) => {
  const checkedSpan = task.isComplete ? styles.checked : styles.unchecked;
  const checkedParagraph = task.isComplete ? styles["paragraph-checked"] : "";

  return (
    <div className={styles.content}>
      <span
        onClick={() => onToggleComplete(task.id)}
        className={`${styles.checkbox} ${checkedSpan}`}
      >
        {task.isComplete && <Check size={8} />}
      </span>
      <p className={`${styles.paragraph} ${checkedParagraph}`}>{task.text}</p>
      <button className={styles.button}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
};