function myFunction(param: number | string) {
  if (typeof param == 'number') {
    let numberResult = param.toFixed(2);
    console.log('My result: ' + numberResult);
  } else {
    let stringResult = param + 100;
    console.log('My result: ' + stringResult);
  }
}

myFunction(1);
myFunction('London');

let condition: boolean = true;
let person: string = 'Bob';
const age: number = 40;

let place: string | undefined | null;
// console.log('Place value: ' + place + ' Type: ' + typeof place);
console.log(`Place value: ${place} Type: ${typeof place}`);

place = 'London';
// console.log('Place value: ' + place + ' Type: ' + typeof place);
console.log(`Place value: ${place} Type: ${typeof place}`);

place = null;
// console.log('Place value: ' + place + ' Type: ' + typeof place);
console.log(`Place value: ${place} Type: ${typeof place}`);

let firstBool = true;
let secondBool = false;

let firstString = 'This is a string';
let secondString = 'And so is this';

let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0xffff;

let person1 = 'Alice';
let person2: string | undefined = 'Bob';

let firstName = 'Adam';

if (firstName == 'Adam') {
  console.log('firstName is Adam');
} else if (firstName == 'Jacqui') {
  console.log('firstName is Jaqcui');
} else {
  console.log('firstName is neither Adam or Jacqui');
}

switch (firstName) {
  case 'Adam':
    console.log('firstName is Adam');
    break;
  case 'Jaqcui':
    console.log('firstName is Jaqcui');
    break;
  default:
    console.log('firstName is neither Adam or Jacqui');
    break;
}

let firstVal = 5;
let secondVal = '5';

// if (firstVal == secondVal) {
//   console.log('They are the same');
// } else {
//   console.log('They are NOT the same');
// }

// if (firstVal === secondVal) {
//   console.log('They are the same');
// } else {
//   console.log('They are NOT the same');
// }

let myData1 = (5).toString() + String(5);
let myData2 = Number(5) + parseInt('5');

console.log(`Result 1: ${myData1}, Type: ${typeof myData1}`);
console.log(`Result 2: ${myData2}, Type: ${typeof myData2}`);

let val1: string | undefined;
let val2: string | undefined = 'London';
let val3: number | undefined = 0;

let coalesced1 = val1 ?? 'fallback value';
let coalesced2 = val2 ?? 'fallback value';
let coalesced3 = val3 ?? 100;

console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);

let count: number | undefined | null = 100;
if (count != null && count !== undefined) {
  let result1: string = count.toFixed(2);
  console.log(`Result 1: ${result1}`);
}

let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2}`);

function composeString(val: string): string {
  return `Composed string: ${val}`;
}

function writeValue(val?: string) {
  console.log(composeString(val ?? 'Fallback value'));
}

writeValue('London');
writeValue();

function getUKCapital(): string {
  return 'London';
}

function writeCity(f: () => string) {
  console.log(`City: ${f()}`);
}

writeCity(getUKCapital);
writeCity(() => 'Paris');
let myCity = 'Rome';
writeCity(() => myCity);

let myArray: (number | string | boolean)[] = [100, 'Adam', true];
let otherArray = [...myArray, 200, 'Bob', false];

let sum: number = otherArray
  .filter((val) => typeof val == 'number')
  .reduce((total: number, val) => total + (val as number), 0);

console.log(`Sum: ${sum}`);

// for (let i = 0; i < myArray.length; i++) {
//   console.log('Index ' + i + ': ' + myArray[i]);
// }

// console.log('---');

otherArray.forEach((value, index) =>
  console.log('Index ' + index + ': ' + value)
);
