// console.log("Hello");

// const message = 'Hello there';
// message.toLowerCase();

// message();

// function flipCoin() {
//     // Meant to be Math.random()
//     return Math.random < 0.5;
// }

// const value = Math.random() < 0.5 ? "a" : "b";

// if (value !== "a") {
//     // ...
// } else if (value === "b") {
// }

// function greet(person: string, date?: number) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan", 12542255);
// greet("Brendan2");

// let message = "Hello";


// const func1 = () => {
//     // a
// }

// const func2: () => void;



// const prices: number[] = [1, 2, 5.5, 'aa'];
// const prices: Array<number | string | boolean> = [1, 2, 5.5, "hhh", false];

// // string | number | boolean


// function getFavoriteNumber(): number {
//     return 26;
// }

// const a: string = getFavoriteNumber();

// type Point = {
//     x: number;
//     y: number;
// };

// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     // if (pt.y)
//     console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 100, y: 100 });

// interface Point2 {
//     x: number;
//     y: number;
// }

// function printCoord2(pt: Point2) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
// printCoord2({ x: 100, y: 100 });


// type Gender = 'male' | 'female';

// enum ProductStatus {
//     OutOfStock = "Out of stock",
//     Available = "available"
// }

// console.log(ProductStatus.Available);

// interface IDirection {
//     Up: number
//     Down: string
//     Left: number
//     Right: string
// }

// enum Direction {
//     Up = 1,
//     Down = "shift",
//     Left = 2,
//     Right = "..."
// }

// if (Direction.Up) {

// }

// import { User1 } from "./interface-vs-type";

// const user: User1 = {
//     //...
// };

function identity<MyType>(arg: MyType): MyType {
    return arg;
}

const a: number = 5;
const b: string = 'hi';
identity(a);
identity(b);

interface Product {
    id: number,
    name: string,
    price: number
}

interface Order {
    id: number,
    date: Date,
    customer: string
}


function getData<DataStructure>(url: string): Promise<DataStructure> {
    return fetch(url).then(res => res.json());
}

const product = getData<Product>('http://localhost:3000/product');
const order = getData<Order>('http://localhost:3000/order');
