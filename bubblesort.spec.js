describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('completes sorting', function() {
    expect(bubbleSort([1, 3, 8, 5, 4])).toEqual([1, 3, 4, 5, 8]);
  });
});
