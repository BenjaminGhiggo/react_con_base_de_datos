import { useEffect, useState } from "react";
import fetchCharacters from "../api/fetchCharacters";

const Characters =()=>{
  const [characters, setCharacters] = useState([]);
  useEffect(()=>{
    const getCharacters = async () =>{
      // guardaremos los datos de los personajes en data
      const data = await fetchCharacters();

      //hacemos que characters empiece como array vacion [], luego tomara los valores de data
      setCharacters(data);
    }
    getCharacters();
    //Fetch de muestra de super api}}
    // console.log("Haremos un fetch");
  },[]);
  
  return(
    <div>
      {characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt="" height="200px" width="200px"/>
              <div>{character.firstName} {character.age}{" "}</div>
            </li>
            ))}
        </ul>
      ):(
        <p>Loading Characters</p>
      )}
    </div>
  );
};

export default Characters;