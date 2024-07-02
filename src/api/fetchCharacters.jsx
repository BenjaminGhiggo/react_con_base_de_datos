//Haremos el get de este enlace https://dummyjson.com/users

//Para trabajar con apis se usar async, wait

const fetchCharacters = async () =>{
  try{
    const response = await fetch("https://dummyjson.com/users");

    const results = await response.json();
    console.log(results.users);

    return results.users;

  } catch (error){
    console.error(error);
  }
}


export default fetchCharacters;

