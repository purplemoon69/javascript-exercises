const firstName="Grego";
const lastName="Lacost";
const thisYear=2025;
const birthYear=1994;


const fullName=(firstName +" "+ lastName);
const age=(thisYear-birthYear);

let greeting="Hello! My name is " + fullName + " and I am " + age +" years old.";







// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
