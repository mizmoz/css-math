
import max from '../src/max';

describe('find the max value in the list', () => {
  it('should find the max value 100px', () => {
    expect(max(['200px', '100px', '1323px'])).toEqual('1323px');
  });

  it('should find the max value 15%', () => {
    expect(max(['15%', '123%', '16%'])).toEqual('123%');
  });
});
