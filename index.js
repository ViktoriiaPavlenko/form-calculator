const button = document.getElementById('button');
button.addEventListener('click', getResultValue);

function getResultValue(e) {
  e.preventDefault();
  let result;
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const operators = document.getElementById('operators');

  switch (operators.value) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Please, enter the numbers and select operator';
  }
  document.getElementById('result').innerHTML = Math.round(result);
  clearInput();
}

function clearInput() {
  let num1 = (document.getElementById('num1').value = '');
  let num2 = (document.getElementById('num2').value = '');
}
