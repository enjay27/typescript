var person = {
    name: 'Noah',
    age: 30,
    hobbies: [],
    role: [2, 'author']
};
person.role.push(1);
person.role.push(2);
console.log(person.role);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
