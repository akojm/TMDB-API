import React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/compoments/cardEmission.css'
import axios from 'axios';
import CardsEmission from './CardsEmission';

const FilmsAvenir = () => {
    // STATES //
const [moviesPopular, setMoviesPopular]= useState([]);
const apiUrl= "https://api.themoviedb.org/3/movie/popular?api_key=dfc5d944999b99a8deb52a496b1297d2";

console.log(apiUrl);

useEffect(()=>{
    axios
    .get(apiUrl)
    .then((response)=>
    setMoviesPopular(response.data.results));
    //console.log(response.data.results));

},[])
   
    
// MONTAGES //
    return (
        <div>
             <h1>Search your movies ..</h1> 
            <h2 className='text-center text-white  bg-primary w-50' >Les films à venir ..</h2>
            <ul className='mt-5'>
            {moviesPopular.map((posterPopular,index)=>{
                   return <CardsEmission key={index} posterPopulars = {posterPopular}/>
                })}
            </ul>
                
                
        </div>
    )
   }

export default FilmsAvenir;