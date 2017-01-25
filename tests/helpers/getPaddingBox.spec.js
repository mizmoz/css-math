
import getPaddingBox from '../../src/helpers/getPaddingBox';

describe('get style padding box', () => {
  it('should return no padding', () => {
    expect(getPaddingBox('0px')).toEqual({
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      width: '0px',
      height: '0px',
    });
  });

  it('should return 10px for each value', () => {
    expect(getPaddingBox('10px')).toEqual({
      top: '10px',
      bottom: '10px',
      left: '10px',
      right: '10px',
      width: '20px',
      height: '20px',
    });
  });

  it('should return 15px top and bottom only', () => {
    expect(getPaddingBox('15px 0px')).toEqual({
      top: '15px',
      bottom: '15px',
      left: '0px',
      right: '0px',
      width: '0px',
      height: '30px',
    });
  });

  it('should return 20px right and left only', () => {
    expect(getPaddingBox('0px 20px')).toEqual({
      top: '0px',
      bottom: '0px',
      left: '20px',
      right: '20px',
      width: '40px',
      height: '0px',
    });
  });

  it('should return top 5px, right 10px bottom 15px left 20px', () => {
    expect(getPaddingBox('5px 10px 15px 20px')).toEqual({
      top: '5px',
      bottom: '15px',
      left: '20px',
      right: '10px',
      width: '30px',
      height: '20px',
    });
  });

  it('should return default value for positions', () => {
    expect(getPaddingBox('advanced', 'none')).toEqual({
      top: 'advanced',
      bottom: 'advanced',
      left: 'advanced',
      right: 'advanced',
      width: 'none',
      height: 'none',
    });
  });
});
