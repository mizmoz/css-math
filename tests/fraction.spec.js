
import fraction from '../src/fraction';

describe('parse the string with fraction', () => {
  it('should calculate one third of 100%', () => {
    expect(fraction('1/3', '100%')).toEqual('33.333333%');
  });

  it('should calculate two fifths of 1000px', () => {
    expect(fraction('2/5', '1000px')).toEqual('400px');
  });

  it('should calculate ten fifths of 30rem', () => {
    expect(fraction('10/5', '30rem')).toEqual('60rem');
  });

  it('should calculate a more complex example 1px + (8 * (8 + 2))', () => {
    expect(fraction('4/2', '100%')).toEqual('200%');
  });

  it('should calculate 100% of 30rem', () => {
    expect(fraction('100%', '30rem')).toEqual('30rem');
  });

  it('should calculate 40% of 200px', () => {
    expect(fraction('40%', '200px')).toEqual('80px');
  });
});
