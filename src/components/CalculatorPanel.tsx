import { FormEvent } from "react"

interface Panel {
  handleClick: (e: FormEvent) => void,
  handleAction: (e: FormEvent) => void,
  handleReset: (e: FormEvent) => void,
  handleClearInput: (e: FormEvent) => void,
  handleDeleteLast: (e: FormEvent) => void
}

function CalculatorPanel(props: Panel) {
  return (
    <div className="calculator__panel">
      <button className="calculator__btn" type="button" onClick={props.handleClick}>1</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>2</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>3</button>
      <button className="calculator__btn" type="button" onClick={props.handleAction}>+</button>
      <button className="calculator__btn" type="button" onClick={props.handleReset}>Rst</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>4</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>5</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>6</button>
      <button className="calculator__btn" type="button" onClick={props.handleAction}>-</button>
      <button className="calculator__btn" type="button" onClick={props.handleDeleteLast}>Dlt</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>7</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>8</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>9</button>
      <button className="calculator__btn" type="button" onClick={props.handleAction}>*</button>
      <button className="calculator__btn" type="button" onClick={props.handleClearInput}>Clr</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>0</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>00</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>000</button>
      <button className="calculator__btn" type="button" onClick={props.handleAction}>/</button>
      <button className="calculator__btn" type="button" onClick={props.handleClick}>.</button>
      <button type="submit" className="calculator__btn calculator__equal-btn">=</button>
    </div>
  )
}

export default CalculatorPanel