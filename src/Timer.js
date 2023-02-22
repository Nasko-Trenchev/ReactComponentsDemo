import React from "react";

export default function Timer(props){

    const [time, setTime] = React.useState(props.start);
    const [isRunning, setRunning] = React.useState(false);

    
    const startTimer = () => {
       setRunning(true);
       setTime(time);
    }
    const stopTimer = () =>{
        setRunning(false);
        setTime(time);
    }

    const resetTimer = () => {
        setTime(0)
    }
  
     if(isRunning){
        setTimeout(() =>{
            setTime(time + 1);
        }, 1000)
    }


    return (
        <div>
            {!isRunning && 
             <div>
                <button onClick={startTimer}>Start</button>
                </div>}
            {isRunning && 
            <>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset timer</button>
            </>}
            <h2>Timer: {time} sec.</h2>
        </div>
    )
}