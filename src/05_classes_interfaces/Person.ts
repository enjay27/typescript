// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string; // default in Java

    greetAll?() :void; // optional method
}
interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;
    constructor(n?: string){
        if(n) {
            this.name = n;
        } 
    }

    greet(phrase: string): void {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi');
        }
    }
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user2: Greetable;

user2 = new Person('Noah');
user2.greet('Hello');

let user3 = new Person();
user3.greet('Hello');