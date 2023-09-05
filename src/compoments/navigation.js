import React from 'react';
import '../styles/compoments/navigation.css';
import "../styles/compoments/navigation.css"
import {Link} from 'react-router-dom';


const navigation = () => {
    return (
  <div className='navbar pt-3 pb-3 bg-primary text-center w-100'>

       <ul className='d-flex justify-content-around align-items-center text-white w-100'>
      
          <Link to = "Home" className='text-white'>Home</Link>
          
          <Link to = "FilmsPopulaires" className='text-white'>Films Populaire</Link>
      
          <Link to = "EmissionTv" className='text-white'>Emission TV</Link>                 
     
          <Link to = "FilmsAvenir" className='text-white'>Films A Venir</Link>

         <form class="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-white bg-success text-white" type="submit">Search</button>
          </form>
      </ul>
      
  </div>
    
    );
};

export default navigation;