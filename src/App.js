import './App.css';
import React, { useState } from 'react';
// import swal from 'sweetalert';


const App = () => {

  const endsWithOperator = /[*+‑/]$/;
  const endsWithEqualSign = /[=]$/;
  const endsWithdot = /[.]$/;

  const [inpNum, setInpNum] = useState('');
  const [output, setOutput] = useState('');


  const allClear = () => {
    setOutput('');
    setInpNum(0);
  }

  const handleClick = (e) => {
    if (endsWithdot.test(output) && e.target.value === '.') {
      setOutput(prev => prev.slice(0,-1) + e.target.value)
    }
    else if (['+', '-', '*', '/'].includes(e.target.value)) {
      setInpNum('');
      if (endsWithOperator.test(output)) {
        setOutput(prev => prev.slice(0,-1) + e.target.value)
      } 
      else if (endsWithEqualSign.test(output) && ['+', '-', '*', '/'].includes(e.target.value)) {
        setOutput(inpNum + e.target.value)
        setInpNum('')
      }
      else {
        setOutput(prev => prev + e.target.value)
      }
    } 
    else if (endsWithEqualSign.test(output) && !['+', '-', '*', '/'].includes(e.target.value)) {
      setInpNum(e.target.value)
      setOutput(e.target.value)
    }
    else {
      setInpNum(prev => prev + e.target.value);
      setOutput(prev => prev + e.target.value)
    }
  }
  
  
  // if ( inpNum === 0 && e.target.value === '0') {
  //   setTimeout(() => { 
  //     setInpNum('SYNTAX ERROR!') 
  //   }, 1000);
  // } 
  //  else if (inpNum.length > 15) {
  //   setTimeout(() => { 
  //     setInpNum('Exceeded your Maximum Limit!') 
  //   }, 1000);
  // } 
  const evaluate = (e) => {
    let answer = Math.round(eval(output) * 1000000000000) / 1000000000000;
    setInpNum(answer);
    setOutput(prev => prev + e.target.value);
  }


  return (

    <div className="App">
      <div id="calculator">

        <div className="display">
          <div id="output">{output}</div>
          <div id="display" className="input">{inpNum || output ? inpNum : 0}</div>
        </div>

        <div id="calculator-buttons">
          <button onClick={allClear} className="btn" id="clear" value="AC">AC</button>
          <button onClick={handleClick} className="btn" id="openBracket" value="(">(</button>
          <button onClick={handleClick} className="btn" id="closeBracket" value=")">)</button>
          <button onClick={handleClick} className="btn" id="seven" value="7">7</button>
          <button onClick={handleClick} className="btn" id="eight" value="8">8</button>
          <button onClick={handleClick} className="btn" id="nine" value="9">9</button>
          <button onClick={handleClick} className="btn" id="multiply" value="*">x</button>
          <button onClick={handleClick} className="btn" id="four" value="4">4</button>
          <button onClick={handleClick} className="btn" id="five" value="5">5</button>
          <button onClick={handleClick} className="btn" id="six" value="6">6</button>
          <button onClick={handleClick} className="btn" id="divide" value="/">/</button>
          <button onClick={handleClick} className="btn" id="one" value="1">1</button>
          <button onClick={handleClick} className="btn" id="two" value="2">2</button>
          <button onClick={handleClick} className="btn" id="three" value="3">3</button>
          <button onClick={handleClick} className="btn" id="subtract" value="-">‑</button>
          <button onClick={handleClick} className="btn" id="zero" value="0">0</button>
          <button onClick={handleClick} className="btn" id="decimal" value=".">.</button>
          <button onClick={evaluate} className="btn" id="equals" value="=" >=</button>
          <button onClick={handleClick} className="btn" id="add" value="+">+</button>
        </div>

      </div>
    </div>
  );
}

export default App;
