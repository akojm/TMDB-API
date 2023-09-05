import React from 'react';
import '../../styles/compoments/cardEmission.css';
import Card from 'react-bootstrap/Card';

const CardsEmission = (posterPopulars) => {
    console.log(posterPopulars);
    const basePath = "https://image.tmdb.org/t/p/original"  
    return ( 
        <Card className='card d-flex' >
           <Card.Img variant="top" className='card_posterPopular' src={basePath+posterPopulars.poster_path

} alt="poster-popular-movies" />
           <Card.Body>
             <Card.Title>{basePath+posterPopulars.popularity}  </Card.Title>
             <Card.Text>
               
             </Card.Text>
             <Card.Text>
                 <p className='mb-0 text-primary text-start presentation' >
                   Note moyenne :
                 </p>
                 <p>
                 
                 </p></Card.Text>
                 <p className='mb-0 text-primary text-start presentation' >
                   Première diffusion :
                 </p>
                 <p>
                 
                 </p>
                 <p className='mb-0 text-primary text-start presentation' >
                   Popularité :
                 </p>
                 <p>
                 
                 </p>
                 <p className='mb-0 text-primary text-start presentation' >
                   Langue original :
                 </p>
                 <p>
                 - -
                 </p>
                 
           </Card.Body>
         </Card>
     
         );
};

export default CardsEmission;