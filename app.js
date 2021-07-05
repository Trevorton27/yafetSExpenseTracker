const type = document.getElementById('type');
const item = document.getElementById('name');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const locationInput = document.getElementById('location');
//
const button = document.getElementById('button');
const add = document.getElementById('add');

button.addEventListener('click', addExpense);

function addExpense(e) {
  e.preventDefault();

  if (
    !type.value ||
    !item.value ||
    !date.value ||
    !locationInput.value ||
    !amount.value
  ) {
    alert('Please fill out all input fields before submitting. ');
    return;
  }

  const oneExpense = {
    type: type.value,
    name: item.value,
    date: date.value,
    amount: amount.value,
    locationInput: locationInput.value
  };

  const expenseArray = getExpenses();
  renderExpenseRow(oneExpense);
  expenseArray.push(oneExpense);
  pushToLocalStorage(expenseArray);

  document.getElementById('main').reset();
}

function pushToLocalStorage(array) {
  localStorage.setItem('expenseArray', JSON.stringify(array));
}

function getExpenses() {
  return (expenseArray =
    JSON.parse(localStorage.getItem('expenseArray')) || []);
}

function renderExpenseRow(expense) {
  const deleteButton = createDeleteButton(expense);

  const row = document.getElementById('add').insertRow(0);
  row.className = 'table-row';
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);

  cell1.textContent = expense.type;
  cell2.textContent = expense.name;
  cell3.textContent = expense.date;
  cell4.textContent = '$' + expense.amount;
  cell5.textContent = expense.locationInput;
  cell6.appendChild(deleteButton);
}

function createDeleteButton(expense) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteExpense(deleteButton, expense.id);
  });
  return deleteButton;
}

function deleteExpense(deleteButton, id) {
  const expenseArray = getExpenses();
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === id) {
      expenseArray.splice(i, 1);
      pushToLocalStorage(expenseArray);
    }
  }
}

window.addEventListener('load', () => {
  const expenseArray = getExpenses();
  expenseArray.forEach((expense) => {
    renderExpenseRow(expense);
  });
});
