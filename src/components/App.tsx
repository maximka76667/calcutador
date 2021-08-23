import React, { FormEvent, useRef } from 'react';
import CalculatorPanel from './CalculatorPanel';
import CalculatorScreen from './CalculatorScreen';

function App(props: object) {

  const [prevNumber, setPrevNumber] = React.useState('');
  const [inputFieldValue, setInputFieldValue] = React.useState('');
  const [action, setAction] = React.useState('');
  const [isDone, setIsDone] = React.useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  function handleClick(e: FormEvent): void {
    e.preventDefault();

    let target = e.target as HTMLInputElement;

    updateInputValue(target.innerText);
  }

  function updateInputValue(newValue: string): void {
    function getNewValue(newValue: string): string {
      // If starts typing new expression
      if(isDone) {
        return newValue;
      }
      return inputFieldValue + newValue;
    }

    clear();

    setInputFieldValue(getNewValue(newValue));
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    if(!key.match(/Tab|F\d{1,2}/)){
      e.preventDefault();
      console.log(key);
      if(key.match(/^[\d{1}.]$/)) {
        updateInputValue(key);
      }
      if(key.match(/[+\-*/]/)) {
        updateAction(key);
      }
      if(key.match(/Enter|=/)) {
        submit();
      }
      if(key.match(/Backspace|Delete/)) {
        deleteLast();
      }
    }
  }

  function handleAction(e: FormEvent): void {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    updateAction(target.innerText);
  }

  function updateAction(action: string) {
    setAction(action);
    setPrevNumber(inputFieldValue || prevNumber || '0');
    clear();
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    submit();
  }

  function submit(): void {
    let result = calculate(+prevNumber, +inputFieldValue);
    reset();
    setIsDone(true);
    setInputFieldValue(result + '');
  }

  function calculate(a: number, b: number): number {
    const floatFixNumber = prevNumber.length * 100 + inputFieldValue.length * 100;
    function add(a: number, b: number): number {
      return (a * floatFixNumber + b * floatFixNumber) / floatFixNumber;
    }
  
    function deduct(a: number, b: number): number {
      return (a * floatFixNumber - b * floatFixNumber) / floatFixNumber;
    }

    function multiply(a: number, b:number): number {
      return (a * floatFixNumber * b) / floatFixNumber;
    }

    function divide(a: number, b:number): number {
      return (a * floatFixNumber / b) / floatFixNumber;
    }

    switch (action) {
      case '+':
        return add(a, b);
    
      case '-':
        return deduct(a, b);

      case '*':
        return multiply(a, b);

      case '/':
        return divide(a, b);

      default:
        return +inputFieldValue;
    }
  }

  function handleReset(e: FormEvent): void {
    e.preventDefault();
    reset();
  }

  function handleDeleteLast(e: FormEvent): void {
    e.preventDefault();
    deleteLast();
  }

  function deleteLast() {
    let newValue = inputFieldValue.slice(0, -1);
    setInputFieldValue(newValue);
  }

  function handleClearInput(e: FormEvent): void {
    e.preventDefault();
    clear();
  }

  function reset() {
    setInputFieldValue('');
    setPrevNumber('');
    setAction('');
    setIsDone(false);
  }

  function clear() {
    setInputFieldValue('');
    setIsDone(false);
  }

  React.useEffect(() => {
    if(inputFieldValue === '-') {
      setInputFieldValue('');
    }
  }, [inputFieldValue])

  React.useEffect(() => {
    if (appRef.current !== null) {
      appRef.current.focus();
    }
  }, [])

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown} ref={appRef}>
      <main className="content">
      <div className="calculator">
      <form className="calculator__form" onSubmit={handleSubmit}>
        <CalculatorScreen
          prevNumber={prevNumber}
          action={action}
          inputFieldValue={inputFieldValue}
        />
        <CalculatorPanel
          handleClick={handleClick}
          handleAction={handleAction}
          handleReset={handleReset}
          handleClearInput={handleClearInput}
          handleDeleteLast={handleDeleteLast}
        />
      </form>
      {/* <div className="calculator__info-wrapper">
        <div className={`calculator__info`}>
          <p>Input: {inputFieldValue}</p>
          <p>First Number: {prevNumber}</p>
          <p>Action: {action}</p>
          <p>isResult: {isDone.toString()}</p>
        </div>
      </div> */}
    </div>
      </main>
    </div>
  );
}

export default App;
