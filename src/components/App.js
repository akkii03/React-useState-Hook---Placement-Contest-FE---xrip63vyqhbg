
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [text,setText] = useState();
 const [inputValue,setInputValue] = useState();
 function buttonClick (inputValue) {
  setText([text,inputValue])
  setInputValue("");
 }

 function changeInput(e) {
  setInputValue(e.target.value);
 }

 
  return (
    <div>
   {/* the <p> tag with id text will show the concatinated string as output on string 
      the <input> tag with id input will take input entered by user */}
  <input id='input' value={inputValue}  onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={()=>buttonClick(inputValue)}>
        Click me
      </button>
    </div>
  );
}
