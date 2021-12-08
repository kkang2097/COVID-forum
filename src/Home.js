import { useState } from 'react'
import './css/home.css'
import logo from './images/logo.png'


//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Home() {

    const [index, setIndex] = useState(0)

    const fakeData = [
        { age: 19, gender: "m", location: 93123 },
        { age: 29, gender: "m", location: 92222 },
        { age: 39, gender: "m", location: 94102 },
        { age: 49, gender: "m", location: 92333 }
    ]

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



    return (
        <div className="content">
            <img className="logo" src={logo} />
            <br />
            <div className="card-carousel">
                <div className="arrow left" onClick={slideLeft}></div>
                <div className="card">
                    <h1>{fakeData[index]["age"]}</h1>
                    <h2>{fakeData[index]["gender"]}</h2>
                    <h3>{fakeData[index]["location"]}</h3>
                </div>
                <div className="arrow right" onClick={slideRight}></div>
            </div>
        </div >
    )
}
