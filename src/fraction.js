
import parser, { findAndReplaceUnits } from './parser';

/**
 * Calculate the fraction of the value
 *
 * fraction('1/2', '100%') = 50%
 * fraction('2/3', '600px') = 400px
 * fraction('25%', '800px') = 200px
 *
 * @param fraction
 * @param value
 * @return string
 */
export default (fraction, value) => {
  if (String(fraction).search('%') !== -1) {
    // Parse fractions that are percentages
    const found = findAndReplaceUnits(fraction);
    return parser(`${value} * (${found.value / 100})`);
  }

  // parse normal string fractions like 1/5 etc
  return parser(`${value} * (${fraction})`);
};
