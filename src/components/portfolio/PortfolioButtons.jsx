import React, {useState} from 'react'
import Portfolio from './Portfolio'

const  PortfoliopButtons = ({typeOfButton}) =>  {


const buttons = [
                  {id: "app" , buttonName:"app"},
                  {id: "website" , buttonName:"website"},
                  {id: "game" , buttonName:"game"}

                ]
const [selected, setSelected] = useState("app");


    return (

        <ul>
            {buttons.map(btn => (
                <li key={btn.id} className={selected === btn.id ?"portBtn active" :"portBtn"}     
         /*multiple events*/ onClick={() => { typeOfButton(btn.buttonName); setSelected(btn.buttonName) }}>
                                    {btn.buttonName}
                                </li>
            ))}
        </ul>
      
    )
}

export default PortfoliopButtons




// <li key={btn.id} //üzerine tıkladığım  seçilen .portBtn.active classı olsun 
// className={selected === btn.id ?"portBtn active" :"portBtn"}
// onClick={() => setSelected(btn.btnName)}>

// <p  onClick={() => projectType(btn.id) } className="btn-name">{btn.btnName}</p>
// </li>


// <ul>
// <li onClick={() => typeOfButton("app")}   >App</li>
// <li onClick={() => typeOfButton("website")}  >Website</li>
// <li onClick={() => typeOfButton("job")} >Job</li>
// </ul>