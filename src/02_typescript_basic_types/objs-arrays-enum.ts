enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: 'Noah',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.role);

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}