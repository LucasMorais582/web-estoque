import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
}
const MyDropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFile, setSelectedFile ] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSelectedFile(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept:'image/*' })

  return (
    <div className='dropzone' {...getRootProps()}>
    <input {...getInputProps()} accept='image/*'/>
      {
        selectedFile ? <img src={selectedFile} alt=''></img> : (
          <p>
            <FiUpload/>
            Insira a imagem
          </p>
        )
      }
    </div>
  )
}

export default MyDropzone;