'use strict';

function jediName(firstName, lastName) {

  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

// eslint-disable-next-line no-console
console.log(jediName('Darth', 'Vader'));
