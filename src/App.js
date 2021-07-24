import './App.css';
import React, { useState } from 'react';
// import swal from 'sweetalert';


const App = () => {

const endsWithOperator = /[*/+-]$/;
  const endsWithEqualSign = /[=]$/;
  const endsWithdot = /[.]$/;
  const containsDot = /\d\.\d/;

  const [inpNum, setInpNum] = useState('');
  const [output, setOutput] = useState('');


  const allClear = () => {
    setOutput('');
    setInpNum('');
  }

  const handleClick = (e) => {

    // prevent the usage of consecutive and non-consecutive decimal points
    if (endsWithdot.test(output) && e.target.value === '.') {
      // setOutput(prev => prev.slice(0,-1) + e.target.value)
      return null
    }

    // prevent the usage of non-consecutive decimal points
    else if (containsDot.test(inpNum) && e.target.value === '.') {
      return null;
    }

    // prevent concatination of consecutive operators
    else if (['+', '-', '*', '/'].includes(e.target.value)) {
      setInpNum('');

      if (endsWithOperator.test(output)) {
        setOutput(prev => prev.slice(0,-1) + e.target.value)
      } 

      /* this will allow the user to perform more calculations after evaluating a previous expression */
      else if (endsWithEqualSign.test(output) && ['+', '-', '*', '/'].includes(e.target.value)) {
        setOutput(inpNum + e.target.value)
        setInpNum('')
      }

      else {
        setOutput(prev => prev + e.target.value)
      }
    } 

    /* this will allow the user to perform more calculations after evaluating a previous expression */
    else if (endsWithEqualSign.test(output) && !['+', '-', '*', '/'].includes(e.target.value)) {
      setInpNum(e.target.value)
      setOutput(e.target.value)
    }

    else if (inpNum.length > 10) {
      setTimeout(() => { 
        setInpNum('10 digits only!') 
      }, 1000);
    } 
    
    // preventing user from start wit 0 first (last condition allow user to start with 0 if number is less than one)
    else if (e.target.value === '0' && (inpNum === '' || inpNum === '0') && !endsWithOperator.test(output)) {
      setInpNum(e.target.value)
      setOutput(e.target.value)
    }

    else {
      setInpNum(prev => prev + e.target.value);
      setOutput(prev => prev + e.target.value)
    }
  }
  
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
      <div className='info'>
        <h1>Built by <span>Haitham Khadra</span></h1>
        <a href='#'>source code</a>
      </div>
    </div>
  );
}

export default App;
