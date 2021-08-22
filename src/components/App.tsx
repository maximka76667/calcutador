import React, { FormEvent } from 'react';

function App(props: object) {

  const [isFirstNumber, setIsFirstNumber] = React.useState(true);
  const [input, setInput] = React.useState('');
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  const [action, setAction] = React.useState('');
  const [result, setResult] = React.useState(0);
  const [isResult, setIsResult] = React.useState(false);

  // Test info
  const [isInfoOpen, setIsInfoOpen] = React.useState(false);

  function handleClick(e: FormEvent) {
    e.preventDefault();

    let target = e.target as HTMLInputElement;
    let inputNumber = input + target.innerText;

    if(isResult) {
      reset();
    }
    if(isFirstNumber || isResult) setFirstNumber(+inputNumber)
    else setSecondNumber(+inputNumber);
    setInput(inputNumber);
  }

  function handleChange(e: FormEvent) {
    let target = e.target as HTMLInputElement;
  }

  function handleAddition(e: FormEvent) {
    e.preventDefault();
    if(isResult) {
      reset();
      setFirstNumber(result);
    }
    setIsFirstNumber(false);
    setAction('+');
  }

  function handleSubtraction(e: FormEvent) {
    e.preventDefault();
    if(isResult) {
      reset();
      setFirstNumber(result);
    }
    setIsFirstNumber(false);
    setAction('-');
  }

  function handleMultiplication(e: FormEvent) {
    e.preventDefault();
    if(isResult) {
      reset();
      setFirstNumber(result);
    }
    setIsFirstNumber(false);
    setAction('*');
  }

  function handleDivision(e: FormEvent) {
    e.preventDefault();
    if(isResult) {
      reset();
      setFirstNumber(result);
    }
    setIsFirstNumber(false);
    setAction('/');
  }

  function handleReset(e: FormEvent) {
    e.preventDefault();

    reset();
  }

  function handleDelete(e: FormEvent) {
    e.preventDefault();

    let newInputValue = input.substr(0, input.length - 1);

    setInput(newInputValue);
    if(isFirstNumber || isResult) setFirstNumber(+newInputValue)
    else setSecondNumber(+newInputValue);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    let result = calculate();

    reset();
    setResult(result);
    setIsResult(true);
    setIsFirstNumber(false);
  }

  function calculate(): number {
    switch (action) {
      case '+':
        return firstNumber + secondNumber;

      case '-':
        return firstNumber - secondNumber;

      case '*':
        return firstNumber * secondNumber;

      case '/':
        return firstNumber / secondNumber
    
      default:
        return result;
    }
  }

  function reset() {
    setInput('');
    setFirstNumber(0);
    setSecondNumber(0);
    setResult(0);
    setIsResult(false);
    setIsFirstNumber(true);
    setAction('');
  }

  function changeMenuVisibility() {
    setIsInfoOpen(!isInfoOpen);
  }

  React.useEffect(() => {
    // Turn to second nubmer and clear input
    if(!isFirstNumber) return setInput('');
  }, [isFirstNumber])

  return (
    <div className="app">
      <main className="content">
        <form className="calculator" onSubmit={handleSubmit}>
          <p className="calculator__prevNumber">Previous Number: { !isFirstNumber ? firstNumber : 'empty' }</p>
          <input type="text" name="input" className="calculator__input" value={input} onChange={handleChange} readOnly />
          <p className="calculator__result">Result: { isResult ? result : 'empty' }</p>
          <div className="calculator__panel">
            <button className="calculator__number-btn" onClick={handleClick}>1</button>
            <button className="calculator__number-btn" onClick={handleClick}>2</button>
            <button className="calculator__number-btn" onClick={handleClick}>3</button>
            <button className="calculator__action-btn" onClick={handleAddition}>+</button>
            <button className="calculator__action-btn" onClick={handleReset}>Rst</button>
            <button className="calculator__number-btn" onClick={handleClick}>4</button>
            <button className="calculator__number-btn" onClick={handleClick}>5</button>
            <button className="calculator__number-btn" onClick={handleClick}>6</button>
            <button className="calculator__action-btn" onClick={handleSubtraction}>-</button>
            <button className="calculator__action-btn" onClick={handleDelete}>Dlt</button>
            <button className="calculator__number-btn" onClick={handleClick}>7</button>
            <button className="calculator__number-btn" onClick={handleClick}>8</button>
            <button className="calculator__number-btn" onClick={handleClick}>9</button>
            <button className="calculator__action-btn" onClick={handleMultiplication}>*</button>
            <button className="calculator__number-btn" onClick={handleClick}>.</button>
            <button className="calculator__number-btn" onClick={handleClick}>0</button>
            <button className="calculator__number-btn" onClick={handleClick}>00</button>
            <button className="calculator__number-btn" onClick={handleClick}>000</button>
            
            
            
            
            <button className="calculator__action-btn" onClick={handleDivision}>/</button>
            
            
            <button type="submit" className="calculator__equal-btn">=</button>
          </div>
          <div className="info" onClick={changeMenuVisibility}>
            <div className={`info__menu ${ isInfoOpen ? '' : ''}`}>
              <p>Input: {input || 'empty'}</p>
              <p>First Number: {firstNumber}</p>
              <p>Second Number: {secondNumber}</p>
              <p>isFirstNumber: {isFirstNumber.toString()}</p>
              <p>Action: {action || 'empty' }</p>
              <p>Result: {result || 0}</p>
              <p>isResult: {isResult.toString()}</p>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
