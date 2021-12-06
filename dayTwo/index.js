"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directions_1 = require("./directions");
const testData = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
];
let coords = {
    horizontal: 0,
    depth: 0,
    aim: 0,
};
for (const key in directions_1.directions) {
    if (Object.prototype.hasOwnProperty.call(directions_1.directions, key)) {
        const element = directions_1.directions[key].split(" ");
        const value = parseInt(element[1]);
        switch (element[0]) {
            case "forward":
                coords.horizontal = coords.horizontal + value;
                coords.depth = coords.depth + coords.aim * value;
                break;
            case "up":
                coords.aim = coords.aim - value;
                break;
            case "down":
                coords.aim = coords.aim + value;
                break;
            default:
                break;
        }
    }
}
const finalPoint = coords.horizontal * coords.depth;
console.log(coords, finalPoint);
