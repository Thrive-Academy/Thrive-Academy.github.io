import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

let textLightClass = "thrive-home-text-light";
let textDarkClass = "thrive-home-text-light";
let firstClass = "first-home-text";

const ThriveValuesToJSX = (content) => {
    let newContent = []

    // create card for each team member
    content.forEach((v, index) => {
        let isLight = index % 2 === 1;

        let valueClasses = index === 0 ? firstClass + " " : " ";
        valueClasses += isLight ? textLightClass : textDarkClass;

        if (isLight) {
            newContent.push(
                <Jumbotron className={valueClasses}>
                    <Container>
                        <Row>
                            <Col sm>
                                <h3>{v.value}</h3>
                                {v.description}
                            </Col>
                            <Col sm>
                                <img alt={v['image-alt']} src={v.image} className="thrive-placeholder-small text-box-image"/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            )
        }
        else {
            newContent.push(
                <div className={valueClasses}>
                    <Container>
                        <Row>
                            <Col sm>
                                <img alt={v['image-alt']} src={v.image} className="thrive-placeholder-small text-box-image"/>
                            </Col>
                            <Col sm>
                                <h3>{v.value}</h3>
                                {v.description}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    })

    return newContent;
}

export default ThriveValuesToJSX;