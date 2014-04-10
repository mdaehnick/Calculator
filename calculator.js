 
var currentNumber = 0; // The number currently displayed in the calc
var decimal = false; // flag - currentNumber already has decimal pt
var operator = false; // flag - an operator has been pressed
var currentPos = 10; // tracks ls digit. init value is tenths
      // as decimals input, moves to hundredths,
      // thousandths, etc
var currentSign = 1; // sign (1 = pos, -1 = neg)


function updateDisplay(number) {
    document.getElementById("display").value = number;
      }

function getNumber(inputNum) {
    operator = false;
    if (!decimal) {
          currentNumber *= 10;
          currentNumber += inputNum * currentSign;
          } else {
              currentNumber += inputNum * currentSign / currentPos;
              currentPos *= 10;
          }
          updateDisplay(currentNumber);
      }

function clearCalc() {
    currentNumber=0;
    updateDisplay(currentNumber);
}

function clearErr() {
    currentNumber=0;
    updateDisplay(currentNumber);
}
function calcOff () {
    updateDisplay('');
    // add code here to dim the display as well
    //change the "off" button to a power symbol instead, to toggle back on
}