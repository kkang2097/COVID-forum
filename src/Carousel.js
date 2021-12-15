import React, { useState, useEffect } from 'react';
import './css/home.css';
import logo from './images/logo.png';
import HomeBackground from './images/HomePage_background.png';


//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Carousel() {

    const fakeData = [
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
        { state: "", cases: "" },
    ]

    const [index, setIndex] = useState(0)
    var [data, setData] = useState(fakeData);

    const slideLeft = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else {
            setIndex(fakeData.length - 1)
        }
    };
    const slideRight = () => {
        if (index + 1 < fakeData.length) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    };

    const getstatedata = () => {
    var path = "getstatedata"
    var root = "http://127.0.0.1:5000/"
        var x = fetch(root + path, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({})
        })
            .then(response => {
                return response.json()
            })
            .then((json) => {

                for (let i = 0; i < 10; i++) {

                    try {
                    fakeData[i]["state"] = json[i]["state"]
                    fakeData[i]["cases"] = json[i]["newCases"]
                    } catch (error) {console.error(error);}
                    
                  }
            } ) 
    }

    useEffect(()=> {
        getstatedata();
        setData(fakeData)
    }, [Carousel]);
    
    useEffect(() => {
        setInterval(() => {
            setIndex( index => (index + 1) % 10 );
        }, 1000);
      }, []);

    return (
        <body>
        <div className="content">
        {/* */}


            <div className="card-carousel" >
                <div className="arrow left" onClick={slideLeft}></div>
                <div className="card">
                    <h1>{data[index]["state"]} is reporting </h1>
                    <h1>{data[index]["cases"]} new cases per day</h1>
                </div>
                <div className="arrow right" onClick={slideRight}></div>
            </div>

        </div >
        </body>
    )
    
}
