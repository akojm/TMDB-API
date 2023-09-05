import React, { useEffect, useState } from 'react';
import "../../styles/compoments/filmsPopulaires.css";
//import axios from 'axios';
import  Cards from "../../compoments/Cards";



const apiUrl = "https://api.themoviedb.org/3/movie/157336?api_key=b3c8d28f417adbfd88f56a286fc3d52a&append_to_response=videos,images";
//const apiUrl = "https://api.themoviedb.org/3/movie/157336?api_key=dfc5d944999b99a8deb52a496b1297d2&append_to_response=videos,images";

const FilmsPopulaires = () => {
// State //
const [data, setData] = useState ([]);
;
       //console.log(basePath);

// Montage //
useEffect(()=>{
fetch(apiUrl)
    .then((resp)=>{
        console.log(resp.status);
        //return resp.json();
    })
    .then ((result)=>{
      // console.log(result);
      return setData(result.images.posters)
       //console.log(result.images.posters);

    })
   
},[])

    return (
        <div>
            
            <h1>Search your movies ..</h1> 
            <h2 className=' text-center text-white  bg-primary w-50'>Films les plus populaires...</h2>
            <div className='container'>
                <ul > 
                  {data.map((poster, index)=>{
                    return <Cards key={index}posters ={poster}/>
                    //<li key={index} ><img src={basePath+el.logo_path} alt="logo_film" /></li>
                  })}    
                </ul>
               
                
            </div>
        </div>
    );
};

export default FilmsPopulaires;