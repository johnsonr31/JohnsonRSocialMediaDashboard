import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import MainDash from './Components/MainDash/MainDashComponent';

function App() {
  return (
    <div>
      <Container>
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
