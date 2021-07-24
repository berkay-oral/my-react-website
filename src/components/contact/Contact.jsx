import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        fields: {},//input alanlar
        errors: {} //geçersiz (hatalar)
      }
    }
  
     errorMessageStyle={color:"#ff4a57", fontWeight:"500", padding:"0px", marginTop:"-20px", textTransform:"capitalize"}

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
  
      //Name
      if(!fields["name"]){
        formIsValid = false;
        errors["name"] = <p style={this.errorMessageStyle}>Please fill this field</p> ;//lütfen bu alanı doldurun
      }


      if(typeof fields["name"] !== "undefined" ){
        if(!fields["name"].match(/^[a-zA-Z\u00C0-\u00ff]+$/)){//türkçe harfler dahil
          formIsValid = false;
          errors["name"] = <p style={this.errorMessageStyle}>Please Enter First Name</p>;//lütfen sadece harfleri giriniz
        } 
  
    
      }
  
      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = <p style={this.errorMessageStyle}>Please fill this field</p> ;//lütfen bu alanı doldurun
      }
  
      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
  
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] =  <p style={this.errorMessageStyle}>Email is not valid</p> ;//e posta geçerli değil
        }
      }
  

      //Phone
      if(!fields["phone"]){
        formIsValid = false;
        errors["phone"] = <p style={this.errorMessageStyle}>Please fill this field</p> ;//lütfen bu alanı doldurun
      }
  
      if(typeof fields["phone"] !== "undefined"){
        if( !Number(fields["phone"])){
          formIsValid = false;
          errors["phone"] =  <p style={this.errorMessageStyle}>please enter your phone number without spaces</p>;//sadece numara gir
        }      	
      }
  


      //Message
      if(!fields["message"]){
        formIsValid = false;
        errors["message"] =  <p style={this.errorMessageStyle}>Please fill this field</p> ;
      }

  
      this.setState({errors: errors});
      return formIsValid;
    }
  
    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){

       //EMAİL.JS SENDFEEDBACK
       const   templateId = 'template_99698hm';
        this.sendFeedback(templateId, {
            mesaj         : this.state.fields["message"],
            kimden        : this.state.fields["name"],
            mailAdresi    : this.state.fields["email"],
            tel           : this.state.fields["phone"]
        })
                    this.setState({
            fields: ''
        })  



      }else{
        alert("Your message could not be sent!")
      }
  
    }
  



    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
    }



//EMAİLJS SENDFEEDBACK    
    sendFeedback(templateId, variables){
        window.emailjs.send(
            'berkayoral.r', templateId,
            variables
        ).then( res => {
                alert( 'Your message has been sent!')
        })
        .catch(error => {
           
              
        }
        )
    }

 
    render(){
      return (
        <div id="contact" className="contact">        	
        

              <div className="container">
              <div className="row justify-content-center">
                    <div className="col-lg-8" > 
                       <div className="contact-title container-titles text-center">
                           <h5>Contact Me</h5>
                       </div>
                    </div>
                </div>
              </div>
         

          <div className="container ">

             <div className="row addressArea text-white">

                      <div className="col-lg-4">
                          <div className="adress">
                          <i className="fa-fw fa fa-envelope-o "></i>
                               <div className="adresscontent">
                                   <span>MAIL</span>
                                   <p className="mt-2">berkayoral.r@gmail.com</p>
                               </div>
                          </div>
                      </div>


                      <div className="col-lg-4 ">
                           <div className="adress" >
                               <i className="fa-fw fa fa-phone "></i>
                               <div className="adresscontent">
                                   <span>PHONE</span>
                                   <p className="mt-2">berkayoral.r@gmail.com</p>
                               </div>
                           </div>
                    </div>

                    <div className="col-lg-4 " >
                           <div className="adress">
                               <i className="fa-fw fa fa-linkedin "></i>
                               <div className="adresscontent">
                                   <span>LINKEDIN</span>
                                   <p className="mt-2">berkayoral.r@gmail.com</p>
                               </div>
                           </div>
                    </div>




              <div className="col-lg-12" style={{marginTop:"20px"}}>



                                <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                              

                              <div className="row d-flex">

                                <div className="col-lg-4">
                                    <fieldset>
                                    <input className="yourFirstName" ref="name" type="text" size="30" placeholder="Your First Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                                    <span className="error">{this.state.errors["name"]}</span>
                                    </fieldset>
                                </div>


                                <div className="col-lg-4">
                                   <fieldset>
                                   <input className="yourMail" refs="email" type="text" size="30" placeholder="Your Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                    <span className="error">{this.state.errors["email"]}</span>
                                   </fieldset>
                                </div>

                             
                                <div className="col-lg-4">
                                <input className="yourPhone" refs="phone" type="text" size="30" placeholder="Your Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                    <span className="error">{this.state.errors["phone"]}</span>
                                </div>



                                <div className="col-lg-12">
                                <fieldset>
                                    <textarea className="message-area " ref="message" width="100%" refs="message" 
                                     placeholder="Your Message" onChange={this.handleChange.bind(this, "message")}>{this.state.fields["message"]}</textarea>
                                      <span className="error">{this.state.errors["message"]}</span>
                                </fieldset>
                                </div>



                                <div className="col-lg-12">
                                <fieldset>
                                    <button className="submitBtn" id="submit" value="Submit">Send Message</button>
                                </fieldset>
                                </div>
                  
                  
                   </div>
                            </form>
                    




                    </div>




             </div>

          </div>



        </div>
      )
    }
  }
  
export default Contact;  
