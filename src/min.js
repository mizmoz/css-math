
import parseValuesAndUnit from './helpers/parseValuesAndUnit';

/**
 * Find the minimum value in the provided list
 *
 * @param values
 * @return string
 */
export default (values) => {
  // parse the values and unit
  const parsed = parseValuesAndUnit(values);

  // find the min
  return Math.min.apply(null, parsed.values) + parsed.unit;
};
