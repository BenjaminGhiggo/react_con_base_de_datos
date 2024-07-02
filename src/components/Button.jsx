import PropTypes from 'prop-types';
const Button = ({text = "Click me", onClick}) => {
  return(
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

Button.propTypes = {
  text:PropTypes.string.isRequired,
  onClick:PropTypes.string.isRequired, //esto tambien podria ser tipo number, no necesariamente string
};

export default Button;