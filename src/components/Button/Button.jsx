
function Button({ caption, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {caption}
    </button>
  );
}
export default Button;
