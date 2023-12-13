import isValidExpression from './validExpressionCheck';

describe('isValidExpression', () => {
  test('should return "Correct" for a valid expression', () => {
    expect(isValidExpression('(123[abc]45)')).toBe('Correct');
  });

  test('should return "Incorrect" for an invalid expression', () => {
    expect(isValidExpression('([abc)]')).toBe('Incorrect');
  });

});