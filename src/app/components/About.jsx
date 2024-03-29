import Image from "next/image";
import Bitcoin1 from "../images/Bitcoin1.png";
import Bitcoin2 from "../images/Bitcoin2.png";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Bitcoin</h1>
      <h2>What is Bitcoin?</h2>
      <p>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <hr />
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus.
      </p>
      <p>
        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
        scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam
        praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae
        pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis
        pellentesque interdum. Odio cursus phasellus velit in senectus enim dui.
        Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget
        eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa
        turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
      <h1>Already Holding Bitcoin?</h1>
      <Image src={Bitcoin1} alt="image1"></Image>
      <Image src={Bitcoin2} alt="image2"></Image>
      <hr />
      <p>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}
