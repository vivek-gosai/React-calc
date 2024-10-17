import { useState } from "react";
import "../../App.css";

const Calc = () => {
    const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((first) => first + value);
  };

  const Clear = () => {
    setInput('');
    setResult('');
  };

  const Calculate = () => {
        const evalResult = eval(input);
      setResult(evalResult);
    }

    return(
        <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>÷</button>
  
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>×</button>
  
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>-</button>
  
          <button onClick={Clear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('+')}>+</button>
  
          <button className="equals" onClick={Calculate}>=</button>
        </div>
      </div>
    );   
};

export default Calc;