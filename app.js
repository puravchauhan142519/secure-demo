function calculate(first, operation, second) {
  if (operation === 'add') return first + second;
  if (operation === 'subtract') return first - second;
  if (operation === 'multiply') return first * second;
  throw new Error('Unknown operation');
}

if (typeof document !== 'undefined') {
  document.querySelector('#calculate').addEventListener('click', () => {
    const first = Number(document.querySelector('#first').value);
    const second = Number(document.querySelector('#second').value);
    const operation = document.querySelector('#operation').value;
    const result = document.querySelector('#result');

    if (Number.isNaN(first) || Number.isNaN(second)) {
      result.textContent = 'Please enter two numbers.';
      return;
    }

    result.textContent = `Result: ${calculate(first, operation, second)}`;
  });
}

if (typeof module !== 'undefined') {
  module.exports = { calculate };
}
