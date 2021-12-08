import React from 'react'
import { useState } from "react";

export default function func() {
        // changeCounter //number
        const [insideInput, setInsideInput] = useState("");
        const [changeCounter, setchangeCounter] = useState(0);
        const [number, setNumber] = useState("");

          }
          useEffect(() => {
            console.log(`when clicked ${count}`)
          }, []);
        
    return (
        <div>
            <input type="text" onChange={(e)=>{setInsideInput(e.target.value)}} />
            <h1>{changeCounter}</h1>
            <button onClick={()=> setchangeCounter(1)}></button>
        </div>
    )


/* 2- create a functional react component that has a state "insideInput", a state "changeCounter", and a state "number". then add/do the following:
    a- add an input and make it change the "insideInput" state only when you press enter.
    b- add a button that (when clicked) will add 1 to changeCounter and have it rendered above the button
    c- generate a random number to be put inside the number and render it whenever changeCounter is changed
  */

/*   