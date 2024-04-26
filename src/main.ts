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

let firstVal: any = 5;
let secondVal: any = '5';

if (firstVal == secondVal) {
  console.log('They are the same');
} else {
  console.log('They are NOT the same');
}

if (firstVal === secondVal) {
  console.log('They are the same');
} else {
  console.log('They are NOT the same');
}
