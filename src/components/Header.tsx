import logo from "../assets/logo.png";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo todo" />
    </header>
  );
};
