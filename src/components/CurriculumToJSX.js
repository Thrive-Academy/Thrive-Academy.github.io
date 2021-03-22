import ListGroup from 'react-bootstrap/ListGroup';
import * as Icons from 'react-bootstrap-icons';

const CurriculumToJSX = (content) => {
    let currContent = [];
    
    content.forEach((e) => {
        const Icon = Icons[e.icon];
        
        currContent.push((
            <ListGroup.Item>
                <Icon />
                <span style={{marginLeft: '1%'}}>{e.title}</span>
            </ListGroup.Item>
        ));
    })

    return currContent;
}

export default CurriculumToJSX;