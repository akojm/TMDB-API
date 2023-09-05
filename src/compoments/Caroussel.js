import React from 'react';
import '../compoments/Caroussel';
import '../styles/caroussel.css'
//import Carousel from 'react-bootstrap/Carousel';
//import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Caroussel = () => {


return(
<div>
<div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/img/postersSerie3.jpeg" class="d-block w-100" alt="posters-film"/>
    </div>
    <div class="carousel-item">
      <img src="./assets/img/postersSerie2.jpeg" class="d-block w-100" alt="posters-film"/>
    </div>
    <div class="carousel-item">
      <img src="./assets/img/posters4.jpeg" class="d-block w-100" alt="posters-film"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
);
    
/*
    <Carousel className='carousel-content'>
      <Carousel.Item className='carousel-item'>
         <img src='./assets/img/posters2.jpeg' alt='posters-film'/>
        <Carousel.Caption className='carousel-caption' >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item  >
      <Carousel.Item className='carousel-item'>
        <img src='./assets/img/postersEmission1.jpeg' alt=''/>
        <Carousel.Caption className='carousel-caption' >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item' >
        <img src='./assets/img/postersSerie2.jpeg' alt=''/>
        <Carousel.Caption className='carousel-caption' >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
*/
    
};

export default Caroussel;