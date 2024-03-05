import styles from "../styles/getStarted.module.css";
import Frame from "../images/Frame.png";
import Image from "next/image";
import Arrow from "../images/Arrow.svg";

export default function GetStarted() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.head1}>Get Started with KoinX</h1>
        <h1 className={styles.head2}>for FREE</h1>
        <p className={styles.text}>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
      </div>
      <Image src={Frame} className={styles.frame} alt="frame"></Image>
      <button className={styles.btn}>
        Get Started for FREE <Image src={Arrow} className={styles.arrow} alt="arrow"></Image>
      </button>
    </div>
  );
}
