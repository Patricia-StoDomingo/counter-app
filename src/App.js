import { Container } from "react-bootstrap";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="outer">
      <Counter />
    </Container>
  );
}

export default App;
