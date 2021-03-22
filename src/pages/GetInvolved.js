import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import CurriculumToJSX from '../components/CurriculumToJSX';
import ContentLoader from '../components/ContentLoader';
import { ListGroup } from 'react-bootstrap';
import TextSectionToJSX from '../components/TextSectionToJSX';

export default function GetInvolved() {
    return (
        <div className="thrive-about-whole">
            <ContentLoader toJsx={TextSectionToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'getting involved'} />
            <ListGroup variant="flush">
                <ContentLoader toJsx={CurriculumToJSX} sheetId={'1dZaxbfnKFBNySOudT8xi3CeW-e2ttD5hoV8o8k5npDM'} tab={'curriculum'} />
            </ListGroup>
            <ResponsiveEmbed style={{height: '100%', marginTop: '5%'}}>
                <iframe style={{height: '100%'}} title="Thrive Sign Up Form" src="https://docs.google.com/forms/d/1Z3lrF4RJzhpCQ6X8-zjiFvZsasnrY46yWW6LjENFEBg/viewform?embedded=true">Loading…</iframe>
            </ResponsiveEmbed> 
        </div>
    )
}