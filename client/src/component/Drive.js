import React from "react";

function Drive() {
    async function createFiles(tn, t) {
        const response = await fetch('http://localhost:5000/newFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textName: tn,
                text: t
            })
      
        });
    }
    const addText = () => {
        let fileName = prompt('are u gay?');
        let text = prompt('are u sure?');
        createFiles(fileName, text)
    }
    
    return (
        <div>
            <button onClick={addText}>create new file</button>
        </div>
    )
}

export default Drive;