import { useState, useEffect } from 'react';
import './css/home.css';
import logo from './images/logo.png';
import HomeBackground from './images/HomePage_background.png';
import Carousel from './Carousel';


//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Home() {

    return (
        <body>
        <div className="home-content">
            <img className="logo" src={logo}/>
            <br />
            <Carousel />
            {/* <img src={HomeBackground} alt="Homepage Background" width={1904} height={1000}>
            </img>  */}
        </div >
        <br/>
        <br/>
        <br/>
        <div className='AboutTitle'>
        <h1>About us</h1>
        </div>
            <div className='AboutUs'>
                <h3>
                    Our application is designed to create a community around the U.S. that 
                    helps provide an available platform for anyone to help spread news related 
                    to COVID-19. We provide a unique feed feature where users are able to post 
                    COVID-19 related news based on their location. We also have a FAQ that has 
                    answers to our most asked questions and a general COVID risk assessment 
                    that gives a risk score of covid exposure. 
                </h3>
            </div>
            <br/>
            <br/>
            <div className='FeedAbout'>
                <div className='FeedTitle'>
                <h1>Feed</h1>
                <h3>
                    Our Feed features a covid-19 topic forum page where people with
                    an account can post their own stories and news on how the pandemic is
                    affecting them. People can also filter posts by location or status.
                </h3>
                </div>
            </div>
            <div className='RiskAbout'>
                <div className='RiskTitle'>
                <h1>Risk Score</h1>
                <h3>
                    For people who registered an account with us, you can view a general
                    assessment of how exposed you are to covid-19 after submitting certain 
                    information such as, smoker/non-smoker, height, State, Age, etc. 
                </h3>
                </div>
            </div>
            <div className='Link'>
                <a href="https://www.cdc.gov/" target="_blank">Visit the official CDC website for more information!</a>
                <br/>
                <br/>
                <br/>
                <a href="https://www.vaccines.gov/" target="_blank">Find your nearest location for vaccines & boosters</a>

            </div>
        </body>
    )
}
