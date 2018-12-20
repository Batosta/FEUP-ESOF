describe('iterableEquality()', () => {
  test('self-returning iterator does not explode', () => {
    class Iter {
      *[Symbol.iterator]() {
        yield this;
      }
    }

    const val = new Iter();

    expect(iterableEquality(val, val)).toBe(true);
  });
});
