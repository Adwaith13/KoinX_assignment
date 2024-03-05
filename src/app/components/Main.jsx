import Price from "./Price";
import GetStarted from "./GetStarted";
import styles from "../styles/main.module.css";

export default function Main() {
  return (
    <div className={styles.container}>
      <Price />
      <GetStarted />
    </div>
  );
}
