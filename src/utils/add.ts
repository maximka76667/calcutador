function add(a: number, b: number): number {
  
  const fix = (a + '').length + (b + '').length + 1;
  return +(a + b).toFixed(fix);
}

export default add;