const type = document.getElementById("type");
const item = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const add = document.getElementById("add");

button.addEventListener("click", addExpense);

let expense = [];

function addExpense() {
  const oneExpense = {
    type: type.value,
    name: item.value,
    date: date.value,
    amount: "$" + amount.value,
  };
  expense.push(oneExpense);

  var html = "<tbody>";
  for (var i = 0; i < expense.length; i++) {
    const row = `
      <tr>
        <td>${expense[i].type}</td>
        <td>${expense[i].name}</td>
        <td>${expense[i].date}</td>
        <td>${expense[i].amount}</td>
        <button id='delete'>Delete</button>
      </tr>
    `;

    html += row;

    // html += "<tr>";
    // html += "<td>" + expense[i].type + "</td>";
    // html += `<td>${expense[i].type}</td>`;
    // html += "<td>" + expense[i].name + "</td>";
    // html += "<td>" + expense[i].date + "</td>";
    // html += "<td>" + expense[i].amount + "</td>";
    // add.appendChild(deleteButton);
    // html += "</tr>";
  }

  html += "</tbody>";
  document.getElementById("add").textContent = html;
  type.value = "";
  item.value = "";
  date.value = "";
  amount.value = "";

  // delete
}

function deleteRow(e) {
  let deleteButton = e.parentNode.parentNode.rowIndex;
  if (e.target.html.contains("delete")) {
    e.target.parentElement.remove();
  }
}
