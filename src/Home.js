import { useState } from 'react'
import './css/home.css'
import left from './images/left.png'
import right from './images/right.png'

//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Home() {

    //Data functions here
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
        if (index + 1 < fakeData.length) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    };

    // Sunny: @Elliot, Chris did a call for each page so we don't need fetch in the component
    // but we still need to find a way to pass that variable into this component
    // // authenticate to check if a user is logged in
    // fetch('http://127.0.0.1:5000/auth', {
    //     //Elliot: @Sunny I'll refactor this into an axios.get() later
    //     method: 'POST',
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(window.localStorage.getItem("Token"))
    // })
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then((json) => {
    //         if (json['success'] == true) {
    //             return (
    //                 <div className="card-carousel">
    //                     <img src={left} onMouseDown={slideLeft} />
    //                     <div className="card">
    //                         <h1>{fakeData[index]["age"]}</h1>
    //                         <h2>{fakeData[index]["gender"]}</h2>
    //                         <h3>{fakeData[index]["location"]}</h3>
    //                     </div>
    //                     <img src={right} onMouseDown={slideRight} />
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div>No one is logged in. (Username/Password didn't match)</div>
    //             )
    //         }
    //     })

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
