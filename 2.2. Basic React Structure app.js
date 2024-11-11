// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoUpload from './components/VideoUpload';
import VideoList from './components/VideoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoUpload />} />
        <Route path="/videos" element={<VideoList />} />
      </Routes>
    </Router>
  );
}

export default App;
