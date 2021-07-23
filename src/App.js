import './App.css';
import React, { useEffect, useState } from 'react';
// import { create, all } from 'mathjs';
// import swal from 'sweetalert';

// import userEvent from '@testing-library/user-event';

// through try catch error after calculation

// const config = { }
// const math = create(all, config)

const App = () => {

  const endsWithOperator = /[*+‑/]$/;

  const [inpNum, setInpNum] = useState(0);
  const [output, setOutput] = useState('');
  const [operator, setOperator] = useState('');
  // const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('');

  const allClear = () => {
    setOutput('');
    setInpNum(0);
    setOperator('')
  }

  // const handleClick = (e) => {
  //   if (inpNum === 0) {
  //     setInpNum(e.target.value)
  //     setOutput(e.target.value);
  //   } else if (operator !== '') {
  //     setOutput(prev => prev + operator);
  //     setInpNum(e.target.value)
  //   } else if (!endsWithOperator.test(inpNum)) {
  //     // setOutput(prev => prev + e.target.value)
  //     setInpNum(prev => prev + e.target.value);
  //     setOutput(inpNum)
  //   }
  //   else {
  //     setInpNum(prev => prev + e.target.value);
  //     setOutput(prev => prev + e.target.value);
  //   }
  //   setOperator('');
  // }

  const handleClick = (e) => {
    if (answer && operator === '') {
      setInpNum(e.target.value);
      setAnswer('');
    } else if (['+', '-', '*', '/'].includes(e.target.value)) {
      setInpNum(0);
      setOutput(prev => prev + operator)      
    }
    // else if ( inpNum === 0 && e.target.value === '0') {
    //   setTimeout(() => { 
    //     setInpNum('SYNTAX ERROR!') 
    //   }, 1000);
    // } 
    else if (inpNum === 0) {
      setInpNum(e.target.value);
    }
    //  else if (inpNum.length > 15) {
    //   setTimeout(() => { 
    //     setInpNum('Exceeded your Maximum Limit!') 
    //   }, 1000);
    // } 
    // else if (!endsWithOperator.test(inpNum)) {
    //   setInpNum(prev => prev + operator + e.target.value);
    //   setOutput(inpNum)
    // } 
    else {
      setInpNum(prev => prev + e.target.value);
      setOutput(inpNum)
    }
    setOperator('') 
  }

  const getOperator = (e) => {
    // if(answer) {
    //   setInpNum(answer)
    // }
    setOperator(e.target.value);
    // setExpression( e.target.value);
  }

  // const handleOutput = () => {
  //   setOutput(inpNum);
  // }

  return (

    <div className="App">
      <div id="calculator">

        <div className="display">
          <div id="output">{output}</div>
          <div id="display" className="input">{inpNum}</div>
        </div>

        <div id="calculator-buttons">
          <button onClick={allClear} className="btn" id="clear" value="AC">AC</button>
          <button onClick={handleClick} className="btn" id="openBracket" value="(">(</button>
          <button onClick={handleClick} className="btn" id="closeBracket" value=")">)</button>
          <button onClick={handleClick} className="btn" id="seven" value="7">7</button>
          <button onClick={handleClick} className="btn" id="eight" value="8">8</button>
          <button onClick={handleClick} className="btn" id="nine" value="9">9</button>
          <button onClick={getOperator} className="btn" id="multiply" value="*">x</button>
          <button onClick={handleClick} className="btn" id="four" value="4">4</button>
          <button onClick={handleClick} className="btn" id="five" value="5">5</button>
          <button onClick={handleClick} className="btn" id="six" value="6">6</button>
          <button onClick={getOperator} className="btn" id="divide" value="/">/</button>
          <button onClick={handleClick} className="btn" id="one" value="1">1</button>
          <button onClick={handleClick} className="btn" id="two" value="2">2</button>
          <button onClick={handleClick} className="btn" id="three" value="3">3</button>
          <button onClick={getOperator} className="btn" id="subtract" value="-">‑</button>
          <button onClick={handleClick} className="btn" id="zero" value="0">0</button>
          <button onClick={handleClick} className="btn" id="decimal" value=".">.</button>
          <button onClick={handleClick} className="btn" id="equals" value="=" >=</button>
          <button onClick={getOperator} className="btn" id="add" value="+">+</button>
        </div>

      </div>
    </div>
  );
}

export default App;
