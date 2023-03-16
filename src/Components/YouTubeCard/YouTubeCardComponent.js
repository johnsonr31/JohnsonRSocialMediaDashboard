import { Container, Row, Col} from 'react-bootstrap';
import './YouTubeCardStyle.css';

function YouTubeCard() 
{
    let subscriberCount = 8239;
    let todayFollowers = 114;
    let userHandle = 'Nathan F.';
    return (
        <div>
            <Container className='social-card'>
                <Row className='icon-and-handle'>
                    <Col>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#C4032B" d="M10 0C4.478 0 0 4.478 0 10c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.7 14.077c-1.75.12-5.652.12-7.402 0-1.896-.13-2.117-1.059-2.131-4.077.014-3.024.237-3.947 2.131-4.077 1.75-.12 5.652-.12 7.403 0 1.897.13 2.117 1.059 2.132 4.077-.015 3.024-.237 3.947-2.132 4.077zM8.334 8.048l4.098 1.949-4.098 1.955V8.048z"/></svg>
                    </Col>
                    <Col>
                        <p className='social-handle'>{userHandle}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='followerCount'>{subscriberCount}</p>
                        <p>SUBSCRIBERS</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='followersToday'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z"/></svg>
                        <p className='followerCount'>{todayFollowers} today</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default YouTubeCard