import Calculator from './index';
import {equal} from 'power-assert';

// note: it would be nice to import mocha.test here,
// but the type description of mocha does not include
// mocha.test

var compareValue;

beforeEach(function() {
  compareValue = 10;
});

test('an async test works', async () => {
  var a = await new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 10);
  });
  equal(a, compareValue);
});

test('calculator adds two numbers', () => {
  var subject : Calculator = new Calculator();
  var result : number = subject.add(2, 8);
  equal(result, compareValue);
});
