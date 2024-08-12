var student1 = {
    firstName: "Jessica",
    lastName: "Rabbit",
    age: 30,
    location: "Toontown"
};
var student2 = {
    firstName: "Harry",
    lastName: "Potter",
    age: 20,
    location: "Hogwarts"
};
var studentsList = [student1, student2];
function generateTableHead(table, data) {
    var thead = table.createTHead();
    var row = thead.insertRow();
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var key = data_1[_i];
        var th = document.createElement("th");
        var text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
function generateTable(table, data) {
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var element = data_2[_i];
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var text1 = document.createTextNode(element.firstName);
        cell1.appendChild(text1);
        var cell2 = row.insertCell();
        var text2 = document.createTextNode(element.location);
        cell2.appendChild(text2);
    }
}
var table = document.createElement("table");
var data = ["First Name", "Location"];
generateTableHead(table, data);
generateTable(table, studentsList);
document.body.appendChild(table);
