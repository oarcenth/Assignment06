/*eslint-env browser*/
var $ = function (id) {
    window.document.getElementById(id)
};

function addEmployee() {
    var table = window.document.getElementById("employeeList");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "New Cell 3";
}

window.addEventListener("click", addEmployee); 