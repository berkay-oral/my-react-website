import React from 'react'
import './menu.css'
const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav id="menu" className={"menu " + (menuOpen && "active")} >
             <ul className="m-0 p-0 my-auto">
                <li onClick={() => setMenuOpen(false)}>
                     <a href="#home">home</a>
                </li>

                <li onClick={() => setMenuOpen(false)} className="mt-4">
                     <a href="#about">about</a>
                </li>

                <li onClick={() => setMenuOpen(false)} className="mt-4">
                     <a href="#slider">softwares</a>
                </li>


                <li onClick={() => setMenuOpen(false)} className="mt-4">
                     <a href="#portfolio">portfolio</a>
                </li>

                <li onClick={() => setMenuOpen(false)} className="mt-4">
                     <a href="#contact">contact</a>
                </li>
             </ul>
        </nav>
   )
}

export default Menu
