import Image from "next/image";
import team1 from "../images/team1.png";
import team2 from "../images/team2.png";
import team3 from "../images/team3.png";
import styles from "../styles/about.module.css";

export default function Team() {
  return (
    <div className={styles.container}>
      <h1>Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <Image src={team1} className={styles.team} alt="team"></Image>
      <Image src={team2} className={styles.team} alt="team"></Image>
      <Image src={team3} className={styles.team} alt="team"></Image>
    </div>
  );
}
