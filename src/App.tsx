import { UI } from "@/components";
import Header from "./components/Page/Common/Header";
import "./style/main.scss";

const { Layout } = UI;

const { Container } = Layout;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
