'use strict';

function game(player) {
  const computer = Math.floor(Math.random() * 3) + 1;
  let message = '';

  switch (player) {
  case 1: {
    if (computer === 1) message = 'Player throws rock, computer throws rock... Tie.';
    else if (computer === 2) message = 'Player throws rock, computer throws paper.. Computer wins.';
    else if (computer === 3) message = 'Player throws rock, computer throws scissors... Player wins.';
    break;
  }
  case 2: {
    if (computer === 1) message = 'Player throws paper, computer throws rock... Player wins.';
    else if (computer === 2) message = 'Player throws paper, computer throws paper... Tie.';
    else if (computer === 3) message = 'Player throws paper, computer throws scissors... Computer wins.';
    break;
  }
  case 3: {
    if (computer === 1) message = 'Player throws scissors, computer throws rock... Computer wins.';
    else if (computer === 2) message = 'Player throws scissors, computer throws paper... Player wins.';
    else if (computer === 3) message = 'Player throws scissors, computer throws scissors... Tie.';      
    break;
  }
  default: throw new Error('Invalid entry.');
  }

  return message;
}

try {
// eslint-disable-next-line no-console
  console.log(game(3));
} catch(e) {
  // eslint-disable-next-line no-console
  console.log(e.message);
}
