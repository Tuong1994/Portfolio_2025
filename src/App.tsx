import { ToastMessage, Layout } from "./components/UI";
import Header from "./components/Page/Common/Header";
import BgParticles from "./components/Page/Common/BgParticles";
import BgSection from "./components/Page/Common/BgSection";
import FogOverlay from "./components/Page/Common/FogOverlay";
import Intro from "./components/Page/Intro";
import About from "./components/Page/About";
import Experiences from "./components/Page/Experiences";
import Projects from "./components/Page/Projects";
import Contact from "./components/Page/Contact";
import ScrollParallax from "./components/Page/Common/ScrollParallax";
import bgCoding from "/bg-coding.png";
import bgVector from "/bg-vector.jpg";
import "./style/main.scss";

const { Container } = Layout;

function App() {
  return (
    <>
      <Container style={{ overflow: "hidden" }}>
        <div style={{ position: "relative" }}>
          <Header />
          <BgParticles />
          <Intro />
        </div>

        <FogOverlay />
        <BgSection bgURL={bgVector} />
        <FogOverlay position="top" />

        <ScrollParallax>
          <About />
          <Experiences />
          <Projects />
        </ScrollParallax>

        <FogOverlay />
        <BgSection bgURL={bgCoding} />
        <FogOverlay hasColor position="top" />

        <Contact />
      </Container>

      <ToastMessage />
    </>
  );
}

export default App;
