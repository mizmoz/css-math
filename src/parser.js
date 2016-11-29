
const allowedUnits = [
  '%',
  'px',
  'rem',
  'em',
];

/**
 * Check the value doesn't contain anything bad by removing all allowed items
 *
 * @param value
 * @return bool
 */
const check = (value) => {
  let sanitised = allowedUnits.reduce((newValue, unit) => {
    return newValue.replace(new RegExp(`([0-9\.]*)${unit}`, 'gi'), '$1');
  }, value);

  // remove all the numbers
  sanitised = sanitised.replace(/[0-9]/g, '');

  // remove all operators, brackets, spaces and dots
  sanitised = ['+', '-', '*', '/', '(', ')', '.', ' '].reduce((newValue, unit) => {
    return newValue.split(unit).join('');
  }, sanitised);

  if (sanitised.length) {
    // console.warn('Invalid value passed to parser: ', value);
    return false;
  }

  return true;
};

/**
 * Parse the value and return
 *
 * @param value
 * @param decimalPlaces Max number of decimal places to return, 6 seems ok for most browsers
 */
const parse = (value, decimalPlaces = 6) => {
  // check the value
  if (check(value)) {
    // execute and return the value
    const calculatedValue = new Function("return " + value)();

    // round and return
    return (decimalPlaces ? +calculatedValue.toFixed(decimalPlaces) : calculatedValue);
  }

  return 0;
};

/**
 * Find the unit of the item
 *
 * @param cssValue
 * @return {}
 */
const findAndReplaceUnits = (cssValue) => {
  return allowedUnits.reduce((result, value) => {
    if (result.value.indexOf(value) !== -1) {
      // found a unit
      return result = {
        value: result.value.replace(new RegExp(`([0-9\.]*)${value}`, 'gi'), '$1'),
        unit: value,
      };
    }

    return result;
  }, { value: cssValue, unit: '' });
};

/**
 * Parse the value
 *
 * @param cssValue
 * @returns {string}
 */
const parser = (cssValue) => {
  // find the units in the string and remove them
  const { value, unit } = findAndReplaceUnits(cssValue);

  // parse the value
  const parsedValue = parse(value);

  // return the parsed value and it's unit if one existed
  return (parsedValue && unit ? `${parsedValue}${unit}` : parsedValue);
};

export default parser;
