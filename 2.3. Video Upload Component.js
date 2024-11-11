// VideoUpload.js

import React, { useState } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video_file', file);

    await axios.post('/api/videos/', formData);
    alert('Video generation started!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Generate Video</button>
    </form>
  );
}

export default VideoUpload;
