import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../types/Task";

import styles from "./Task.module.css";

type TaskProps = {
  task: ITask;
};

export const Task = ({ task }: TaskProps) => {
  const checkedSpan = task.isComplete ? styles.checked : styles.unchecked;
  const checkedParagraph = task.isComplete ? styles["paragraph-checked"] : "";

  return (
    <label className={styles.content}>
      <span className={`${styles.checkbox} ${checkedSpan}`}>
        {task.isComplete && <Check size={8} />}
      </span>
      <p className={`${styles.text} ${checkedParagraph}`}>{task.text}</p>
      <button className={styles.button}>
        <Trash size={16} color="#808080" />
      </button>
    </label>
  );
};
