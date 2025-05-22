import './First.css';
import { useState } from 'react';
function First(){
    let [res,setres]=useState(0);
    let addtion=()=>{
        let v1,v2;
        v1=parseInt(document.querySelector('#t1').value);
        v2=parseInt(document.querySelector('#t2').value);
        setres(v1+v2);
        console.log(res);
    }

    return (
        <div className="balu">
            <label>Number 1
                <input type='text' id="t1"/>
            </label><br/><br/>
            <label>Number 2
                <input type='text'id='t2'/>
            </label><br/><br/>
            <button onClick={addtion}>Addtion</button>
            <p>{res}</p>
            
        </div>
    );
}
export default First;