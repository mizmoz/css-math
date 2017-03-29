
import parseValuesAndUnit from '../../src/helpers/parseValuesAndUnit';

describe('parse the list and return the values and unit', () => {
  it('should find the max value 100px', () => {
    expect(parseValuesAndUnit(['200px', '100px', '1323px'])).toEqual({
      values: [
        200,
        100,
        1323,
      ],
      unit: 'px',
    });
  });

  it('should throw exception with mixed unit types', () => {
    expect(() => {
      parseValuesAndUnit(['10%', '100px']);
    }).toThrowError('values cannot be mixed unit types');
  });

  it('should allow mixed types when the value is 0', () => {
    expect(parseValuesAndUnit(['10%', 0])).toEqual({
      values: [
        10,
        0,
      ],
      unit: '%',
    });
  });
});
