const type = document.getElementById("type");
const item = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const locationInput = document.getElementById("location");
//
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
    locationInput: locationInput.value,
  };

  const row = `
      <tr>
        <td>${oneExpense.type}</td>
        <td>${oneExpense.name}</td>
        <td>${oneExpense.date}</td>
        <td>${oneExpense.amount}</td>
        <td>${oneExpense.locationInput}</td>
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
  locationInput.value = "";
}

function deleteButton(e) {
  if (e.target.id === "delete") e.target.parentElement.parentElement.remove();
}
