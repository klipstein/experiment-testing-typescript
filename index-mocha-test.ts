import Calculator from './index';
import {equal} from 'power-assert';

// note: it would be nice to import mocha.test here,
// but the type description of mocha does not include
// mocha.test

let compareValue;

suiteSetup(function() {
  compareValue = 10;
});

test('an async test works', async () => {
  var subject: Calculator = new Calculator();
  var result: number = await subject.somethingAsync();
  equal(result, compareValue);
});

test('calculator adds two numbers', () => {
  var subject: Calculator = new Calculator();
  var result: number = subject.add(2, 8);
  equal(result, compareValue);
});
