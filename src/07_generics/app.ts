const names: Array<string> = ['Noah', 'Manuel'];

const promiseWithGeneric: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promiseWithGeneric.then(data => data.split(' ')).then(console.log);

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Noah', hobbies: ['Sports'] }, { age: 29 });// as {name: string, age: number};
const mergedObj2 = merge({ name: 'Noah' }, { age: 29 });// as {name: string, age: number};

console.log(mergedObj.hobbies);

interface Lengthwise {
    length: number;
}

function countAndDescribe<T extends Lengthwise>(element: T) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Noah' }, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Noah');
textStorage.addItem('Max');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Noah'});
objStorage.addItem({name: 'Max'});
objStorage.removeItem({name: 'Noah'});
console.log(objStorage.getItems());
