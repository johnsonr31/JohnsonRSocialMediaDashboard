import { Container, Row, Col } from 'react-bootstrap';
import FacebookCard from '../FacebookCard/FacebookCardComponent';
import InstagramCard from '../InstagramCard/InstagramCardComponent';
import TwitterCard from '../TwitterCard/TwitterCardComponent';
import YouTubeCard from '../YouTubeCard/YouTubeCardComponent';
import FacebookOverviewCard from '../FacebookOverview/FacebookOverviewComponent';
import './MainDashStyle.css';

function MainDash ()
{
    return (
        <div>
            <Container>
                <Row className='card-row'>
                    <Col>
                        <FacebookCard />
                    </Col>
                    <Col>
                        <TwitterCard />
                    </Col>
                    <Col>
                        <InstagramCard />
                    </Col>
                    <Col>
                        <YouTubeCard />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='overview-row'>
                    <Col>
                        <h2>Overview - Today</h2>
                    </Col>
                </Row>
                <Row className='overview-row'>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                    <Col>
                        <FacebookOverviewCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainDash