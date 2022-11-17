import React from 'react'
import { useState } from 'react'
import Img1 from "./img-1.jpg"
import { useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { useEffect } from 'react'

function Navbar() {
    const [navMenu, setnavMenu] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setnavMenu(false);
    }, [location])

    return (
        <>
            <div className="navBar">
                <div className="navBar-logo"><span className='color-crimson'>.</span>rm</div>
                <div className="navBar-icon" onClick={() => {
                    setnavMenu(!navMenu);
                }}><i class="fa-solid fa-bars"></i></div>
            </div>
            <div className="navLinks " id={navMenu ? "active" : ""}>
                <div className="navLinks-image">
                    <img src={Img1} alt="" />
                </div>
                <ul>
                    <li><HashLink to="#home">home</HashLink></li>
                    <li><HashLink to="#aboutMe">about me</HashLink></li>
                    <li><HashLink to="#education">about me</HashLink></li>
                    <li><HashLink to="#projects">projects</HashLink></li>

                </ul>
            </div>

        </>
    )
}

export default Navbar
