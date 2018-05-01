import sum from '../sum.js';
suite('sum', () => {
  test('1 + 2 = 3', () => {
    assert.equal(sum(1, 2),3);
  });
});
