
import parser from '../parser';

/**
 * Get the padding box result
 *
 * @param top
 * @param right
 * @param bottom
 * @param left
 * @param defaultValue
 * @returns {{top: *, bottom: *, left: *, right: *, width, height}}
 */
const getPaddingBoxResult = (top, right, bottom, left, defaultValue = '0px') => {
  const height = parser(`${top} + ${bottom}`) || defaultValue;
  const width = parser(`${right} + ${left}`) || defaultValue;

  return {
    top,
    bottom,
    left,
    right,
    width,
    height,
  };
};

/**
 * Return an object with the top, bottom, right, left padding values
 *
 * @param padding
 * @param defaultValue
 * @returns {{top: string, bottom: string, left: string, right: string, width: string, height: string}}
 */
export default(padding, defaultValue = '0px') => {
  // normalise the padding by removing and double spaces and trimming
  const paddingNormalised = String(padding).replace(/ +(?= )/g, '').trim();

  // get the numeric value of the padding
  const defaultValueDouble = parser(`${defaultValue} * 2`);

  let result = {
    top: defaultValue,
    bottom: defaultValue,
    left: defaultValue,
    right: defaultValue,
    width: defaultValueDouble || defaultValue,
    height: defaultValueDouble || defaultValue,
  };

  // split the value in to it's constituent parts
  const parts = paddingNormalised.split(' ');

  switch (parts.length) {
    case 1:
      // equal values for each position
      return getPaddingBoxResult(parts[0], parts[0], parts[0], parts[0], defaultValue);
    case 2:
      // (top & bottom) + (left & right)
      return getPaddingBoxResult(parts[0], parts[1], parts[0], parts[1], defaultValue);
    case 3:
      // (top) + (left & right) + (bottom)
      return getPaddingBoxResult(parts[0], parts[1], parts[2], parts[1], defaultValue);
    case 4:
      // each position is specified
      return getPaddingBoxResult(parts[0], parts[1], parts[2], parts[3], defaultValue);
    default:
      return result;
  }
};
