"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const testData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
// Day 1 - Part 1
let total = 0;
for (let index = 1; index < data_1.data.length; index++) {
    const last = data_1.data[index - 1];
    const current = data_1.data[index];
    if (current > last)
        total++;
}
console.log(total);
// Day 1 - Part 2
let total2 = 0;
for (let index = 3; index < data_1.data.length; index++) {
    const last = data_1.data[index - 1] + data_1.data[index - 2] + data_1.data[index - 3];
    const current = data_1.data[index] + data_1.data[index - 1] + data_1.data[index - 2];
    if (current > last)
        total2++;
}
console.log(total2);
