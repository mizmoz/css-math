
import min from '../src/min';

describe('find the minimum value in the list', () => {
  it('should find the minimum value 100px', () => {
    expect(min(['200px', '100px', '1323px'])).toEqual('100px');
  });

  it('should find the minimum value 15%', () => {
    expect(min(['15%', '123%', '16%'])).toEqual('15%');
  });
});
