const hashMap = {
  ')': '(',
  '}': '{',
  ']': '[',
};

function isValid(s: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const isClose = char in hashMap;

    if (isClose) {
      const open = hashMap[char as keyof typeof hashMap];
      if (stack[stack.length - 1] === open) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));
