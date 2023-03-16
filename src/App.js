import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header/HeaderComponent';
import MainDash from './Components/MainDash/MainDashComponent';

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainDash />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
