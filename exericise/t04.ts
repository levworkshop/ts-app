type User2 = {
    name: string;
    age: number;
};

function isAdult(user: User2): boolean {
    return user.age >= 18;
}

const justine: User2 = {
    name: 'Justine',
    age: 20,
};

const isJustineAnAdult = isAdult(justine);