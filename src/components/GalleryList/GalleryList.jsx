import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = ({ gallery }) => {
  console.log(gallery);
  return (
    <div className="gallery-container">
      {gallery.map((item) => (
        <GalleryItem key={item.id} galleryItem={item} />
      ))}
    </div>
  )
}

export default GalleryList