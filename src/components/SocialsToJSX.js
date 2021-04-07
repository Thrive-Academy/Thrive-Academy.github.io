import Nav from 'react-bootstrap/Nav';

const SocialsToJSX = (content) => {
    let newContent = [];

    content.forEach((e) => {
        newContent.push((
            <Nav.Link href={e.link} rel="noreferrer" target="_blank">{e.title}</Nav.Link>
        ))
    })

    return newContent;
}

export default SocialsToJSX;