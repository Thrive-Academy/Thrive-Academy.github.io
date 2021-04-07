import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const TeamToJSX = (content) => {
    let newContent = []

    // create card for each team member
    content.forEach((m) => {
        newContent.push(
            <Col xs={12} md={6} lg={4} style={{ marginTop: '5%', marginBottom: '5%' }}>
                <Card style={{height: '100%'}}>
                    <Card.Img variant="top" src={m.image} alt={m['image-alt']} />
                    <Card.Body>
                    <Card.Title>{m.name}</Card.Title>
                    <Card.Text>
                        {m.bio}
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link rel="noreferrer" href={`mailto: ${m.email}`}>{m.email}</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{m.title}</small>
                    </Card.Footer>
                </Card>
            </Col>
        )
    })

    return newContent;
}

export default TeamToJSX;