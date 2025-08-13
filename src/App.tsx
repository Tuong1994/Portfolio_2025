import { UI } from "@/components";
import Header from "./components/Page/Common/Header";
import BgParticles from "./components/Page/Common/BgParticles";
import Intro from "./components/Page/Intro";
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
    </Container>
  );
}

export default App;
