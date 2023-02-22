import { useState } from "react";

export default function Clicker(props){

    const [clicks, setCliks] = useState(0);
    
    const clickHanlder = (e) =>{
        console.log()

        setCliks(oldClicks =>oldClicks+1)
    }

    const dangerClicks =  clicks>20;

    if(clicks>30){
        return (
        <h1>Finished clicking</h1>
        )
    }

    return(

        <div>
            <div>
                {dangerClicks && <h1>Danger clicks</h1>}
            {clicks >=10 
            ? <h2>Medium clicks </h2>
            : <h4>Normal clicks</h4>
            }
            </div>
            <button onClick={clickHanlder}>{clicks}</button>
        </div>
    )
}