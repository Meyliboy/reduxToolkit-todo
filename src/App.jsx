import { Container, Content, Footer, Header } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./App.css";
import Forma from "./components/Layouts/form/Forma";
import Main from "./components/Layouts/Main/Main";
import FooterPage from "./components/Layouts/footer/Footer";

function App() {
  return (
    <Container style={{ padding: "20px" }}>
      <div className="wrapper">
        <div className="container">
          <Header>
            <Forma />
          </Header>
          <Content>
            <Main />
          </Content>
        </div>
      </div>
      <Footer>
        <FooterPage />
      </Footer>
    </Container>
  );
}

export default App;
