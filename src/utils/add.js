function add(a, b) {
  
  const fix = (a + '').length + (b + '').length + 1;
  console.log(fix, a, b);
  return +(a + b).toFixed(fix);
}

export default add;