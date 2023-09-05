import React from 'react';
import '../styles/cards.css'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({posters}) => {
    console.log(posters);
    const basePath = "https://image.tmdb.org/t/p/original"  
    return (
    <div className='content'>
     <Card className='card ' >
      <Card.Img variant="top" className='card_image' src={basePath+posters.file_path} alt="logo_film" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
            <p className='mb-0 text-primary' >Country :</p>
            <p>-{posters.iso_639_1}-</p>
            <p className='mb-0 text-primary' >Ratio de visualisation :</p>
            <p>-{posters.aspect_ratio}/1-</p>
            </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
   
      
    );
};

export default Cards;