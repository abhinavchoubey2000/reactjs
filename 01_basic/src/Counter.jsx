import { useState } from "react"
export default function Counter() {

const [counter, setCounter] = useState(0)

const increaseValue=()=>{
    if(counter<20){
        setCounter(counter+1)
    }
}
const decreaseValue=()=>{
    if(counter>0){
        setCounter(counter-1)
    }
}

  return (
    <div>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
        <p>The value is: {counter}</p>
    </div>
  )
}
