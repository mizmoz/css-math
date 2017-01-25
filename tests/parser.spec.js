
import parser, { findAndReplaceUnits } from '../src/parser';

describe('parse the string', () => {
  it('should calculate 5px + 5', () => {
    expect(parser('5px + 5')).toEqual('10px');
  });

  it('should calculate 10px + 10px', () => {
    expect(parser('10px + 10px')).toEqual('20px');
  });

  it('should calculate 10.5px + 1.25px', () => {
    expect(parser('10.5px + 1.25px')).toEqual('11.75px');
  });

  it('should calculate a more complex example 1px + (8 * (8 + 2))', () => {
    expect(parser('1px + (8 * (8 + 2))')).toEqual('81px');
  });

  it('should calculate with percents, ', () => {
    expect(parser('100% / 3')).toEqual('33.333333%');
  });

  it('should not calculate a suspicious value', () => {
    expect(parser('console.log(process)')).toBeFalsy();
  });
});


describe('findAndReplaceUnits', () => {
  it('should return the value and unit of 10 and px for 10px', () => {
    expect(findAndReplaceUnits('10px')).toEqual({
      unit: 'px',
      value: '10',
    });
  });

  it('should return the value and unit of 0 and px for 10px', () => {
    expect(findAndReplaceUnits('0')).toEqual({
      unit: '',
      value: '0',
    });

    expect(findAndReplaceUnits(0)).toEqual({
      unit: '',
      value: '0',
    });
  });
});
