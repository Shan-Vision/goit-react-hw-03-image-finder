import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { mapper } from 'components/utilits/mapper';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import api from './service';

class App extends Component {
  state = {
    images: [],
    searchName: '',
    isLoading: false,
    page: 1,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

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
  }

  handleSubmit = event => {
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

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {error && <div>Opps, wrong picture name </div>}
        {images.length !== 0 && <ImageGallery images={images} />}
        {isLoading && <div>Loading...</div>}
        {images.length !== 0 && (
          <Button onClick={this.handleLoadMore} caption="Load More" />
        )}
        <GlobalStyle />
      </>
    );
  }
}

export default App;
