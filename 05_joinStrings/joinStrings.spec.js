const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Grego', () => {
    expect(values.firstName).toEqual('Grego');
  });
  test('lastName is Lacost', () => {
    expect(values.lastName).toEqual('Lacost');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1994', () => {
    expect(values.birthYear).toEqual(1994);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Grego Lacost and I am 31 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Grego Lacost', () => {
    expect(values.fullName).toEqual('Grego Lacost');
  });
  test('age is 31', () => {
    expect(values.age).toEqual(31);
  });
});
