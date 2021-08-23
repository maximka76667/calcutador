// const [isFirstNumber, setIsFirstNumber] = React.useState(true);
//   const [input, setInput] = React.useState('');
//   const [firstNumber, setFirstNumber] = React.useState(0);
//   const [secondNumber, setSecondNumber] = React.useState(0);
//   const [action, setAction] = React.useState('');
//   const [result, setResult] = React.useState(0);
//   const [isResult, setIsResult] = React.useState(false);

//   // Test info
//   const [isInfoOpen, setIsInfoOpen] = React.useState(false);

//   function handleClick(e: FormEvent) {
//     e.preventDefault();

//     let target = e.target as HTMLElement
//     let inputNumber = input + target.innerText;

//     if(isResult) {
//       reset();
//     }
//     if(isFirstNumber || isResult) setFirstNumber(+inputNumber)
//     else setSecondNumber(+inputNumber);
//     setInput(inputNumber);
//   }

//   function handleChange(e: FormEvent<HTMLInputElement>) {
    
//   }

//   function handleAddition(e: FormEvent): void {
//     e.preventDefault();
//     if(isResult) {
//       reset();
//       setFirstNumber(result);
//     }
//     setIsFirstNumber(false);
//     setAction('+');
//   }

//   function handleSubtraction(e: FormEvent): void {
//     e.preventDefault();
//     if(isResult) {
//       reset();
//       setFirstNumber(result);
//     }
//     setIsFirstNumber(false);
//     setAction('-');
//   }

//   function handleMultiplication(e: FormEvent): void {
//     e.preventDefault();
//     if(isResult) {
//       reset();
//       setFirstNumber(result);
//     }
//     setIsFirstNumber(false);
//     setAction('*');
//   }

//   function handleDivision(e: FormEvent): void {
//     e.preventDefault();
//     if(isResult) {
//       reset();
//       setFirstNumber(result);
//     }
//     setIsFirstNumber(false);
//     setAction('/');
//   }

//   function handleReset(e: FormEvent): void {
//     e.preventDefault();
//     reset();
//   }

//   function handleDelete(e: FormEvent): void {
//     e.preventDefault();

//     let newInputValue = input.substr(0, input.length - 1);

//     setInput(newInputValue);
//     if(isFirstNumber || isResult) setFirstNumber(+newInputValue)
//     else setSecondNumber(+newInputValue);
//   }

//   function handleSubmit(e: FormEvent): void {
//     e.preventDefault();

//     let result = calculate();

//     reset();
//     setResult(result);
//     setIsResult(true);
//     setIsFirstNumber(false);
//   }

//   function calculate(): number {
//     switch (action) {
//       case '+':
//         return (firstNumber * 100 + secondNumber * 100) / 100;

//       case '-':
//         return (firstNumber * 100 - secondNumber * 100) / 100;

//       case '*':
//         return (firstNumber * 100 * secondNumber) / 100;

//       case '/':
//         return (firstNumber * 100 / secondNumber) / 100;
    
//       default:
//         return firstNumber;
//     }
//   }

//   function reset(): void {
//     setInput('');
//     setFirstNumber(0);
//     setSecondNumber(0);
//     setResult(0);
//     setIsResult(false);
//     setIsFirstNumber(true);
//     setAction('');
//   }

//   function changeMenuVisibility(): void {
//     setIsInfoOpen(!isInfoOpen);
//   }

//   function handleKeyDown(e: KeyboardEvent) {
//     if(e.code.match(/Numpad|Digit\d/)) {
//       console.log(e.key);
//       let inputValue = input + e.key;
//       setInput(inputValue);
//       if(isFirstNumber || isResult) setFirstNumber(+inputValue)
//       else setSecondNumber(+inputValue);
//     }
//   }

//   React.useEffect(() => {
//     document.addEventListener('keydown', (e) => {
//       handleKeyDown(e);
//     })
//   }, [])

//   React.useEffect(() => {
    
//   }, [input])

//   React.useEffect(() => {
//     // Turn to second number and clear input
//     if(!isFirstNumber) return setInput('');
//   }, [isFirstNumber])

export {}