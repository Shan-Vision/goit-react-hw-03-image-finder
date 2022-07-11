import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import { fetchImagesByName } from 'components/service/image-api';


class App extends Component {
  state = {
    images: [],
    searchName: '',
    status: 'idle',
    page: 1,
    error: null,
  };
  componentDidUpdate = (_, prevState) => {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;
    const currentpage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || currentpage !== nextPage) {
      this.setState({ status: 'pending' });
      fetchImagesByName(nextName)
        .then(data => {
          return this.setState((state, props) => {
            return {
              images: [...state.images, ...data],
              page: state.page || nextPage,
              status: 'resolved',
            };
          });
        })
        .catch(error => this.setState({ status: 'rejected' }));
    }
  };

  componentDidMount = () => {
    // this.setState({ isLoading: true });
  };

  handleSubmit = ({ imageName }) => {
    this.setState(state => ({
      images: [],
      searchName: imageName,
      page: 1,
    }));
  };
  handleClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle' && images.length === 0) {
      console.log(images);
      return (
        <>
          <SearchBar onSubmit={this.handleSubmit} />
          <div>Enter your image name</div>
        </>
      );
    }
    if (status === 'pending') {
      return (
        <>
          <SearchBar onSubmit={this.handleSubmit} />
          <div>Loading...</div>
        </>
      );
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <SearchBar onSubmit={this.handleSubmit} />
          {images.length > 0 && <ImageGallery onImageData={images} />}
          <Button onClick={this.handleClick} caption="Load More" />
          <GlobalStyle />
        </>
      );
    }
  }
}

export default App;
