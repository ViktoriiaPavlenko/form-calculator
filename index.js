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
      if (num2 === 0 || num1 === 0) {
        return alert('Ooops... I can not divide by zero');
      } else {
        result = num1 / num2;
      }
      break;
    default:
      alert('Please, enter the numbers and select operator');
  }
  document.getElementById('result').innerHTML = Math.round(result);
  clearInput();
}

function clearInput() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
}
