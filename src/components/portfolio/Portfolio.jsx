import React, { Component } from 'react'
import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioButtons from './PortfolioButtons';

import axios from 'axios';

import  {portfolioData} from '../portfolio/PortfolioDatas'
import { Context } from '../context/context';





export class  Portfolio  extends Component {

 
    constructor(props){
        super(props);
        this.state = {

                           portfolioDatas : portfolioData,
                           portfolioTypes : portfolioData
                        // portfolioDatas : [],
                        // portfolioTypes : []
        }
    }

//    async componentDidMount() {
//         const baseUrl = "http://localhost:3007/portfoliodatas";//postmanda get ettiğimiz verinin linkini aldık
//         const response = await fetch(baseUrl);//ve baseUrl çektik ve response içerisine  atadık
//         console.log(response)
//         const data = await response.json();//json sayesinde data ya çeviriyoruz arraylere
//         console.log(data)
//         this.setState({portfolioDatas : data, portfolioTypes : data})//portfolioDatas olan boş diziye postmandaki url i attık
//     }


//  async componentDidMount(){
//         const response = await axios.get("http://localhost:3012/portfoliodatas");
//         console.log(response);
//         this.setState({portfolioDatas : response.data, portfolioTypes : response.data})//response içersinde
//  }




    typeOfButton = (btnName) => {
        const newType = this.state.portfolioTypes.filter((portItem) => portItem.type === btnName);
        return this.setState({ portfolioDatas : newType})
    }




    

  render(){

         return(   
             
             <Context.Consumer>
                        {value => (
                             <div id="portfolio" className="portfolio" style={{  backgroundColor:`${value.darkTheme ?'#2A3050' :'#eeefeb'}`}} >

                             <div className="container">
         
                                 <div className="row justify-content-center">
                                     <div className="col-lg-8">
                                         <div className="portfolio-title container-titles text-center">
                                             <h2 style={{color:`${value.darkTheme ?'white' :'#24263B'}`}}>Portfolio</h2>
                                         </div>
                                     </div>
                                 </div>
         
         
         
                                 <div className="row portfolio-btns">
                                     <div className="col-lg-12   ">
                                     {/* butonlar gelecek */}
                              <PortfolioButtons typeOfButton={this.typeOfButton} />
                                     </div>
                                 </div>
         
         
                                 <div className="row  ">
                                      {this.state.portfolioDatas.map((portfolio) => (
                                          <div className="col-md-6 col-lg-4 p-3" key={portfolio.id} >
                                                   <div className="portofilo-item text-capitalize">
                                                   
                                                   <div className="card-body">
                                                       <div className="logoContent">
                                                             <i className={`logo ${portfolio.logo} `}></i>
                                                       </div>
                                                       <p className="card-title">{portfolio.name}</p>
                                                       <a href={portfolio.url} className="projectBtn">go to project</a>
                                                   </div>
                                                     
                                                   
                                                   </div>
                                          </div>
                                      ))}
                                 </div>
         
                             </div>
         
                             </div>
                        )}
            </Context.Consumer>
                   
  
  
  
  
  )
        }                  

   
}

export default Portfolio
