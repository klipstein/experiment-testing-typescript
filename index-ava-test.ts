import test from 'ava';
import Calculator from './index';

var compareValue;

test.beforeEach(function() {
  compareValue = 10;
});

test('an async test works', async (t) => {
  var subject: Calculator = new Calculator();
  var result: number = await subject.somethingAsync();
  t.is(result, compareValue);
});

test('adds two numbers', t => {
  var subject : Calculator = new Calculator();
  var result : number = subject.add(2, 8);
  t.is(result, compareValue);
});
