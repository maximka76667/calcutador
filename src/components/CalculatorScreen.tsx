interface Screen {
  prevNumber: string,
  action: string,
  inputFieldValue: string
}

function CalculatorScreen(props: Screen) {
  return (
    <div className="calculator__screen">
      <p className="calculator__action">{props.prevNumber} {props.action}</p>
      <input type="text" name="input" className="calculator__input" value={props.inputFieldValue} readOnly disabled />
    </div>
  )
}

export default CalculatorScreen