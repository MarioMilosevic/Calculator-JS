// result.value = "0" na samom pocetku
// <button class="negativeNumber">+/-</button>
let result = document.querySelector(".result");
let negativeNumber = document.querySelector(".negativeNumber");
let initialValue = "";
let resultCalc = "";
let deletedNumber;
const decimalPoint = document.querySelector(".decimalPoint");
let isPositive = true;

function append(value) {
  initialValue += value;
  result.value = initialValue;
  console.log(initialValue);
  if (initialValue === "+") {
    initialValue = "0+";
    result.value = initialValue;
  } else if (initialValue === "-") {
    initialValue = "0-";
    result.value = initialValue;
  } else if (initialValue === "*") {
    initialValue = "0*";
    result.value = initialValue;
  } else if (initialValue === "/") {
    initialValue = "0/";
    result.value = initialValue;
  }
}

decimalPoint.addEventListener("click", function (e) {
  if (!initialValue.includes(".") && initialValue === "") {
    initialValue = "0.";
    result.value = initialValue;
    console.log("prvo");
  } else if (initialValue.includes(".")) {
    initialValue = `${initialValue}` + ".";
  } else if (initialValue.includes(".")) {
    console.log("sadrzi tacku");
    return;
  }
});

function calculateResult() {
  resultCalc = eval(initialValue);
  let resultCalcString = String(resultCalc);
  resultCalc = resultCalcString;
  // resultCalc je sada isto string
  result.value = initialValue = resultCalc;
  // initialValue se vraca na vrijednost resultCalca
}

function clearResult() {
  initialValue = "";
  result.value = 0;
  // pocetnu vrijednost vracamo na prazan string, vrijednost resulta na '0'
}

function percentage() {
  const percent = initialValue / 100;
  result.value = percent;
}

function squareNumber() {
  initialValue = initialValue * initialValue;
  // Da budu tacno 2 decimalna broja
  result.value = initialValue.toFixed(2);
}

function squareRootNumber() {
  const squaredRootNumber = Math.sqrt(initialValue);
  result.value = squaredRootNumber;
}
///////////////////////
function deleteNumber() {
  deletedNumber = initialValue.slice(0, -1);
  result.value = initialValue = deletedNumber;
  // console.log(deletedNumber);
  // console.log('brisem');
  // console.log(initialValue);
  if (!initialValue) {
    initialValue = "0";
    result.value = initialValue;
    // console.log('nulaaaaa');
    return;
  }
}
///////////////////////
function reciprocalNumber() {
  let a = 1;
  result.value = a / resultCalc;
}

function negative() {
  if (initialValue === "") {
    console.log("0 negativni broj");
    return;
  } else if (initialValue.includes("-")) {
    isPositive = false
    if(!isPositive){
      String(initialValue) = result.value = Math.abs(initialValue)
      isPositive = true;
      console.log('if')
      console.log(isPositive);
      console.log(initialValue);
      console.log(result.value);
    } } else if(isPositive) {
      result.value = initialValue * -1;
      isPositive = false;
      console.log('jjjjjjjjjjjjjj')
      // pretvoriti u negativ
      // vratiti isPositive u false
    }
  }

negativeNumber.addEventListener("click", negative);
