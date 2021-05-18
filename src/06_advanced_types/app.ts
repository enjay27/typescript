// import { errorBag } from "./06_advanced_types/AboutTypes";

export type Admin = {
    name: string;
    privileges: string[];
};

export type Employee = {
    name: string;
    startDate: Date;
};

// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;
export function addCombinable(a: number, b:number): number;
export function addCombinable(a: string, b:string): string;
export function addCombinable(a: number, b:string): string;
export function addCombinable(a: string, b:number): string;
export function addCombinable(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') { // type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

// console.log(errorBag);

const resultCombine = addCombinable('Noah', 'Kyu');
resultCombine.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Noah',
    job: { title: 'CTO', description: 'My own company' }
};
// optional chaining
console.log(fetchedUserData?.job?.title); // (fetchedUserData.job.title && fetchedUserData.job.title);

const userNullInput = '';

const storedData = userNullInput ?? 'DEFAULT'; //userNullInput || 'DEFAULT';

console.log(storedData);

