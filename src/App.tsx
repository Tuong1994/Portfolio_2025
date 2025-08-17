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
import useParticles from "./components/Page/Common/BgParticles/useParticles";
import bubbleOptions from "./components/Page/Common/BgParticles/bubbleOptions";
import "./style/main.scss";

const { Container } = Layout;

function App() {
  const { isPhone, isTablet, isLaptop } = useViewpoint();

  const responsive = isPhone || isTablet || isLaptop;

  const { particlesTheme } = useParticles(true);

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
        <BgSection bgURL="/bg-vector.jpg">
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
        <BgSection bgURL="/bg-coding.png">
          <SloganParagraph />
        </BgSection>
        <FogOverlay hasColor position="top" />

        <div style={{ position: "relative" }}>
          <BgParticles
            hasColor
            id="contactParticles"
            rootClassName="bg-particles-contact"
            options={bubbleOptions(particlesTheme.background, particlesTheme.particlesColor)}
          />
          <Contact />
        </div>
      </Container>

      <ToastMessage />
    </>
  );
}

export default App;
