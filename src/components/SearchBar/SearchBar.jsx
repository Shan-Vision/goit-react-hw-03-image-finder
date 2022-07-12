import PropTypes from 'prop-types';
import { Header, Form, FormButton, FormInput } from './SearchBAr.styled';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';

const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <FormButton type="submit" aria-label="search">
          <SearchIcon width="20" height="20" fill="black" />
        </FormButton>

        <FormInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
