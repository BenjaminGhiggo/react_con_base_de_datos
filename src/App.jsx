import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.scss";
import Characters from './pages/Characters';
import Home from './pages/Home';

function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<Home />}/>
            <Route path="/characters" element={<Characters />}/>

          </Route>
        </Routes>
      </Router>


    </div>
  );
}

function Layout (){
  return(
    <>
    {/* Definimos el nav, el cual estara destinado a la navegacion */}
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/characters">Characters</Link>
      </nav>
      <Outlet/>
    </> 
  );
}

export default App;