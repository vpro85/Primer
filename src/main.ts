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
console.log('Place value: ' + place + ' Type: ' + typeof place);

place = 'London';
console.log('Place value: ' + place + ' Type: ' + typeof place);

place = null;
console.log('Place value: ' + place + ' Type: ' + typeof place);

let firstBool = true;
let secondBool = false;

let firstString = "This is a string";
let secondString = 'And so is this';
