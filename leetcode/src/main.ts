function NumberAddition(str: string) {
  let res = 0;
  let last = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const value = Number(char);
    const isNumber = !isNaN(value);

    if (char !== ' ' && isNumber) {
      last += char;
    } else if (last) {
      res += Number(last);
      last = '';
    }
  }

  if (last) res += Number(last);

  return res;
}

// keep this function call here
console.log(NumberAddition('75Number9'));
