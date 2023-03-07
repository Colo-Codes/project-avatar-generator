import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DropZone() {
    const [isUploadingFile, setIsUploadingFile] = useState(false);
    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        const filesData = acceptedFiles.map(file => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onloadstart = () => setIsUploadingFile(true);
            reader.onloadend = () => setIsUploadingFile(false);
            reader.onload = () => {
                const binaryStr = reader.result;
                console.log('>>> reader', reader);
                console.log('>>> binaryStr', binaryStr);
            };
            reader.readAsArrayBuffer(file);

            return { name: file.name, size: file.size };
        });

        setFiles(filesData);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    const uploadedFiles = (
        <>
            <h3>Uploaded files:</h3>
            <ul>
                {files.map(file => (
                    <li key={`${file.name}_${file.size}`}>
                        {file.name} - {file.size} bytes
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
            <div>{isUploadingFile && <p>Uploading file...</p>}</div>
            <div>{files.length > 0 && uploadedFiles}</div>
        </>
    );
}
