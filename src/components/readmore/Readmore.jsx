import React from 'react'
import './readmore.css'
import myPhoto from '../images/homeImages/my-photo.jpg'
import { FaTimes } from 'react-icons/fa';

const  Readmore = ({setShowCv}) =>  {

    
    return (  
            
                  <section id="pop-up" className="pop-up">
                          
                          <div className="pop-up-content">
                              <div className="container">
                                  <div className="row">
                                      <div className="col-md-4 popup-content-left ">
                                         
                                         <div className="closeBtn">
                                             <div onClick={() => setShowCv(false)} className="closePopup"> <FaTimes/> </div>
                                         </div>
                                          <img className="img-fluid rounded-circle myPhoto" src={myPhoto} />
                                          <h4 className="myName">ramazan berkay oral</h4>
                                          <h5 className="webDeveloper">web developer</h5>

                                      </div>
                           
                                      <div className="col-md-8 popup-content-right">
                                          <div className="cv-area">
                                                  
                                                {/* education */}
                                                <h3>education</h3>

                                                <div className="inform">
                                                    <strong className="text-muted"> <em> september 2013 - july 2018</em></strong>
                                                    <p><strong>maltepe university</strong></p>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus suscipit facere temporibus ducimus impedit!</p>
                                                </div>

                                                <div className="inform">
                                                    <strong className="text-muted"> <em> september 2013 - july 2018</em></strong>
                                                    <p><strong>maltepe university</strong></p>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus suscipit facere temporibus ducimus impedit!</p>
                                                </div>


                                               {/* education */}
                                               <h3>Experience</h3>

                                                <div className="inform">
                                                    <strong className="text-muted"> <em> september 2013 - july 2018</em></strong>
                                                    <p><strong>maltepe university</strong></p>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus suscipit facere temporibus ducimus impedit!</p>
                                                </div>

                                                <div className="inform">
                                                    <strong className="text-muted"> <em> september 2013 - july 2018</em></strong>
                                                    <p><strong>maltepe university</strong></p>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus suscipit facere temporibus ducimus impedit!</p>
                                                </div>

                                                <div className="inform">
                                                    <strong className="text-muted"> <em> september 2013 - july 2018</em></strong>
                                                    <p><strong>maltepe university</strong></p>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem delectus suscipit facere temporibus ducimus impedit!</p>
                                                </div>
                                                


                                          </div>   
                                      </div>
                                  </div>
                              </div>
                          </div>
                  
                  </section>
              

       
    )
}

export default Readmore
