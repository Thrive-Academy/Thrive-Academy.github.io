import Card from "react-bootstrap/Card";

const BuildingBlocksToJSX = (content) => {
    let newContent = []

    // create card for each team member
    content.forEach((b) => {
        console.log(b)
        newContent.push((
            <Card className="thrive-card-home">
                <Card.Body>
                <Card.Title>{b.block}</Card.Title>
                <Card.Text>
                    {b.description}
                </Card.Text>
                </Card.Body>
            </Card>
        ))
    })

    return newContent;
}

export default BuildingBlocksToJSX;