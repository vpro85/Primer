function myFunction(param: number | string) {
  if (typeof param == 'number' || typeof param == 'string') {
    let result = param + 100;
    console.log('My result: ' + result);
  } else {
    throw 'Expected a number or a string: ' + param;
  }
}

myFunction(1);
myFunction('London');
