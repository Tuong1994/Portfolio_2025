import { ToastMessage, Layout } from "./components/UI";
import { useViewpoint } from "./hooks";
import Header from "./components/Page/Common/Header";
import BgParticles from "./components/Page/Common/BgParticles";
import BgAvatar from "./components/Page/Common/BgAvatar/BgAvatar";
import BgSection from "./components/Page/Common/BgSection";
import FogOverlay from "./components/Page/Common/FogOverlay";
import Intro from "./components/Page/Intro";
import About from "./components/Page/About";
import Experiences from "./components/Page/Experiences";
import Projects from "./components/Page/Projects";
import Contact from "./components/Page/Contact";
import ScrollParallax from "./components/Page/Common/ScrollParallax";
import SloganLoveCoding from "./components/Page/Common/Slogan/SloganLoveCoding";
import SloganParagraph from "./components/Page/Common/Slogan/SloganParagraph";
import bgCoding from "/bg-coding.png";
import bgVector from "/bg-vector.jpg";
import "./style/main.scss";

const { Container } = Layout;

function App() {
  const { isPhone, isTablet, isLaptop } = useViewpoint();

  const responsive = isPhone || isTablet || isLaptop;

  return (
    <>
      <Container style={{ overflow: "hidden" }}>
        <div style={{ position: "relative" }}>
          <Header />
          {!responsive && <BgAvatar />}
          <BgParticles id="bannerParticles" />
          <Intro />
        </div>

        <FogOverlay />
        <BgSection bgURL={bgVector}>
          <SloganLoveCoding />
        </BgSection>
        <FogOverlay position="top" />

        <ScrollParallax>
          <About />
          <Experiences />
          <Projects />
          <FogOverlay position="top" />
        </ScrollParallax>

        <FogOverlay />
        <BgSection bgURL={bgCoding}>
          <SloganParagraph />
        </BgSection>
        <FogOverlay hasColor position="top" />

        <div style={{ position: "relative" }}>
          <BgParticles id="contactParticles" style={{ zIndex: 2 }} />
          <Contact />
        </div>
      </Container>

      <ToastMessage />
    </>
  );
}

export default App;
