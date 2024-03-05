import Image from "next/image";
import Logo from "../images/Logo.svg";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={Logo} className={styles.logo} alt="KoinX-Logo"></Image>
      </div>
      <div className={styles.links}>
        <li className={styles.text}>Crypto Taxes</li>
        <li className={styles.text}>Free Tools</li>
        <li className={styles.text}>Resource Center</li>
        <button className={styles.button}>Get Started</button>
      </div>
    </nav>
  );
}
