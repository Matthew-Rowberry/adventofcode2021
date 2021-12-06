"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powerBinaries_1 = require("./powerBinaries");
const testData = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
];
let container = [];
for (let index = 0; index < powerBinaries_1.powerBinaries.length; index++) {
    // Creates a new array containing each binary value
    const binaryArrays = powerBinaries_1.powerBinaries[index].split("");
    // Pushes binary array into container array
    container.push(binaryArrays);
}
let columns = [];
for (let binaryPosition = 0; binaryPosition < 12; binaryPosition++) {
    let singleColumn = [];
    for (let i = 0; i < container.length; i++) {
        singleColumn.push(container[i][binaryPosition]);
    }
    columns.push(singleColumn);
}
function getOccurrence(array, value) {
    return array.filter((v) => v === value).length;
}
let gammaArray = [];
let gammaBinary = "";
let gamma = 0;
let epsilonArray = [];
let epsilonBinary = "";
let epsilon = 0;
for (let index = 0; index < columns.length; index++) {
    let Zero = getOccurrence(columns[index], "0");
    let One = getOccurrence(columns[index], "1");
    if (One > Zero) {
        gammaArray.push(1);
        epsilonArray.push(0);
    }
    else {
        gammaArray.push(0);
        epsilonArray.push(1);
    }
}
gammaBinary = gammaArray.join("");
epsilonBinary = epsilonArray.join("");
gamma = parseInt(gammaBinary, 2);
epsilon = parseInt(epsilonBinary, 2);
const powerConsumption = gamma * epsilon;
console.log(powerConsumption);
