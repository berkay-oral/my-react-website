import React, {useState} from 'react'
import './navbar.css';

const Navbar = ({menuOpen, setMenuOpen,  darkTheme, setdarkTheme}) => {
     

     const  [changeIcon, setChangeIcon] = useState(true);


     const spanStyle={backgroundColor : `${menuOpen ?'#ff4a57' :'#fff'}`}

    return (
                <div id="navbar"  className={"shadow-sm  w-100 navbar " + (menuOpen && "active")} >
                        <div className="container-fluid">

                            <div className="navbar-brand   d-flex">
                                <a className="fw-bold fs-3 text-decoration-none text-white" href="#home">BERKAY</a>                   
                                <div onClick={() => setChangeIcon(!changeIcon)} className="sun_moon fs-2 mx-2 ">             
                                    <i className={`${changeIcon ?'fa fa-moon-o' :'fa fa-sun-o' } text-white`} onClick={() => setdarkTheme(!darkTheme)} ></i>
                                </div> 
                            </div>
                            
                            <div className="menuIcon-area">
                                <div onClick={() => setMenuOpen(!menuOpen)}  className="hamburger">
                                    <span style={spanStyle} className="line1"></span>
                                    <span style={spanStyle} className="line2"></span>
                                    <span style={spanStyle} className="line3"></span>
                                </div>
                            </div>

                    </div>
                </div>
           )
}

export default Navbar
