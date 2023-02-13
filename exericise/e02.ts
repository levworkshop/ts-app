// let falcon91 = 'awasome spacecraft';

type AstronautType = {
    age: number | string;
    name?: string;
}

function Astronaut(age: number | string, name?: string): AstronautType {
    return {
        age: age,
        name: name,
    };
};

let astronauts = [
    Astronaut(75),
    Astronaut('81', 'Sally'),
    Astronaut(99, 'Charles'),
];

const falcon91 = [];

for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status = '';
    if (falcon91.push(astronaut)) {
        status = "On board";
    } else {
        status = "Not on board";
    }
    console.log(`${astronaut.name}: ${status}`);
}