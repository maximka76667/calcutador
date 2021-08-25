// function add(a: number, b: number): number {
  
//   const fix = (a + '').length + (b + '').length + 1;
//   return +(a + b).toFixed(fix);
// }

// export default add;

function add(a: number, b: number): number {
  return fixResult(a + b);
}

function deduct(a: number, b: number): number {
  return fixResult(a - b);
}

function multiply(a: number, b:number): number {
  return fixResult(a * b);
}

function divide(a: number, b:number): number {
  return fixResult(a / b);
}

function fixResult(number: number): number {
  let numberString = number + '';
  if(numberString !== null) {
    if(checkIsFloatNumber(numberString)) {
      if(/\d+\.\d*0{15}\d/.test(numberString)) {
        return +numberString.replace(/0{15}\d/, '')
      }
      if(/\d+\.\d*9{15}\d/.test(numberString)) {
        return +(+numberString).toFixed(2);
      }
      return +numberString
    }
  }
  return number;
}

function checkIsFloatNumber(numberString: string): boolean {
  if(numberString.match(/\d+\.\d+/)) return true;
  return false;
}

export { add, deduct, multiply, divide }