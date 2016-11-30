
import parser from './parser';

/**
 * Calculate the fraction of the value
 *
 * fraction('1/2', '100%') = 50%
 * fraction('2/3', '600px') = 400px
 *
 * @param fraction
 * @param value
 * @return string
 */
export default (fraction, value) => {
  return parser(`${value} * (${fraction})`);
};
