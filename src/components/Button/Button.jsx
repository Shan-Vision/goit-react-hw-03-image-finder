import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

const Button = ({ caption, onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      {caption}
    </LoadMore>
  );
};


Button.propTypes = {
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Button;
