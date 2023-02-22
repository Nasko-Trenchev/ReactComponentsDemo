import React from "react";

export default function Timer(props){

    const [time, setTime] = React.useState(props.start);
    const [isRunning, setRunning] = React.useState(false);

    const startTimer = () =>{
       setRunning(true);
       setTime(oldtime=> oldtime = 0);
    }
    const stopTimer = () =>{
        setRunning(false);
        setTime(oldtime=> oldtime = 0);
    }
  
    if(isRunning){
        setTimeout(() =>{
            setTime(time + 1);
        }, 1000)
    }

    return (
        <div>
            {!isRunning && <button onClick={startTimer}>Start</button>}
            {isRunning && <button onClick={stopTimer}>Stop</button>}
            <h2>Timer: {isRunning ? time: 0} sec.</h2>
        </div>
    )
}