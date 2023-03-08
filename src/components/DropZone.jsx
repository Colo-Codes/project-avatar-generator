import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../styles/DropZone.module.css';

export default function DropZone({ setMessage }) {
    const [isUploadingFile, setIsUploadingFile] = useState(false);
    const [files, setFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);

    useEffect(() => {
        setMessage(files.length > 0 && uploadedFiles);
    }, [files, setMessage]);

    const onDrop = useCallback((acceptedFiles, fileRejections) => {
        const acceptedFilesData = acceptedFiles.map(file => {
            const reader = new FileReader();

            // FIXME: handle errors
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onloadstart = () => setIsUploadingFile(true);
            reader.onloadend = () => setIsUploadingFile(false);
            reader.onload = () => {
                const binaryStr = reader.result;
                // FIXME: Limit image size
            };
            reader.readAsArrayBuffer(file);

            return { name: file.name, size: file.size };
        });

        const fileRejectionsData = fileRejections.map(file => {
            return { name: file.file.name, error: file.errors[0].message };
        });

        setFiles(acceptedFilesData);
        setRejectedFiles(fileRejectionsData);
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        acceptedFiles,
        fileRejections,
    } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/gif': ['.gif'],
            'image/svg+xml': ['.svg'],
        },
        onDrop,
    });

    const uploadFilesButton = (
        <button className={styles.uploadFilesButton} type='button'>
            Upload images
        </button>
    );

    const uploadedFiles = (
        <>
            <h3>Uploaded images:</h3>
            <ul>
                {files.map(file => (
                    <li key={`${file.name}_${file.size}`}>
                        {file.name}
                        <span className={styles.secondaryText}>
                            {` - ${file.size} bytes`}
                        </span>
                    </li>
                ))}
            </ul>
            {rejectedFiles.length > 0 && (
                <>
                    <h3>Rejected files:</h3>
                    <ul>
                        {rejectedFiles.map(file => (
                            <li key={`${file.name}_${file.size}`}>
                                {file.name}
                                <span className={styles.secondaryText}>
                                    {` - ${file.error}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );

    return (
        <>
            <div
                {...getRootProps()}
                className={`${styles.dropZone} ${
                    isDragActive && styles.dropZoneActive
                }`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    uploadFilesButton
                )}
            </div>
            <div>{isUploadingFile && <p>Uploading images...</p>}</div>
        </>
    );
}
