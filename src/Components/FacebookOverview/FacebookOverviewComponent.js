import { Container, Row, Col} from 'react-bootstrap';
import './FacebookOverview.css';

function FacebookOverviewCard() 
{
    let views = 87;
    let todayFollowers = 12;
    let userHandle = '@nathanf';
    let percent = 0;
    return (
        <div>
            <Container className='overview-card'>
                <Row className='overview-icon'>
                    <Col>
                        <p>Page Views</p>
                    </Col>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
                    </Col>
                </Row>
                <Row className='views-and-percentage'>
                    <Col>
                        <p className='view-count'>{views}</p>
                    </Col>
                    <Col className='percentage-number'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                        <p>{percent}%</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FacebookOverviewCard