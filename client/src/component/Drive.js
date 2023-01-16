import React, { useState } from "react";


function Drive() {
    const [selectedFiles, setSelectedFiles] = useState(null)

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

    const fetchFile = async (tn) => {
        const response = await fetch('http://localhost:5000/readFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textName: tn
            })
        })
            .then(res => res.text())
            .then(data => {
                const content = document.getElementById('content')
                content.innerHTML = data
            })
            .catch(err => console.log(err))
    }

    const deleteMyFile = async (tn) => {
        const response = await fetch('http://localhost:5000/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textName: tn
            })
        })
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const showAllTheFiles = async (tn) => {
        let obj = {
            textName: tn
        }
        const response = await fetch('http://localhost:5000/showFilesName', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                const filesName = document.getElementById('files')
                filesName.innerHTML = data 
            })
            .catch(err => console.log(err))
    }


    const showAllFiles = () => {
        showAllTheFiles()
    }

    const showFile = () => {
        let fileName = prompt('name of the file?');
        fetchFile(fileName)
    }
    const deleteFile = () => {
        let fileName = prompt('name of the file')
        deleteMyFile(fileName)
    }

    const handleFileSelect = e => {
        setSelectedFiles(e.target.files[0])
    }
    const handleUpload = () => {
        if (!selectedFiles) {
            console.log('no files selected')
            return;
        }

        const formData = new FormData()
        formData.append('file', selectedFiles)
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
            <button className="butt" onClick={addText}>create new file</button>
            <button className="butt" onClick={showAllFiles}>Show all Files</button>
            <div id="files"></div>
            <button className="butt" onClick={showFile}>Show info File</button>
            <div id="content"></div>
            <button className="butt" onClick={deleteFile}>delete File</button>
            <input className="butt" type={"file"} onChange={handleFileSelect}></input>
            <button className="butt" onClick={handleUpload}>uploadFiles</button>
        </div>
    )
}

export default Drive;