// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const valid = [valid1, valid2, valid3, valid4, valid5];

const invalid = [invalid1, invalid2, invalid3, invalid4, invalid5];

const mystery = [mystery1, mystery2, mystery3, mystery4, mystery5];

const random = [valid2, invalid2, invalid5, mystery2];

// Add your functions below:
const validateCred = arr => {
  // Initialize substitute arrays
  let newArr = [];
  let newNewArr = [];
  // Ininitialize variable that holds last digit
  let lastDigit;
  // Initialize boolean that holds answer
  let ans = true;
  // For loop that pushes the values of the array into sub array
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  // Drop the last digit of the array
  lastDigit = newArr.pop();
  // For loop to reverse sub array
  let len = newArr.length;
  for (let j = len - 1; j >= 0; j--) {
    newNewArr.push(newArr[j]);
  }
  // Initialize variables for Luhn method
  let sum = lastDigit;
  // For loop to implement Luhn method
  for (let k = 0; k < newNewArr.length; k++) {
    let digit = newNewArr[k];
    if (k % 2 === 0) {
      digit *= 2;
    }
    if (digit > 9) {
      digit -= 9;
    }
    sum += digit;
  }
  ans = (sum % 10 === 0);
  return ans;
}

const findInvalidCards = cardsArr => {
  // Initialize array of arrays
  let invalidCards = [];
  // For loop to check values in array
  for (let i = 0; i < cardsArr.length; i++) {
    if (validateCred(cardsArr[i]) === false) {
      invalidCards.push(cardsArr[i]);
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = cardsArr => {
  // Initialize array of invalid companies
  let amex = false;
  let visa = false;
  let mastercard = false;
  let discover = false;
  let unlisted = false
  let invalidAns = [];
  for (let i = 0; i < cardsArr.length; i++) {
    if (cardsArr[i][0] === 3) {
      amex = true;
    } else if (cardsArr[i][0] === 4) {
      visa = true;
    } else if (cardsArr[i][0] === 5) {
      mastercard = true;
    } else if (cardsArr[i][0] === 6) {
      discover = true;
    } else {
      unlisted = true;
    }
  }
  if (amex === true) {
    invalidAns.push('Amex');
    console.log('Amex');
  }
  if (visa === true) {
    invalidAns.push('Visa');
    console.log('Visa');
  }
  if (mastercard === true) {
    invalidAns.push('Mastercard');
    console.log('Mastercard');
  }
  if (discover === true) {
    invalidAns.push('Discover');
    console.log('Discover');
  }
  if (unlisted === true) {
    invalidAns.push('Unlisted Card');
  }
  return invalidAns;
}

console.log(idInvalidCardCompanies(findInvalidCards(random)));