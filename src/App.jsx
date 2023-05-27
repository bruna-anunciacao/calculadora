import { useState } from 'react';
import { keyPress } from './hooks/keyPress';

function App() {

  
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ['/', '*', '+', '-','.']; 

  const updtCalc = value => {
    if (operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))){
      return;
    }
    setCalc(calc + value);

    if (!operators.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i} onClick={() => updtCalc(i.toString())}>{i}</button>);
    }
    return digits;
  };

  const finalResult = () => {
    setCalc(eval(calc).toString());
  }

  const deleteNumber = () => {
    if (calc == ''){
      setResult('');
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    setResult(eval(value));

  }

  const deleteAll = () => {
    if (calc == ''){
      return;
    }
    const value = ''
    setCalc(value);
    setResult(value);
  }
    
  keyPress('Enter', finalResult);
  keyPress('Backspace', deleteNumber);
  keyPress('Delete', deleteAll);
  
  return (
    <>
      <div className="App">
        <div className="calculator">
          <div className="display">
            { result ? <span>({result})</span>: ''} {calc || 0}
          </div>
          <div className="buttons-design">
          <div className="operator">
            <button onClick={deleteNumber}>DEL</button>
            <button onClick={() => updtCalc('/')}>/</button>
            <button onClick={() => updtCalc('*')}>*</button>
            <button onClick={() => updtCalc('+')}>+</button>
            <button onClick={() => updtCalc('-')}>-</button>
            <button onClick={finalResult}>=</button>
          </div>
          <div className="digit">
            {createDigits()}
            <button onClick={() => updtCalc('.')}>.</button>
            <button onClick={() => updtCalc('0')}>0</button>
            <button onClickCapture={deleteAll}>C</button>
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
