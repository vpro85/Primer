function myFunction(param: number | string) {
  if (typeof param == 'number' || typeof param == 'string') {
    let fixed = param.toFixed(2);
    console.log('My result: ' + fixed);
  } else {
    throw 'Expected a number or a string: ' + param;
  }
}

myFunction(1);
myFunction('London');
