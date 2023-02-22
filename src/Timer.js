import React from "react";

export default function Timer(props){

    const [time, setTime] = React.useState(props.start);

    setTimeout(() =>{
        setTime(time + 1);
    }, 1000)

    return (
        <div>
            <h2>Timer: {time} sec.</h2>
        </div>
    )
}