import { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'
import { useDataLayerValue } from "./DataLayer";

export default function Navbar() {

    const [{ isLoggedIn, name }, dispatch] = useDataLayerValue();

    const attemptLogout = (event) => {
        window.localStorage.removeItem('Token')
        var response = {
            type: "UPDATE_USER",
            isLoggedIn: false
        }
        dispatch(response);
        window.location.href = "/";
    }

    // IMPORTANT PLEASE READ
    // We need two Navigation bars, depending on if the variable "isLoggedIn" is true or false
    // If the variable isLoggedIn is true show the logged in Nav Bar
    // Else show the logged out Nav Bar
    // The variable "name" will be the user's first name

    if (isLoggedIn == true) {
        return (
            <nav className="nav-bar">
                <Link to="/">Hello {name}</Link>
                <Link to="/feed">Feed</Link>
                <Link to="/coviddashboard">Risk Calculator</Link>
                <Link to='/' onClick={attemptLogout}>LOGOUT</Link>
                
            </nav>
        )
    }
    else {
        return (
            <nav className="nav-bar">
                <Link to="/">HOME</Link>
                <Link to="/qa">Q & A</Link>
                <Link to="/login">LOGIN</Link>
            </nav>
        )
    }
}
