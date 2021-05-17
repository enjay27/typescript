function addNumbersWithPhrase(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        return phrase + result;
    } else {
        return result;
    }
}

let number1 = 5;
const number2 = 2.8;
const printResultCondition = true;
const resultPhrase = 'Result is : ';

const result = addNumbersWithPhrase(number1, number2, printResultCondition, resultPhrase);
console.log(result);
