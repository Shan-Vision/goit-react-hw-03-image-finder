import PropTypes from 'prop-types';
import {
  Header,
  Form,
  FormButton,
  FormInput,
  FormButtonLabel,
} from './SearchBAr.styled';

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
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
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
