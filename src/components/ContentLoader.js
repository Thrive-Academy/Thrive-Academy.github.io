import React, { useState, useEffect } from 'react';
import { loadResults } from '../utils/CMSHandler';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';

let defaultJsxContent = (
    <Jumbotron style={{display: 'flex', justifyContent: 'center'}}>
        <Spinner animation="border" role="status" size="big" aria-hidden="false">
            <span className="sr-only">Loading Content...</span>
        </Spinner>
    </Jumbotron>
)

const ContentLoader = (props) => {
    const [hasLoaded, updateHasLoaded] = useState(false);
    const [content, updateContent] = useState(null);
    const [jsxContent, updateJsxContent] = useState(defaultJsxContent)

    async function fetchContent() {
        loadResults(props.sheetId, (results) => {
            updateContent(results);
            updateHasLoaded(true);
        }, props.tab)
    }

    const toJsx = props.toJsx;

    useEffect(() => {
        if (!hasLoaded) {
            fetchContent()
        }
        else {
            if (jsxContent === defaultJsxContent) {
                updateJsxContent(toJsx(content))
            }
        }
    }, [hasLoaded, fetchContent, jsxContent, toJsx, content])

    return jsxContent;
}

export default ContentLoader;