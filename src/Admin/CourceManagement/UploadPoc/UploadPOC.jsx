import React, { useState } from 'react';
import axios from 'axios';
import styles from './UploadPOC.module.css';  // Import the CSS module
import Sidebar from '../../AdminSidebar/AdminSidebar';

const UploadPOC = () => {
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState('');
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !courseId) {
      setMessage('Please provide both a file and a course ID.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('course_id', courseId);  // Send course_id in the body

    try {
      // Upload file to the backend (which will use Filestack)
      const backendResponse = await axios.post('http://localhost:8080/api/upload-poc', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      setMessage(`Success: ${backendResponse.data.message} \n URL: ${backendResponse.data.url}`);
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setUploadProgress(0);
    }
  };

  return (
    <>
    <Sidebar
     
    />
    <div className={styles.container}>
      <h2 className={styles.heading}>Upload Proof of Concept (POC)</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>Course ID:</label>
        <input
          type="text"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className={styles.formInput}
        />
        
        <label className={styles.formLabel}>File:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className={styles.formInput}
        />
        
        <button type="submit" className={styles.formButton}>Upload</button>
      </form>

      {uploadProgress > 0 && (
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFiller}
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {message && (
        <div className={`${styles.message} ${message.startsWith('Success') ? styles.success : styles.error}`}>
          {message}
        </div>
      )}
    </div>
    </>
  );
};

export default UploadPOC;
