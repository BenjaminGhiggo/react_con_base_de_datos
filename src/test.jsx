import { useEffect, useState } from 'react';
import './App.scss';
import Button from './components/Button';
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0);
  console.log(count);


  //realiza una accion cada que hay un cambio en la varible que se le envia
  useEffect(() =>{
    // console.log("useEffect is Here!!, this use when you need changes");
    //.Todo fech de muestra super api
  },[count]);


  return (
    <>
    <div className='App'>
      <Title text="Texto del componente 1" />
      <Title text="Texto del componente 2" />
      <Title text="Texto del componente 3" />
{/* Estamos pasado parametros al objeto Button para que con su metodo los devuelva mostrado */}
      {/* <Button/> */}
      <br />
      <Button text="see more" />
      <br />
      <Button onClick={()=> setCount(count+1)} text={`Numero de clickeos`} />
      <Title text={count} />
    </div>
    </>
  );
}

export default App