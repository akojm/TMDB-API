
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./compoments/pages/Home";
import FilmsPopulaires  from "./compoments/pages/FilmsPopulaires"
import Navigation from "./compoments/navigation";
import EmissionTv from './compoments/pages/EmissionTv';
import FilmsAvenir from './compoments/pages/FilmsAvenir'

function App() {
  return (
    <div className="App">
     <header>     
       <Navigation />
      <Routes>
        <Route path='Home' element ={<Home/>}/>
        <Route path='FilmsPopulaires' element ={<FilmsPopulaires/>}/>
        <Route path='EmissionTv' element ={<EmissionTv/>}/>
        <Route path='FilmsAvenir' element ={<FilmsAvenir/>}/>
      </Routes>
      </header> 
    </div>
  );
}

export default App;
