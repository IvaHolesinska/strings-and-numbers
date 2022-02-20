// get the place
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');

const string = document.querySelector('#your-string');

string.addEventListener('keyup', () => {
  const value = string.value;

  // insert value
  answer1.textContent = getNumberOfChars(value);
  answer2.textContent = getFirstChar(value);
  answer3.textContent = getLastChar(value);
  answer4.textContent = getLower(value);
  answer5.textContent = getUpper(value);
  answer7.textContent = getFirstPink(value);
  if (value) {
    answer6.textContent = getCapitalized(value);
  } else {
    answer6.textContent = '';
  }
});

// --------------  functions ---------------
// number of letters
const getNumberOfChars = (string) => string.length;

// first letter
const getFirstChar = (string) => string.substring(0, 1);

// last letter
const getLastChar = (string) => string.substring(string.length - 1);

// all letters in lower case
const getLower = (string) => string.toLowerCase();

// all letters in upper case
const getUpper = (string) => string.toUpperCase();

// capitalized version of text
const getCapitalized = (string) =>
  `${string.substring(0, 1).toUpperCase()}${string.substring(1).toLowerCase()}`;

// convert first letter to pink
const getFirstPink = (string) => string;
