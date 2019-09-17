'use strict';

function beyond(num) {

  let message = '';

  if (num === Infinity || num === -Infinity) {
    message = 'And Beyond';
  }
  else if(num > 0) {
    message = 'To Infinity';
  }
  else if(num < 0) {
    message = 'To negative infinity';
  }
  else if(num === 0) {
    message = 'Staying Home';
  }

  return message;
}

// eslint-disable-next-line no-console
console.log(beyond(Infinity));
