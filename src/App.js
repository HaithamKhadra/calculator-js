import './App.css';
import React, { useEffect, useState } from 'react';
// import { create, all } from 'mathjs';
// import swal from 'sweetalert';

// import userEvent from '@testing-library/user-event';

// through try catch error after calculation

// const config = { }
// const math = create(all, config)

const App = () => {

  const endsWithEqualSign = /[=]$/;
  const endsWithOperator = /[*+‑/]$/;
  const deci = /^\d*\.?\d+$/;
  
  const [inpChar, setinpChar] = useState(0);
  const [Sign, setSign] = useState('');
  const [answer, setAnswer] = useState('');
  const [outputDisplay, setoutputDisplay] = useState('');

  const clearInp = () => {
    setAnswer('');
    setinpChar(0);
    setoutputDisplay('');
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (answer && Sign === '') {
      setinpChar(e.target.value);
      setAnswer('');
    } else if ( inpChar === 0 && e.target.value === '0') {
      setTimeout(() => { 
        setinpChar('SYNTAX ERROR!') 
      }, 1000);
    } else if (inpChar === 0) {
      setinpChar(e.target.value);
    } else if (inpChar.length > 15) {
      setTimeout(() => { 
        setinpChar('Exceeded your Maximum Limit!') 
      }, 1000);
    } else if (!endsWithOperator.test(inpChar)) {
      setinpChar(prev => prev + Sign + e.target.value);
      setoutputDisplay(inpChar)
    } else {
      setinpChar(prev => prev + e.target.value);
      setoutputDisplay(inpChar)
    }
    setSign('') 
  }

  const getSign = (e) => {
    if(answer) {
      setinpChar(answer)
    }
    setSign(e.target.value);
    // endsWithEqualSign.test(outputDisplay) && setinpChar(answer)
  }

  const evalEquation = () => {
    try {
      // let x = Math.round(eval(inpChar) * 1000000000000) / 1000000000000;
      let x = eval(inpChar);
      setAnswer(x);
      setoutputDisplay(inpChar + '=' + x);
    } catch (error) {
      // swal("Careful! Every number can have a maximum of one decimal");
      setAnswer('');
      setinpChar(0);
      setoutputDisplay('0');
    }
  }

  return (

    <div className="App">
      <div id="calculator">

        {/* <main><h1 id="title">JavaScript Calculator</h1></main> */}

        <div className="display">
          <div id="output">{answer || answer === 0 ? outputDisplay : inpChar === 0 ? null : inpChar}&nbsp;&nbsp;</div>
          <div id="display" className="input">{answer || answer === 0 ? answer : inpChar}&nbsp;&nbsp;</div>
        </div>

        <div id="calculator-buttons">
          <button className="btn" onClick={clearInp} id="clear" value="AC">AC</button>
          <button className="btn" onClick={handleClick} id="openBracket" value="(">(</button>
          <button className="btn" onClick={handleClick} id="closeBracket" value=")">)</button>
          <button className="btn" onClick={handleClick} id="seven" value="7">7</button>
          <button className="btn" onClick={handleClick} id="eight" value="8">8</button>
          <button className="btn" onClick={handleClick} id="nine" value="9">9</button>
          <button className="btn" onClick={(e) => getSign(e)} id="multiply" value="*">x</button>
          <button className="btn" onClick={handleClick} id="four" value="4">4</button>
          <button className="btn" onClick={handleClick} id="five" value="5">5</button>
          <button className="btn" onClick={handleClick} id="six" value="6">6</button>
          <button className="btn" onClick={(e) => getSign(e)} id="divide" value="/">/</button>
          <button className="btn" onClick={handleClick} id="one" value="1">1</button>
          <button className="btn" onClick={handleClick} id="two" value="2">2</button>
          <button className="btn" onClick={handleClick} id="three" value="3">3</button>
          <button className="btn" onClick={(e) => getSign(e)} id="subtract" value="-">‑</button>
          <button className="btn" onClick={handleClick} id="zero" value="0">0</button>
          <button className="btn" onClick={handleClick} id="decimal" value=".">.</button>
          <button className="btn" onClick={evalEquation} id="equals" value="=" >=</button>
          <button className="btn" onClick={(e) => getSign(e)} id="add" value="+">+</button>
        </div>

      </div>
      {/* <p className='pre-name'>Designed and Coded by</p>
      <a href='#' id='myName'>Haitham Khadra</a> */}
    </div>
  );
}

export default App;
