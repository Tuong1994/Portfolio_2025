import { UI } from "@/components";
import Header from "./components/Page/Common/Header";
import BgParticles from "./components/Page/Common/BgParticles";
import Intro from "./components/Page/Intro";
import BgSection from "./components/Page/Common/BgSection";
import bgCoding from "/bg-coding.png";
import "./style/main.scss";

const { Layout } = UI;

const { Container } = Layout;

function App() {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Header />
        <BgParticles />
        <Intro />
      </div>
      <BgSection bgURL={bgCoding} />
    </Container>
  );
}

export default App;
