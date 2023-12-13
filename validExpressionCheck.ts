import * as readline from 'readline';

export default function isValidExpression(input: string): string {
  const stack: string[] = [];

  const isOpen = (char: string) => '({['.includes(char);
  const isClose = (char: string) => ')}]'.includes(char);

  const getMatchingOpening = (char: string) => {
    switch (char) {
      case ')':
        return '(';
      case '}':
        return '{';
      case ']':
        return '[';
      default:
        return '';
    }
  };

  for (const char of input) {
    if (isOpen(char)) {
      stack.push(char);
    } else if (isClose(char)) {
      const lastOpening = stack.pop();
      if (lastOpening !== getMatchingOpening(char)) {
        return 'Incorrect';
      }
    }
  }

  return stack.length === 0 ? 'Correct' : 'Incorrect';
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a string: ', (inputString: string) => {
  const result = isValidExpression(inputString.trim());
  console.log(`Result: ${result}`);
  rl.close();
});
