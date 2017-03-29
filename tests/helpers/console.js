/**
 * Mock the console method and restore after the tests have been called
 *
 * @param method
 * @param callback
 * @returns {*}
 */
export const mock = (method, callback) => {
  // copy the console method
  const original = console[method];

  // mock the console
  const mock = jest.fn();
  console[method] = mock;

  // call the tests with the mock
  const result = callback(mock);

  // reset the console
  console[method] = original;

  return result;
};

export const warn = (callback) => mock('warn', callback);
export const info = (callback) => mock('info', callback);
export const log = (callback) => mock('log', callback);
export const error = (callback) => mock('error', callback);
