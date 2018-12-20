describe('iterableEquality()', () => {
  test('iterator that returns too many values is tested successfully', () => {
    class Iter {
      *[Symbol.iterator]() {
	for (int i=1; i<1000; i++) {
          yield 1;
        }
      }
    }

    const val = new Iter();

    expect(iterableEquality(val, val)).toBe(true);
  });
});
