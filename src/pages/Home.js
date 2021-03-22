import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { PeopleFill, BriefcaseFill, CalendarWeekFill } from 'react-bootstrap-icons';
import ThriveValuesToJSX from '../components/ValuesToJSX';
import BuildingBlocksToJSX from '../components/BuildingBlocksToJSX';
import MissionToJSX from '../components/MissionToJSX';
import ContentLoader from '../components/ContentLoader';

export default function Home() {
    return (
        <div style={{minHeight: '100%', width: '100%'}}>
            <Container style={{height: '45em', maxWidth: '100%', margin: 0, padding: 0}}>
                <Row style={{height: '100%', margin: 0, padding: 0}}>
                    <Col sm={4} style={{margin: 0, padding: '5%'}}>
                        <ContentLoader toJsx={MissionToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'home individual'} />
                        <Image style={{position: 'absolute', bottom: '5%', width: '70%'}} className="thrive-home-responsive" src="/thrive_logo.png" fluid />
                    </Col>
                    <Col sm={8} style={{height: '100%', margin: 0, padding: 0}}>
                        <div className='homeImage'>
                            <span className='homeLoopText'>
                                <div>
                                    <CalendarWeekFill color="#d8564bbb" />
                                    <span>Life Skills</span>
                                </div>
                                <div>
                                    <PeopleFill color="#d8564bbb" />
                                    <span>Social Skills</span>
                                </div>
                                <div>
                                    <BriefcaseFill color="#d8564bbb" />
                                    <span>Pre-Vocational Skills</span>
                                </div>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>

            <ContentLoader toJsx={ThriveValuesToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'home values'} />

            <Container className="thrive-about-section">
                <Row>
                    <ContentLoader toJsx={BuildingBlocksToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'home building blocks'} />
                </Row>
            </Container>
        </div>
    )
}