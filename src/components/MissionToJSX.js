const MissionToJSX = (content) => {
    let mission = content.find((e) => e.feature === 'mission-statement')

    return (
        <div>
            {mission['content']}
        </div>
    )
}

export default MissionToJSX;