// get the place
const gradesForm = document.querySelector('#digits-form');
const yourGrade = document.querySelector('#your-digit');

// start with empty array
const digits = [];

// --------------  functions ---------------
// number of digits
const getNumberOfDigits = (digits) => digits.length;

// sum of digits
const getSumDigits = (digits) => {
  let sum = 0;
  digits.forEach((digit) => {
    sum += digit;
  });
  return sum;
};

// // average value of all digits
const getAverageValue = (digits) => {
  let sum = 0;
  if (digits.length != 0) {
    digits.forEach((digit) => (sum += digit));
    return sum / digits.length;
  }
  return 0;
};

// digits >= 10
const getPassingDigits = (digits) => {
  const above = digits.filter((digit) => digit >= 10);
  return above.join(`, `);
};

// digits <= 9
const getFailingDigits = (digits) => {
  const bellow = digits.filter((digit) => digit <= 9);
  return bellow.join(`, `);
};

// digits raised by 1, but not higher than 20
const getRaisedDigits = (digits) => {
  let higher = digits.map((digit) => {
    if (digit + 1 > 20) {
      return 20;
    }
    return digit + 1;
  });
  return higher.join(`, `);
};

// render rest of table
const renderStats2Table = (digits) => {
  const tbody = document.querySelector('#stats-table2 tbody');
  tbody.innerHTML = `<tr>
      <td>${getPassingDigits(digits)}</td>
      <td>${getFailingDigits(digits)}</td>
      <td>${getRaisedDigits(digits)}</td>
  </tr>`;
};

const renderStatsTable = (digits) => {
  const tbody = document.querySelector('#stats-table tbody');
  tbody.innerHTML = `<tr>
      <td>${getNumberOfDigits(digits)}</td>
      <td>${getSumDigits(digits)}</td>
      <td>${getAverageValue(digits)}</td>
  </tr>`;
};

// set function parameter
const render = (digits) => {
  renderStatsTable(digits);
  renderStats2Table(digits);
};

// listener for Add button
gradesForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newGrade = Number.parseInt(yourGrade.value, 10);
  digits.push(newGrade);
  yourGrade.value = '';
  render(digits);
});

render(digits);
