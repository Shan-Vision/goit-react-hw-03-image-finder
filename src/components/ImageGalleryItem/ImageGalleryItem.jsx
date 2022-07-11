import { GalleryItem, GalleryItemImage } from './ImageGalleryitem.styled';

function ImageGalleryItem({ largeImage, caption }) {
  return (
    <GalleryItem>
      <GalleryItemImage src={largeImage} alt={caption} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
