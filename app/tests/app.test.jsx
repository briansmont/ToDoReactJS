var expect = require('expect');

// if Fontconfig warning: ignoring C.UTF-8: not a valid language tag
// run in command line:
// LC_ALL=C

describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
});