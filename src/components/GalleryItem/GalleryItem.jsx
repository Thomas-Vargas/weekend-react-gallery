const GalleryItem = ({ galleryItem }) => {
  return (
    <div className="gallery-item-container">
      <div className="gallery-img-container">
        <img className='gallery-img' src={galleryItem.path} />
      </div>
      <button>Like</button>
      <p>{galleryItem.likes} people love this!</p>
    </div>
  );
};

export default GalleryItem;
