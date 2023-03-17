import { Container, Row, Col } from 'react-bootstrap';
import FacebookCard from '../FacebookCard/FacebookCardComponent';
import InstagramCard from '../InstagramCard/InstagramCardComponent';
import TwitterCard from '../TwitterCard/TwitterCardComponent';
import YouTubeCard from '../YouTubeCard/YouTubeCardComponent';
import FacebookOverviewCard from '../FacebookOverview/FacebookOverviewComponent';
import './MainDashStyle.css';
import '../DarkModeStyle/darkMode.css'
import Header from '../Header/HeaderComponent';
import { useState, useEffect } from 'react';

function MainDash ()
{
    const [colorMode, setColorMode] = useState('light');
    const toggleDarkMode = () => {
        if(colorMode === 'light'){
            setColorMode('dark');
        }else{
            setColorMode('light');
        }
    }
    useEffect(() => {
        document.body.className = colorMode;
    }, [colorMode]);
    return (
        <div>
            <Container className={colorMode ? 'header light' : 'header dark'}>
                <Header toggle={toggleDarkMode} />
                <Row className='card-row'>
                    <Col>
                        <FacebookCard />
                    </Col>
                    <Col>
                        <TwitterCard followers={1044} today={99} />
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