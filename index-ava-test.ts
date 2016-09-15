import test from 'ava';
import Calculator from './index';

var compareValue;

test.beforeEach(function() {
  compareValue = 10;
});

test('an async test works', async (t) => {
  var a = await new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 10);
  });
  t.is(a, compareValue);
});

test('adds two numbers', t => {
  var subject : Calculator = new Calculator();
  var result : number = subject.add(2, 8);
  t.is(result, compareValue);
});
