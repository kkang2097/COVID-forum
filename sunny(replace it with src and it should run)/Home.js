import { useState } from 'react'
import './css/home.css'
import left from './images/left.png'
import right from './images/right.png'

export default function Home() {
    const fakeData = [
        { age: 19, gender: "m", location: 93123 },
        { age: 29, gender: "m", location: 92222 },
        { age: 39, gender: "m", location: 94102 },
        { age: 49, gender: "m", location: 92333 }
    ]

    const [index, setIndex] = useState(0)

    const slideLeft = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else {
            setIndex(fakeData.length - 1)
        }
    };

    const slideRight = () => {
        if (index + 1 < fakeData.length) { // change it to the fetched data
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    };

    return (
        <div className="card-carousel">
            <img src={left} onMouseDown={slideLeft} />
            <div className="card">
                <h1>{fakeData[index]["age"]}</h1>
                <h2>{fakeData[index]["gender"]}</h2>
                <h3>{fakeData[index]["location"]}</h3>
            </div>
            <img src={right} onMouseDown={slideRight} />
        </div>
    )
}
