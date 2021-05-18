import {Employee} from './app';
import {Admin} from './app';

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp) {
        console.log('privileges: ' + emp.startDate);
    }
}

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
    name: 'Noah',
    privileges: ['create-server'],
    startDate: new Date()
}

console.log(emp1);

printEmployeeInformation(emp1);
printEmployeeInformation({name: 'Noah', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) { // instanceof can't compare interfaces
        vehicle.loadCargo(1000);
    }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    // if('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed);
    // }
    // if('runningSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.runningSpeed);
    // }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');// as HTMLInputElement;

if(userInputElement && userInputElement instanceof HTMLInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer { // { email : 'Not a valid email', 'username: 'Must start with a character' }
    [prop: string]: string;
}

export const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a character!'
};

