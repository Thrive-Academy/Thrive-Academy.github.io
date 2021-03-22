import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

const BuildingBlocksToJSX = (content) => {
    let newContent = []

    // create card for each team member
    content.forEach((b) => {
        newContent.push((
            <Col xs={12} md={6} lg={4} style={{ marginTop: '1em', marginBottom: '1em' }}>
                <Card className="thrive-card-home">
                    <Card.Body>
                    <Card.Title>{b.block}</Card.Title>
                    <Card.Text>
                        {b.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))
    })

    return newContent;
}

export default BuildingBlocksToJSX;