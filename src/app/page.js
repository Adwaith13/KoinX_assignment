import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Tokenomics />
      <Team />
    </>
  );
}
