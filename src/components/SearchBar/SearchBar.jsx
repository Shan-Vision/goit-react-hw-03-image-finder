import { Component } from 'react';
import {
  Header,
  Form,
  FormButton,
  FormInput,
  FormButtonLabel,
} from './SearchBAr.styled';

class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    const { value } = event.currentTarget;
    this.setState({ imageName: value.toLowerCase() });
  };

  handleNameSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Wrong image name');
      return;
    }
    this.props.onSubmit({ imageName: this.state.imageName });
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleNameSubmit}>
          <FormButton type="submit">
            <FormButtonLabel>Search</FormButtonLabel>
          </FormButton>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </Form>
      </Header>
    );
  }
}

export default SearchBar;
