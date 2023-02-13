interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

interface UserReadOnly {
    name: string;
    age: number;
    readonly: boolean;
}

type UserType = User | Admin | UserReadOnly;

const persons: Array<UserType> = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: UserType) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(person => logPerson(person));

