const BuildingBlocksToJSX = (content) => {
    let mission = content.find((e) => e.feature === 'mission-statement')

    return (
        <div>
            {mission['mission statement']}
        </div>
    )
}

export default BuildingBlocksToJSX;