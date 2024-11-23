import { Tinytest } from "meteor/tinytest";
import {ReactiveStack } from "meteor/jkuester:reactive-stack";
import { Tracker } from 'meteor/tracker'

const timeout = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms)
})

Tinytest.add('non reactive', function (test) {
  const s = new ReactiveStack()
  test.equal(s.size(), 0);
  test.equal(s.peek(), undefined);
  s.push('foo')
  test.equal(s.size(), 1);
  test.equal(s.peek(), 'foo');
  s.push('bar')
  test.equal(s.size(), 2);
  test.equal(s.peek(), 'bar');
  s.push('baz')
  test.equal(s.size(), 3);
  test.equal(s.peek(), 'baz');

  // no effect on undefined
  s.push()
  test.equal(s.size(), 4);
  test.equal(s.peek(), undefined);

  s.pop()
  test.equal(s.size(), 3);
  test.equal(s.peek(), 'baz');
  s.pop()
  test.equal(s.size(), 2);
  test.equal(s.peek(), 'bar');
  s.pop()
  test.equal(s.size(), 1);
  test.equal(s.peek(), 'foo');
  s.pop()
  test.equal(s.size(), 0);
  test.equal(s.peek(), undefined);
  s.pop()
  test.equal(s.size(), 0);
  test.equal(s.peek(), undefined);
});

Tinytest.addAsync('reactive', async function (test) {
  const s = new ReactiveStack()
  const out = []

  Tracker.autorun(() => {
    const size = s.size()
    const item = s.peek()
    out.push({ size, item })
  })

  await timeout(10)
  s.push('foo')
  await timeout(10)
  s.push('bar')
  await timeout(10)
  s.push('baz')
  await timeout(10)
  s.push()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)
  s.pop()
  await timeout(10)

  const expected = [
    { size: 0, item: undefined },
    { size: 1, item: 'foo' },
    { size: 2, item: 'bar' },
    { size: 3, item: 'baz' },
    { size: 4, item: undefined },
    { size: 3, item: 'baz' },
    { size: 2, item: 'bar' },
    { size: 1, item: 'foo' },
    { size: 0, item: undefined },
  ]

  test.equal(out, expected)
});
