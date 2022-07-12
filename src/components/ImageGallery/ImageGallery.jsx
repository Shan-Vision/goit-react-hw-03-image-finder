import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} largeImage={webformatURL} caption={tags} />
      ))}
    </GalleryList>
  );
}

export default ImageGallery;
