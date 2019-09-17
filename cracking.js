'use strict';

function decode(encodedWord) {

  let decodedChar = ' ';  
  switch(encodedWord.substring(0,1)) {
  case 'a':
    decodedChar = encodedWord.substring(1,2);
    break;
  case 'b':
    decodedChar = encodedWord.substring(2,3);
    break;
  case 'c':
    decodedChar = encodedWord.substring(3,4);
    break;
  case 'd':
    decodedChar = encodedWord.substring(4,5);
    break;
  default:
    decodedChar = ' ';
  }

  return decodedChar;
}

let decodedMessage = `${decode('craft')}${decode('block')}${decode('argon')}${decode('meter')}\
${decode('bells')}${decode('brown')}${decode('croon')}${decode('droop')}`;
// eslint-disable-next-line no-console
console.log(decodedMessage);
