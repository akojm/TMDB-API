import React from 'react';
import '../styles/compoments/carsFilmsAvenir.css'
import Card from 'react-bootstrap/Card';

const CardsFilmsAvenirs = ({postersTv}) => {
    console.log(postersTv);
    const basePath = "https://image.tmdb.org/t/p/original"  
    return (
      
   <Card className='card' >
      <Card.Img variant="top" className='card_posterTv' src={basePath+postersTv.poster_path} alt="poster-tv" />
      <Card.Body>
        <Card.Title>{postersTv.original_name}</Card.Title>
        <Card.Text>
          {postersTv.overview}
        </Card.Text>
        <Card.Text>
            <p className='mb-0 text-primary text-start presentation' >
              Note moyenne :
            </p>
            <p>
            {postersTv.vote_average}
            </p></Card.Text>
            <p className='mb-0 text-primary text-start presentation' >
              Première diffusion :
            </p>
            <p>
            {postersTv.first_air_date}
            </p>
            <p className='mb-0 text-primary text-start presentation' >
              Popularité :
            </p>
            <p>
            {postersTv.popularity}
            </p>
            <p className='mb-0 text-primary text-start presentation' >
              Langue original :
            </p>
            <p>
            -{postersTv.original_language}-
            </p>
            
      </Card.Body>
    </Card>

    );
};

export default CardsFilmsAvenirs;