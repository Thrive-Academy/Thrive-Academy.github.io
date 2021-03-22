const TextSectionToJSX = (content) => {
    let newContent = []

    // create card for each team member
    content.forEach((s) => {
        newContent.push(
            <div className="thrive-about-section">
                <h1>{s.title}</h1>
                <div>
                    {s.content}
                </div>
            </div>
        )
    })

    return newContent;
}

export default TextSectionToJSX;