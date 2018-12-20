describe('iterableEquality()', () => {
  test('Verify that iterableEquality is not ignoring other values returned by the iterable, when one of them is an infinite iterable', () => {
    class Iter {
      *[Symbol.iterator]() {
        yield this;
      }
    }

    const val = new Iter();
    const container1 = {val , 5};
    const container2 = {val , 6};
    expect(iterableEquality(container1, container2)).toBe(false);
    expect(iterableEquality(container1, container1)).toBe(true);
  });
});