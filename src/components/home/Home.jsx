import React, {useEffect, useRef} from 'react'
import './home.css'
import { init } from 'ityped';

/* react icons */
import { MdKeyboardArrowDown } from 'react-icons/md';

import myPhoto from '../images/homeImages/my-photo.jpg';
import { Context } from '../context/context';
const  Home = () => {

    const textRef = useRef();//span tagını aldım ref olarak
    //efekt kullan
    useEffect(() => {
        console.log(textRef)
        init(textRef.current,{
            showCursor: false, 
            backDelay:1500,//silmeyi beklemenin gecikmesi
            showCursor: true,
            backSpeed: 60,
            strings: ['Fron End Developer', 'React Developer', 'Designer']
        })
    },[])
 

    return (
      <Context.Consumer>
          {value => (
                <div id="home" className="home" style={{  backgroundColor:`${value.darkTheme ?'#2A3050' :'#eeefeb'}`}}     >
            <div className="container"   >
                <div className="row min-vh-100 align-items-center align-content-center">

                    <div className="col-md-6 homeRight">
                        <div className="home-img text-center">
                            <img src={myPhoto} alt="berkay" className="myPhoto rounded-circle" />
                        </div>
                    </div>

                    <div className="col-md-6 homeLeft "  >
                        <div className="home-text">
                            <h2   style={{color: `${value.darkTheme ?"white" :"black"}`}}>Hi There, I'm </h2>
                            <h1 style={{color : "#ff5661"}}  className="fw-bold">Berkay Oral</h1>
                            <h3 style={{color: `${value.darkTheme ?"white" :"black"}`}}>Freelance <span className="fw-bold" ref={textRef}></span> </h3>
                            <a  href="#about"> <MdKeyboardArrowDown className="arrowDownIcon"/> </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>         
          )}
      </Context.Consumer>
      
    )
}

export default Home
