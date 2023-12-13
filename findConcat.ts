import * as readlineSync from 'readline-sync';

function findConcat(vocabulary: string[], queries: string[]): [number, string[]][] {
    const results: [number, string[]][] = [];

    for (const query of queries) {
        const queryLength = query.length;
        const possibleConcatenations: string[] = [];

        for (let i = 1; i < queryLength; i++) {
            const prefix = query.substring(0, i);
            const suffix = query.substring(i);

            if (vocabulary.includes(prefix) && vocabulary.includes(suffix)) {
                possibleConcatenations.push(`${prefix}:${suffix}`);
            }
        }

        results.push([possibleConcatenations.length, possibleConcatenations]);
    }

    return results;
}


// Function to get N strings as input
function getStringsN(N: number): string[] {
    const stringsN: string[] = [];
    for (let i = 0; i < N; i++) {
        const userInput = readlineSync.question(`Enter string ${i + 1}: `);
        stringsN.push(userInput);
    }
    return stringsN;
}

// Function to get K strings as input
function getStringsK(K: number): string[] {
    const stringsK: string[] = [];
    for (let i = 0; i < K; i++) {
        const userInput = readlineSync.question(`Enter string ${i + 1}: `);
        stringsK.push(userInput);
    }
    return stringsK;
}

const N: number = readlineSync.questionInt('Enter the value of N: ');

const vocabulary: string[] = getStringsN(N);

const K: number = readlineSync.questionInt('Enter the value of K: ');

const queries: string[] = getStringsK(K);

const results = findConcat(vocabulary, queries);

results.forEach(([number, strings]) => {
    console.log(`${number} ${strings.join(' ')}`);
});

console.log("complexity = O(K*S)");