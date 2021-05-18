const constName = 'Noah';

let age = 30;

age = 29;

const addTwo = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(addTwo(3));

const button4 = document.querySelector('button');

if(button4) {
    button4.addEventListener('click', event => console.log(event));
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies: ((string | string[])[]) = ['Hiking'];

activeHobbies.push(hobbies);
activeHobbies.push(...hobbies);

const copiedPerson = { ...person };

const addRest = (...numbers: number[]) => {
    return numbers.reduce((pre, cur) => pre + cur, 0);
};

const addResult = addRest(1, 10, 5, 2.7);
console.log(addResult);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, );

const {name: firstName, age: firstAge } = person;

