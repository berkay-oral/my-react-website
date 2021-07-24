import React, { useState } from 'react'

import Navbar from '../navbar/Navbar'
import Menu from '../menu/Menu'
import Home from '../home/Home'
import About from '../about/About'
import Slider from '../slider/Slider'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import { Context } from '../context/context'


function Mainpage() {


    const  [darkTheme, setdarkTheme] = useState(false)
    const  [menuOpen, setMenuOpen] = useState(false)

    return (
         <React.Fragment>
              <Context.Provider value={{darkTheme}}>
                  <Navbar menuOpen={menuOpen} darkTheme={darkTheme} setdarkTheme={setdarkTheme} setMenuOpen={setMenuOpen}/>
                  <Menu   menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                  <Home/>
                  <About/>
                  <Slider/>{/* portfolio */}
                  <Portfolio/>
                  <Contact/>
                  <Footer/> 
            </Context.Provider>
         </React.Fragment>
   
    )
}

export default Mainpage
