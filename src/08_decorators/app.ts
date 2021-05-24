function Logger(logString: string) {//constructor: Function) {
	console.log('LOGGER FACTORY');
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	}
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY');
	return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(..._: any[]) {
				super();
				console.log('Rendering template...');
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector('h1')!.textContent = `Hi ${this.name}`;
				}
			}
		}
	}
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class DPerson {
	name = 'Noah';

	constructor() {
		console.log('Creating person object...');
	}
}

// const dPerson = new DPerson();

// console.log(dPerson);

function PropertyDecorator(target: any, propertyName: string) {
	console.log('Property decorator!');
	console.log(target, propertyName);
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function MethodDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('Method decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}


function ParameterDecorator(target: any, name: string | Symbol, position: number) {
	console.log('Parameter decorator');
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@PropertyDecorator
	title: string;
	_price: number;

	@AccessorDecorator
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive!');
		}
	}

	constructor(t: string, @ParameterDecorator p: number) {
		this.title = t;
		this._price = p;
	}

	@MethodDecorator
	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		},
	}
	return adjDescriptor;
}

class Printer {
	message = 'This works!';

	@Autobind
	showMessage () {
		return console.log(this.message);
	};
}

const p = new Printer();


const button8 = document.querySelector('button')!;
button8.addEventListener('click', p.showMessage);




interface ValidatorConfig {
	[property: string]: {
		[validatableProp: string]: string[]; // ['required', 'positive']
	}
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		[propName]: ['required']
	};
}

function PositiveNumber(target: any, propName: string) {
	registeredValidators[target.constructor.name] = {
		[propName]: ['positive']
	};
}

function dec_validate(obj: any) {
	const objValidatorConfig = registeredValidators[obj.constructor.name];
	if(!objValidatorConfig) {
		return true;
	}
	for (const prop in objValidatorConfig) {
		for (const validator of objValidatorConfig[prop]) {
			switch (validator) {
				case 'required':
					return !!obj[prop];
				case 'positive':
					return obj[prop] > 0;
			}
		}
	}
	return true;
}

class Course {
	@Required
	title: string;
	@PositiveNumber
	price: number;

	constructor(t: string, p:number) {
		this.title = t;
		this.price = p;
	}
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
	event.preventDefault();
	const titleEl = document.getElementById('title') as HTMLInputElement;
	const priceEl = document.getElementById('price') as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	const createdCourse = new Course(title, price);

	if(!dec_validate(createdCourse)){
		alert('Invalid input, please try again!');
		return;
	}
	console.log(createdCourse);
});