// 'use strict;'

var calculatorState = {
  currentValue: '',
  previousValue: '',
  pendingOperator: ''
};

window.calculatorApp = {
  clickDigit: function(digit) {
    if((digit !== 0) || calculatorState.currentValue) {
      calculatorState.currentValue += digit;
    }
    display.value = calculatorState.currentValue;
  },
  clickDecimal: function() {
  },
  clickOperator: function(op) {
    if(calculatorState.pendingOperator) {
      this.clickEquals();
    }
    else {
      calculatorState.previousValue = calculatorState.currentValue;
    }
    calculatorState.pendingOperator = op;
    calculatorState.currentValue = '';
    display.value = '0';
  },
  clickEquals: function() {
    if(calculatorState.pendingOperator) {
      var current = parseFloat(calculatorState.currentValue);
      var prev = parseFloat(calculatorState.previousValue);
      switch(calculatorState.pendingOperator) {
        case '+':
          calculatorState.previousValue = prev + current;
          break;
        case '-':
          calculatorState.previousValue = prev - current;
          break;
        case '*':
          calculatorState.previousValue = prev * current;
          break;
        case '/':
          calculatorState.previousValue = prev / current;
          break;
      }
      calculatorState.currentValue = '';
      calculatorState.pendingOperator = '';
      display.value = calculatorState.previousValue;
	}
  }
}
