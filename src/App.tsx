import { UI } from "@/components";
import Header from "./components/Page/Common/Header";
import BgParticles from "./components/Page/Common/BgParticles";
import BgSection from "./components/Page/Common/BgSection";
import FogOverlay from "./components/Page/Common/FogOverlay";
import Intro from "./components/Page/Intro";
import About from "./components/Page/About";
import Experiences from "./components/Page/Experiences";
import Projects from "./components/Page/Projects";
import Contact from "./components/Page/Contact";
import bgVector from "/bg-vector.jpg";
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
      <FogOverlay />
      <BgSection bgURL={bgVector} />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
