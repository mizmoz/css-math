
import parseValuesAndUnit from './helpers/parseValuesAndUnit';

/**
 * Find the maximum value in the provided list
 *
 * @param values
 * @return string
 */
export default (values) => {
  // parse the values and unit
  const parsed = parseValuesAndUnit(values);

  // find the min
  return Math.max.apply(null, parsed.values) + parsed.unit;
};