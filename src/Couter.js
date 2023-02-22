import { useState } from "react"

export default function Counter(props){

    const [count, setCount] = useState(props.start || 0);

    const increaseHandler = () =>{

        setCount(oldCount=> oldCount + 1)

    }

    const decreaseHandler = () =>{
        setCount(oldCount=> oldCount - 1)
    }
    const clearCounter = () =>{

        setCount(0)
    }
    
    const doubleHandler = () => {
        setCount(oldCount=> oldCount +2)
    }
    const mouseIncreaseHandler = () =>{

        setCount(oldCount => oldCount + 3)
    }

    let title = '';
    
    if(count<10){
        title = "Counter"
    }
    else if(count<20){
        title = "Turbo counter"
    }
    else if(count<30)
    {
        title = "Mega counter"
    }
    else if(count<40){
        title = "Giga counter"
    }
    else{
        title = "Stop clicking!!!"
    }
    return(
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearCounter}>Clear</button>
            <button onDoubleClick={doubleHandler}>++</button>
            <button onMouseOver={mouseIncreaseHandler}>{count >=10 
            ? <h2>Medium clicks </h2>
            : <h4>Normal clicks</h4>
            }</button>
        </div>
    );
}