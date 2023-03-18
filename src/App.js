import {
  useState,
  useRef
} from "react"; 
import React from 'react'
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault();
    let number = Number(inputRef.current.value)
    inputRef.current.value = ""
    inputRef.current.focus()
    setResult((result) => result + number); 
    console.log(result)
  }; 
 
  function minus(e) {
    e.preventDefault();
    let number = Number(inputRef.current.value)
    inputRef.current.value = ""
    inputRef.current.focus()
    if (result === 0) {
      setResult((result) => number);
      return
    }
  	setResult((result) => result - number);
  };
 
  function times(e) {
    e.preventDefault();
    let number = Number(inputRef.current.value)
    inputRef.current.value = ""
    inputRef.current.focus()
    if (result === 0) {
      setResult((result) => number);
      return
    }
    setResult((result) => result * number);
  }; 
 
  function divide(e) {
    e.preventDefault();
    let number = Number(inputRef.current.value)
    inputRef.current.value = ""
    inputRef.current.focus()
    if (result === 0) {
      setResult((result) => number);
      return
    }
    let divide = result / number
    if (!isFinite(divide)) {
      setResult(0)
      return
    }
  setResult(divide);
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""
    inputRef.current.focus()
  }; 
 
  function resetResult(e) {
    e.preventDefault();
  	setResult(0)
    inputRef.current.value = ""
    inputRef.current.focus()
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Total: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number"
        /> 
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={times}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
