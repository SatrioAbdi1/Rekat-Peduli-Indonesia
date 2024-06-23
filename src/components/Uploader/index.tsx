'use client'
import {ReactNode, useState} from 'react'

export const Uploader = ()  => {
    const [file, setFile] = useState(null);


    const onFileChange = e => {
        setFile(e.target.files[0]);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://api.rekat4indonesia.com/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        if(data.success){
            setFilePath(data.filePath);
            setMessage('File uploaded successfully');
        }else{
            setMessage('File uploaded failed');
        }
    }
    return(
        <form>

        </form>

    )
}