const type = document.getElementById("type");
const item = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const add = document.getElementById("add");

button.addEventListener("click", addExpense);
add.addEventListener("click", deleteButton);

function addExpense() {
  const oneExpense = {
    type: type.value,
    name: item.value,
    date: date.value,
    amount: "$" + amount.value,
  };

  const row = `
      <tr>
        <td>${oneExpense.type}</td>
        <td>${oneExpense.name}</td>
        <td>${oneExpense.date}</td>
        <td>${oneExpense.amount}</td>
        <td> 
        <button id='delete'>Delete</button>
        </td>
      </tr>
    `;

  document.getElementById("add").innerHTML += row;
  type.value = "";
  item.value = "";
  date.value = "";
  amount.value = "";
}

function deleteButton(e) {
  if (e.target.id === "delete") e.target.parentElement.parentElement.remove();
}
// function deleteRow(e) {
//   let deleteButton = e.parentNode.parentNode.rowIndex;
//   if (e.target.html.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// }
