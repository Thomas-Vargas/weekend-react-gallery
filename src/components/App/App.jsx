import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
      .then(result => {
        //console.log('success getting gallery data');
        setGallery(result.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryForm getGallery={getGallery} />
      <GalleryList getGallery={getGallery} gallery={gallery} />
    </div>
  );
}

export default App;
