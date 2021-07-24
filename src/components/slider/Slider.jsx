import React, {useState, useEffect} from 'react'
import './slider.css'
import {softwareData} from "./Slidercontent";
const Slider = () => {

    const  [softwares, setsoftwares] = useState(softwareData);
    const  [index, setindex] = useState(0);


    
  

        const goNext = () => {
            index < softwares.length -1 ?setindex(index + 1) :setindex( 0 )
        }

        const goPrev = () => {
            if(index <=  softwares.length -1){
                setindex( index - 1 )
            } 
    
            if(index <= 0){
                setindex( softwares.length -1)
            }
        }



        // let timer;

        //         useEffect(() => {
        //         timer = setInterval(() => {
        //             goNext();
        //         }, 2500);
        
        
                
        //         return () => clearInterval(timer);
            
        //         });
            
        //         const stopSlider = () => {
        //             clearInterval(timer);
        //         }
        
        //         const goSlider = () => {
        //         timer = setInterval(() => {
        //             goNext();
        //         }, 2500);
        
        //  }







        

    return (
       <div id="slider" className="slider">
           <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="slider-title container-titles text-center">
                                <h4>I use them</h4>
                            </div>
                        </div>
                  </div>

                  <div className="slider-area" >
                      {/* onMouseOver={stopSlider} onMouseLeave={goSlider} */}

                      <div className="arrows-container clearfix">
                        <i onClick={goPrev} className="fa fa-angle-left  prevIcon"></i> 
                        <i onClick={goNext} className="fa fa-angle-right nextIcon"></i>
                      </div>

                     <div className="slides " style={{transform:`translateX(${ index * -20}%)`}}>
                         {softwares.map(softwareItem => (
                              <div className="slide-box  " key={softwareItem.id}>

                                  <div className="softwareLogo">
                                      <img width="100%" height="100%" src={softwareItem.image} alt="software-logo"  className="mx-auto"/>
                                  </div>

                                     <h5 className="fw-normal">{softwareItem.name}</h5>
                              </div>
                         ))}
                     </div>


                  </div>

           </div>
       </div>
    )
}

export default Slider
