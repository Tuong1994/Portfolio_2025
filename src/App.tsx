import { UI } from "@/components";
import Header from "./components/Page/Common/Header";
import "./style/main.scss";
import { EMode } from "./components/UI/Layout/Context";

const { Layout } = UI;

const { Container } = Layout;

function App() {
  return (
    <Container theme={EMode.DARK}>
      <Header />
    </Container>
  );
}

export default App;
