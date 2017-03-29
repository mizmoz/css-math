
import { findAndReplaceUnits } from '../parser';

/**
 * Parse the values and return a list of raw values and the unit
 *
 * @param values
 * @return string
 */
export default (values) => {
  let unit = '';

  const parsed = values.map((v) => {
    const result = findAndReplaceUnits(v);

    if (! unit) {
      unit = result.unit;
    } else if (Number(result.value) && unit !== result.unit) {
      throw 'values cannot be mixed unit types';
    }

    return Number(result.value);
  });

  return {
    values: parsed,
    unit: unit,
  };
};
