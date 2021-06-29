const type = document.getElementById("type");
const item = document.getElementById("name");
const date = document.getElementById("date");
const amount = document.getElementById("amount");
const button = document.getElementById("button");
const add = document.getElementById("add");

button.addEventListener("click", addExpense);

// delete button
const td = document.createElement("td");
const checkbutton = document.createElement("button");
checkbutton.className = "fas fa-times-circle delete";
td.appendChild(checkbutton);
add.appendChild(td);

let expense = [];

function addExpense() {
  const oneExpense = {
    type: type.value,
    name: item.value,
    date: date.value,
    amount: "$" + amount.value,
    checkbutton: checkbutton,
  };

  expense.push(oneExpense);

  var html = "<tbody>";
  for (var i = 0; i < expense.length; i++) {
    html += "<tr>";
    html += "<td>" + expense[i].type + "</td>";
    html += "<td>" + expense[i].name + "</td>";
    html += "<td>" + expense[i].date + "</td>";
    html += "<td>" + expense[i].amount + "</td>";
    html += "<td>" + expense[i].checkbutton + "</td>";
    html += "</tr>";
  }
  html += "</tbody>";
  document.getElementById("add").innerHTML = html;
  type.value = "";
  item.value = "";
  date.value = "";
  amount.value = "";

  // delete
  add.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      e.target.expense.remove();
    }
  });
}

// let type_icon;
// if (type == "card") {
//   type_icon = "<i class='far fa-credit-card'></i>";
// } else if (type == "cash") {
//   type_icon = "<i class='fas fa-money-bill-wave>'</i>";
// } else if (type == "cryptocoin") {
//   type_icon = "<i class= 'ab fa-bitcoin' ></i>";
// }
