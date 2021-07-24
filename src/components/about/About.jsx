import React, {useState} from 'react'
import laptop from '../images/aboutImages/laptop.jpg'
import { CSSTransition } from 'react-transition-group';
import Readmore from '../readmore/Readmore'
import './about.css'
const About = () => {

    const [showCv, setShowCv] = useState(false);//cv  kapalı

    return (
        <>
                         <CSSTransition  in={showCv} timeout={500} classNames="alert" unmountOnExit >
                             <Readmore setShowCv={setShowCv}  /> 
                         </CSSTransition>

        <div id="about" className="about">
           <div className="container">
              

             <div className="row justify-content-center">
                     <div className="col-lg-8">
                         <div className="about-title container-titles text-center">
                            <h2>About Me</h2>
                         </div>
                     </div>
             </div>


             <div className="row align-items-center align-content-center">

                 <div className="col-md-6 first-about">
                     <div className="about-text">
                          <h3>Hi There</h3>
                          <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam odit dolores atque beatae.</p>
                          <button  onClick={() => setShowCv(true)}  className="readmoreBtn mt-2">Read More</button>
                     </div>
                 </div>

                 <div className="col-md-6 second-about">
                     <div className="laptop mx-auto">
                         <img className="img-fluid" src={laptop} alt="laptop-image" />
                     </div>
                 </div>

             </div>

        

           </div>
         </div>
      </>
    )
}

export default About
