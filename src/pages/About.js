import React from 'react';
import Row from 'react-bootstrap/Row';
import ContentLoader from '../components/ContentLoader';
import Container from 'react-bootstrap/Container';
import TextSectionToJSX from '../components/TextSectionToJSX';
import TeamToJSX from '../components/TeamToJSX';

export default function About(props) {
    return (
        <>
            <div className="thrive-about-whole">
                <ContentLoader toJsx={TextSectionToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'about'} />
                <div className="thrive-about-section">
                    <h1>Our Team</h1>
                    <Container>
                        <Row>
                            <ContentLoader toJsx={TeamToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'team'} />
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}