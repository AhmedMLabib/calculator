// select all buttons

let buttons = document.querySelectorAll("button"),
  numberOne = "0",
  numberTwo = "0",
  operator = "",
  hasOperator = false,
  hasDot = false;
buttons.forEach((button) => {
  button.onclick = function () {
    // if clicked on C button
    if (button.dataset.value === "clear") {
      // call clear function
      clear();
      // if clicked on = button
    } else if (button.dataset.value === "equal") {
      // calculation function
      calc(+numberOne, +numberTwo, operator);
      // if clicked on any operator button
    } else if (button.classList.contains("sign") && !hasOperator) {
      // set hasOperator true to don't allow click more than one time
      hasOperator = true;
      // reset hasDot false to allow click on "." button in number two
      hasDot = false;
      // set operator value of clicked operator button
      operator = button.dataset.value;
      // add value of clicked operator button to input
      document.querySelector("input").value += button.dataset.value;
      // if clicked on numbers and dot buttons
    } else if (!button.classList.contains("sign")) {
      // if clicked on dot button in first
      if (button.classList.contains("dot") && !hasDot) {
        // set has Dot = true to don't allow click more than one time
        hasDot = true;
        // add dot to input value
        document.querySelector("input").value += ".";
        // if not has operator [first number]  >> add dot to numberOne
        if (!hasOperator) {
          numberOne += ".";
          // if has operator [second number]  >> add dot to numberTwo
        } else {
          numberTwo += ".";
        }
        // if clicked on any number button
      } else if (!button.classList.contains("dot")) {
        // add value of button dataset to input value
        document.querySelector("input").value += button.dataset.value;
        // if not has operator [first number]  >> add value of button dataset to numberOne
        if (!hasOperator) {
          numberOne += button.dataset.value;
          // if has operator [second number]  >> add value of button dataset to numberTwo
        } else {
          numberTwo += button.dataset.value;
        }
      }
    }
  };
});
// clear function >> set all variables to default values
function clear() {
  (numberOne = "0"),
    (numberTwo = "0"),
    (operator = ""),
    (hasOperator = false),
    (hasDot = false),
    (document.querySelector("input").value = "");
}
// calc function to do operation op on num1 and num2
function calc(num1, num2, op) {
  let result;
  if (op === "/") {
    result = num1 / num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "+") {
    result = num1 + num2;
  } else if (op === "^") {
    result = num1 ** num2;
  } else {
    result = num1;
  }
  // replace input value to result
  document.querySelector("input").value = result;
  // set numberOne = result to continue operation on the result
  numberOne = result;
  // set to default values
  numberTwo = 0;
  hasOperator = false;
  hasDot = false;
}
