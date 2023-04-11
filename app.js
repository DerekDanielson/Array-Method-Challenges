// Challenge 1
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30
    },
    {
        firstName: 'Jane',
        lastName: 'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-1111',
        age: 25
    },
    {
        firstName: 'Bob',
        lastName: 'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-1111',
        age: 45
    },
    {
        firstName: 'Sara',
        lastName: 'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-1111',
        age: 19
    },
    {
        firstName: 'Jose',
        lastName: 'koe',
        email: 'jose@gmail.com',
        phone: '555-555-1111',
        age: 23
    },
];

const youngPeople = people
    .filter((person) => person.age <= 25)
    .map((person) => ({
        name: person.firstName + ' ' + person.lastName,
        email: person.email
    }));

console.log(youngPeople);


// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
    .filter((number) => number > 0)
    .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);


// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const capWords = words.map(() => {
    return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(capWords);
































