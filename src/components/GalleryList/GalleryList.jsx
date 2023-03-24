const GalleryList = ({ gallery }) => {
  console.log(gallery);
  return (
    <div>
      {gallery.map((image) => (
        <div key={image.id}>
          <img src={image.path}/>
        </div>
      ))}
    </div>
  )
}

export default GalleryList