import { Container, Row, Col} from 'react-bootstrap';
import './TwitterCardStyle.css';

function TwitterCard({followers, today}) 
{
    let userHandle = '@nathanf';
    return (
        <div>
            <Container className='social-card'>
                <Row className='icon-and-handle'>
                    <Col>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path fill="#1DA1F2" d="M20 1.924a8.192 8.192 0 01-2.357.646A4.11 4.11 0 0019.448.3a8.22 8.22 0 01-2.606.996A4.096 4.096 0 0013.847 0c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 011.392.752a4.109 4.109 0 001.27 5.478 4.086 4.086 0 01-1.858-.513C.76 7.616 2.122 9.395 4.095 9.79a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.833 2.849A8.25 8.25 0 010 14.41a11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.663-12.205A8.354 8.354 0 0020 1.924z"/></svg>
                    </Col>
                    <Col>
                        <p className='social-handle'>{userHandle}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='followerCount'>{followers}</p>
                        <p>FOLLOWERS</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='followersToday'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                        <p className='followerCount'>{today} today</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TwitterCard