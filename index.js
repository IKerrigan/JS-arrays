// Get all involved elements
const calculateButton = document.getElementById('calculate');
const input = document.getElementById('input');

const pairSum = document.getElementById('result-1');
const negativeMul = document.getElementById('result-2');

const maxElemValue = document.getElementById('result-3');
const maxElemIndex = document.getElementById('index-3');

const minElemValue = document.getElementById('result-4');
const minElemIndex = document.getElementById('index-4');

// Init array
let array = [];

// Handlers:

const onInputChange = (e) => {
  const arrayString = e.target.value;
  if (!arrayString) return;

  array = arrayString.split(',');
};

const onCalculateClick = () => {
  if (array.length < 1) {
    return;
  }

  // 1,2,3

  let positiveNumbers = [];
  let evenElements = [];
  let oddElements = [];

  let pairSumResult = 0;
  let negativeMulResult = 'None';

  let maxElemValueResult = 'None';
  let maxElemIndexResult = 'None';

  let minElemValueResult = 'None';
  let minElemIndexResult = 'None';

  for (let i = 0; i < array.length; i++) {
    let element = Number(array[i]);

    if (isEven(i)) {
      evenElements.push(element);
      pairSumResult += element;
    } else {
      if (minElemValueResult === 'None' || minElemValueResult > element) {
        minElemValueResult = element;
        minElemIndexResult = oddElements.length;
      }
      oddElements.push(element);
    }

    if (element < 0) {
      if (typeof negativeMulResult === 'string') {
        negativeMulResult = 1;
      }
      negativeMulResult *= element;
    } else {
      if (maxElemValueResult === 'None' || maxElemValueResult < element) {
        maxElemValueResult = element;
        maxElemIndexResult = positiveNumbers.length;
      }
      positiveNumbers.push(element);
    }
  }

  pairSum.innerHTML = pairSumResult;
  negativeMul.innerHTML = negativeMulResult;

  maxElemValue.innerHTML = maxElemValueResult;
  maxElemIndex.innerHTML = maxElemIndexResult;

  minElemValue.innerHTML = minElemValueResult;
  minElemIndex.innerHTML = minElemIndexResult;
};

input.addEventListener('change', onInputChange);
calculateButton.addEventListener('click', onCalculateClick);

// Helpers

const isEven = (num) => num % 2 === 0;
