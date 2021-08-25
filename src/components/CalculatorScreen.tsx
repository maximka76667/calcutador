interface Screen {
  prevNumber: string,
  action: string,
  inputFieldValue: string
}

function CalculatorScreen({ prevNumber, action, inputFieldValue }: Screen) {
  return (
    <div className="calculator__screen">
      <p className="calculator__action">{prevNumber} {action}</p>
      <input type="text" name="input" className="calculator__input" value={inputFieldValue} readOnly disabled />
    </div>
  )
}

export default CalculatorScreen