import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryitem.styled';

function ImageGalleryItem({ webformatURL, caption, onClick, largeImageURL }) {
  return (
    <GalleryItem
      onClick={() => {
        onClick(largeImageURL);
      }}
    >
      <GalleryItemImage src={webformatURL} alt={caption} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
