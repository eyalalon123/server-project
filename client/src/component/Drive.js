import React, { useState } from "react";


function Drive() {
    const [selectedFiles , setSelectedFiles ] = useState(null)

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

    const fetchFile = async (tn) =>{
        const response = await fetch('http://localhost:5000/readFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textName: tn
            })
        });
    }
    


    const showFile =  () => {
        let fileName = prompt('name of the file?');
        fetchFile(fileName)
    }

    const handleFileSelect = e => {
        setSelectedFiles(e.target.files[0])
    }
    const handleUpload = () => {
        if(!selectedFiles){
            console.log('no files selected')
            return;
        }
    
    const formData = new FormData()
    formData.append('file',selectedFiles)
    fetch('http://localhost:5000/upload', {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    }
    return (
        <div>
            <button onClick={addText}>create new file</button>
            <button onClick={showFile}>Show File</button>
            <input type={"file"} onChange={handleFileSelect}></input>
            <button onClick={handleUpload}>uploadFiles</button>
        </div>
    )
}

export default Drive;