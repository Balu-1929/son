import './Second.css';
import { useState } from 'react';
function Conter(){
    let [cunt,setCnt]=useState(0);
    let inc=()=>{
        setCnt(cunt+1);
        console.log(cunt);
    }
    let dec=()=>{
        setCnt(cunt-1);
    }
    return(
        <div className="counter">
            <button onClick={inc}>+</button>
            <p>{cunt}</p>
            <button onClick={dec}>-</button>
        </div>

    );

}
export default Conter;