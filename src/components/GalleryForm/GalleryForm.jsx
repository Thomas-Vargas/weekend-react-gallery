import { useState } from "react";
import axios from 'axios';

const GalleryForm = ({ getGallery }) => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('')

  const addToGallery = () => {
    axios
      .post('/gallery', {
        path: url,
        description: description
      })
      .then(result => {
        console.log(result);
        getGallery();
        setDescription('');
        setUrl('');
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="form-container">
      <input value={url} type="text" placeholder="url" onChange={(e) => setUrl(e.target.value)} />
      <input value={description} type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={addToGallery}>Add to Gallery</button>
    </div>
  )
}

export default GalleryForm;