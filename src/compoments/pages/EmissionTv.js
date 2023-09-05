import React, { useEffect, useState } from 'react';
import '../../styles/compoments/emissionTv.css';
import axios from "axios";
import CardsFilmsAvenirs from '../CardsFilmsAvenirs';

const EmissionTv = () => {
    // state //
const [moviesTv, setMoviesTv] = useState([])


    // Montage //
useEffect(()=>{
const urlApi = "https://api.themoviedb.org/3/discover/tv?api_key=b3c8d28f417adbfd88f56a286fc3d52a";

axios
.get(urlApi)
.then((resp)=>{
    console.log(resp.data.results);
    return setMoviesTv(resp.data.results)
})

/*fetch(urlApi)
.then((resp)=>{
    console.log(resp);
    //resp.json()
})
.then((result)=>{
    //return setMoviesTv(data.total_pages);
   console.log(result);
}
)
*/


},[])

    return (
        <div>
        <h1>Search your movies ..</h1> 
        <h2 className='text-center text-white  bg-primary w-50'>Emission Tv...</h2>
         <ul className='mt-5' >
         {moviesTv.map((posterTv, index)=>{
                    return <CardsFilmsAvenirs key={index}postersTv ={posterTv}/>
                    //<li key={index} ><img src={basePath+el.logo_path} alt="logo_film" /></li>
                  })}  
         </ul>

        </div>
    );
};

export default EmissionTv;