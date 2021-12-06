import { useState } from 'react'
import './css/App.css'
import logo from './images/Background (2).png'
// import left from './images/left.png'
// import right from './images/right.png'


//Home needs to check if you are logged in. If logged in, show carousel and
//landing page information.
export default function Home() {

    // Elliot Code (are we going to use this? )
    // const [index, setIndex] = useState(0)
    // const slideLeft = () => {
    //     if (index - 1 >= 0) {
    //         setIndex(index - 1);
    //     } else {
    //         setIndex(fakeData.length - 1)
    //     }
    // };
    // const slideRight = () => {
    //     if (index + 1 < fakeData.length) {
    //         setIndex(index + 1);
    //     } else {
    //         setIndex(0)
    //     }
    // };

    

    return (

        <div className="Home">
            <div>
            <img src={logo} alt="Logo" width="35%" className="slide-in-blurred-top"/>
            </div>
            &nbsp;
            <button className="Button" type="button">Click Me!</button >
        </div>
    )
}
