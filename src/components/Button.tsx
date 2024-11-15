import styles from "./Button.module.css";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: buttonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
