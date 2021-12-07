import { powerBinaries } from "./powerBinaries";
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

interface IPowerOptions {
  primaryArray: number[];
  inverseArray: number[];
}

// Creates a new array containing each binary value
// Pushes binary array into container array
const splitArrayIntoArrayOfValues = (data: string[]): string[][] => {
  let arrayContainer: string[][] = [];
  for (let index = 0; index < data.length; index++) {
    arrayContainer.push(data[index].split(""));
  }

  return arrayContainer;
};

// Counts and returns number of times value appears in array
const getOccurrenceOfValue = (array: any[], value: number | string) => {
  return array.filter((v) => v === value).length;
};

// Takes array containing arrays of string values and returns columns of values
// Loop value needs to be length of longest child array
const createArrayOfColumnValues = (arrContainer: string[][]): string[][] => {
  const loop: number = arrContainer[0].length;
  let columns: string[][] = [];

  for (let binaryPosition = 0; binaryPosition < loop; binaryPosition++) {
    let singleColumn: string[] = [];

    for (let i = 0; i < arrContainer.length; i++) {
      singleColumn.push(arrContainer[i][binaryPosition]);
    }

    columns.push(singleColumn);
  }

  return columns;
};

// Pass array of binary values to count number of times 0 or 1 appears in column
// Returns deconstructed object containing two arrays of binary values
const generatyBinaryInverseBinaryArrayFromColumn = (
  columnArray: string[][]
): IPowerOptions => {
  let primaryArray: number[] = [];
  let inverseArray: number[] = [];

  // Push either a 1 or 0 into array depending on occurence of value
  for (let index = 0; index < columnArray.length; index++) {
    const Zero = getOccurrenceOfValue(columnArray[index], "0");
    const One = getOccurrenceOfValue(columnArray[index], "1");
    if (One > Zero) {
      primaryArray.push(1);
      inverseArray.push(0);
    } else {
      primaryArray.push(0);
      inverseArray.push(1);
    }
  }

  return { primaryArray, inverseArray };
};

// Provide two binary arrays and multiple them together
const multipleTwoBinaryValueArrays = (array1: number[], array2: number[]) => {
  let array1Binary = array1.join("");
  let array2Binary = array2.join("");
  let array1Value = parseInt(array1Binary, 2);
  let array2Value = parseInt(array2Binary, 2);

  return array1Value * array2Value;
};

const arrayOfBitValues = splitArrayIntoArrayOfValues(powerBinaries);
const columnValues = createArrayOfColumnValues(arrayOfBitValues);
const { primaryArray, inverseArray }: IPowerOptions =
  generatyBinaryInverseBinaryArrayFromColumn(columnValues);
const powerConsumption = multipleTwoBinaryValueArrays(
  primaryArray,
  inverseArray
);

console.log(powerConsumption);
