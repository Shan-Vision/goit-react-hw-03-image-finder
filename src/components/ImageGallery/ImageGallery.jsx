import { GalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';

function ImageGallery({ images, onClick }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          caption={tags}
          onClick={onClick}
        />
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
