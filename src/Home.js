import { useState, useEffect } from 'react';
import './css/home.css';
import logo from './images/logo.png';
import HomeBackground from './images/HomePage_background.png';
import Carousel from './Carousel';


//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Home() {
    return (
        <div className="home-content">
            <img className="logo" src={logo} />
            <br />
            <Carousel />
        </div >
    )
}
