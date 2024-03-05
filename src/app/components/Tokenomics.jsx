import tokenomics from "../images/tokenomics.png";
import Image from "next/image";
import styles from "../styles/about.module.css";

export default function Tokenomics() {
  return (
    <div className={styles.container}>
      <h1>Tokenomics</h1>
      <h2>Initial Distribution</h2>
      <Image src={tokenomics}></Image>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}
