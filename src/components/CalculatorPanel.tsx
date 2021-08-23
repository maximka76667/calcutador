import { FormEvent } from "react"

interface Panel {
  handleClick: (e: FormEvent) => void,
  handleAction: (e: FormEvent) => void,
  handleReset: (e: FormEvent) => void,
  handleClearInput: (e: FormEvent) => void,
  handleDeleteLast: (e: FormEvent) => void
}

function CalculatorPanel({ handleClick, handleAction, handleClearInput, handleDeleteLast, handleReset }: Panel) {
  return (
    <div className="calculator__panel">
      <button className="calculator__btn" type="button" onClick={handleClick}>1</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>2</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>3</button>
      <button className="calculator__btn" type="button" onClick={handleAction}>+</button>
      <button className="calculator__btn" type="button" onClick={handleReset}>Rst</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>4</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>5</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>6</button>
      <button className="calculator__btn" type="button" onClick={handleAction}>-</button>
      <button className="calculator__btn" type="button" onClick={handleDeleteLast}>Dlt</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>7</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>8</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>9</button>
      <button className="calculator__btn" type="button" onClick={handleAction}>*</button>
      <button className="calculator__btn" type="button" onClick={handleClearInput}>Clr</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>0</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>00</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>000</button>
      <button className="calculator__btn" type="button" onClick={handleAction}>/</button>
      <button className="calculator__btn" type="button" onClick={handleClick}>.</button>
      <button type="submit" className="calculator__btn calculator__equal-btn">=</button>
    </div>
  )
}

export default CalculatorPanel