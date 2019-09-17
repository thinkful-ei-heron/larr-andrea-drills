'use strict';

function daysInAMonth(month, leapYear) {

  let message = '';

  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    message = `${month} has 31 days.`;
    break;
  case 'February': {
    if (leapYear === true) message = `${month} has 29 days.`;
    else message = `${month} has 28 days.`;
    break;
  }
  case 'April':
  case 'June':
  case 'September':
  case 'November':  
    message = `${month} has 30 days.`;
    break;
  default:
    throw new Error('Must provide a valid month.');
  }

  return message;
}

try {
  // eslint-disable-next-line no-console    
  console.log(daysInAMonth('February', true));    
} catch (e) {
  // eslint-disable-next-line no-console    
  console.log(e.message);
}

