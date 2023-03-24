import { useState } from "react";
import axios from 'axios';

const GalleryItem = ({ galleryItem, getGallery }) => {
  const [toggle, setToggle] = useState(true)

  const handleLike = (id) => {
    axios
      .put(`gallery/like/${id}`,  {})
      .then(result => {
        console.log(result);
        console.log('successfully updated like');
        getGallery();
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="gallery-item-container">
      <div onClick={() => setToggle(!toggle)} className="gallery-img-container">
        {toggle ? <img className='gallery-img' src={galleryItem.path} /> : <p>{galleryItem.description}</p>}
      </div>
      <button onClick={() => handleLike(galleryItem.id)}>Like</button>
      <p>{galleryItem.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;