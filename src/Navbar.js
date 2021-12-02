import { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">HOME</Link>
            <Link to="/qa">Q & A</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/login">LOGIN</Link>
        </div>
    )
}
