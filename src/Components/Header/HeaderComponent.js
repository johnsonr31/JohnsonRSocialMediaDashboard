import { Container, Row, Col } from 'react-bootstrap';
import './headerStyle.css';

function Header() 
{
    let totalFollowers = 0;
    return(
        <div>
            <Container className='header'>
                <Row className='title-and-switch'>
                    <Col>
                        <h2>Social Media Dashboard</h2>
                    </Col>
                    <Col>
                        <Row className='toggle-row'>
                            <Col>
                                <p className='toggle-text'>Dark Mode</p>
                            </Col>
                            <Col>
                                <label className='dark-toggle'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                            </label>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Total Followers: {totalFollowers}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header