function addNumbersBasic(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result : ' + num);    
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(addNumbersBasic(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = addNumbersBasic;

addAndHandle(10, 20, (result) => {
    console.log(result);
});