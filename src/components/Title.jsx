import PropTypes from 'prop-types';
const Title =({text})=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  );
}


//para usar el metodo de props debes declararlo
// esto es para agregar uan vlaida de tipos a las propiedad del componente (tiene similitud con metodos)
Title.propTypes ={
  text:PropTypes.string.isRequired,
};

export default Title;