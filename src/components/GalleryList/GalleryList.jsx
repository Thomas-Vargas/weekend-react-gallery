import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = ({ gallery, getGallery }) => {
  // console.log(gallery);
  return (
    <div className="wrapper">
      <div className="gallery-container">
        {gallery.map((item) => (
          <GalleryItem
            getGallery={getGallery}
            key={item.id}
            galleryItem={item}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryList;
