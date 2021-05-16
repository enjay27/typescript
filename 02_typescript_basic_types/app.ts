const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Noah',
    age: 30,
    hobbies: [],
    role: [2, 'author']
}

person.role.push(1); // typescript can't catch push
person.role.push(2);

console.log(person.role);


console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}