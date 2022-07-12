import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { mapper } from 'utilits/mapper';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button/';
import api from '../service';
import Modal from 'components/Modal';
import Loader from 'components/Loader';

class App extends Component {
  state = {
    images: [],
    searchName: '',
    isLoading: false,
    page: 1,
    error: null,
    largeImageURL: null,
  };

  async componentDidUpdate(_, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevImages = prevState.images;
    const nextImages = this.state.images;

    if (prevName !== nextName || nextPage > prevPage) {
      this.setState({ isLoading: true });

      try {
        const { hits } = await api.fetchImages(nextName, nextPage);
        const updatedImages = mapper(hits);

        this.setState(state => ({
          images: state.images
            ? [...this.state.images, ...updatedImages]
            : updatedImages,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevImages !== nextImages) {
      window.scrollBy({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;
    const query = form.name.value;
    const prevName = this.state.searchName;
    if (prevName === query || query.trim() === '') {
      return;
    }

    this.setState(state => ({
      images: [],
      searchName: query,
      page: 1,
    }));
  };

  handleLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  handleModalOpen = image => {
    this.setState({ largeImageURL: image });
  };

  handleModalClose = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, isLoading, error, largeImageURL } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />

        {error && <div>Opps, wrong picture name </div>}

        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.handleModalOpen} />
        )}

        {isLoading && <Loader title="Loading" />}

        {images.length !== 0 && (
          <Button onClick={this.handleLoadMore} caption="Load More" />
        )}

        {largeImageURL && (
          <Modal onClose={this.handleModalClose}>
            <img src={largeImageURL} alt="Large type" />
          </Modal>
        )}

        <GlobalStyle />
      </>
    );
  }
}

export default App;
