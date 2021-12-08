import React from 'react'

function Card(data) {
    const fakeData = [
        { age: 19, gender: "m", location: 93123 },
        { age: 29, gender: "m", location: 92222 },
        { age: 39, gender: "m", location: 94102 },
        { age: 49, gender: "m", location: 92333 }
    ]
    
    return (
        
        <div className="card">
            <h1>{data["age"]}</h1>
            <h2>{data["gender"]}</h2>
            <h3>{data["location"]}</h3>
        </div>
       
    )
}

export default Card
