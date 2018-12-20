describe('iterableEquality()', () => {
  test('Dont return true to comparison between different self-returning iterables', () => {
    class Iter {
      *[Symbol.iterator]() {
        yield this;
      }
    }

    const val = new Iter();
    const val2 = new Iter();

    expect(iterableEquality(val, val2)).toBe(false);
  });
});
