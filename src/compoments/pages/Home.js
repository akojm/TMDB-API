import React from 'react';
import '../../styles/compoments/home.css';
import Caroussel from '../Caroussel';



const Home = () => {
    return (
        <div>
            <div className='container-fluid p-0'>
               <Caroussel/>
            </div>
        </div>
    );
};

export default Home;