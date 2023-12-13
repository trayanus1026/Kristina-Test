import * as readline from 'readline';

function isPerfectSquare(num: number): boolean {
    const sqrt = Math.sqrt(num);
    return Math.floor(sqrt) === sqrt;
}

function isFibonacci(num: number): boolean {
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

function generateNonFibonacci(count: number): number[] {
    const nonFibonacciNumbers: number[] = [];
    let num = 0;

    while (nonFibonacciNumbers.length < count) {
        if (!isFibonacci(num)) {
            nonFibonacciNumbers.push(num);
        }
        num++;
    }

    return nonFibonacciNumbers;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter a number: ', (inputNumber: string) => {
    const parsedNum = parseInt(inputNumber);
    if (!isNaN(parsedNum)) {
        const result = generateNonFibonacci(parsedNum);
        result.forEach((number) => console.log(number));
    } else {
        console.log('Invalid input. Please enter a valid number.');
    }
    rl.close();
});

