interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string;
}

let student1: Student = {
	firstName: "Jessica",
	lastName: "Rabbit",
	age: 30,
	location: "Toontown"
}
let student2: Student = {
	firstName: "Harry",
	lastName: "Potter",
	age: 20,
	location: "Hogwarts"
}

const studentsList: Student[] = [student1, student2];

function generateTableHead(table: HTMLTableElement, data: string[]) {
	let thead = table.createTHead();
	let row = thead.insertRow();
	for (let key of data) {
	  let th = document.createElement("th");
	  let text = document.createTextNode(key);
	  th.appendChild(text);
	  row.appendChild(th);
	}
  }

  function generateTable(table: HTMLTableElement, data: Student[]) {
	for (let element of data) {
	  let row = table.insertRow();
	  let cell1 = row.insertCell();
	  let text1 = document.createTextNode(element.firstName);
	  cell1.appendChild(text1);

	  let cell2 = row.insertCell();
	  let text2 = document.createTextNode(element.location);
	  cell2.appendChild(text2);
	  }
	}

	const table = document.createElement("table") as HTMLTableElement;
	const data = ["First Name", "Location"];
	generateTableHead(table, data);
	generateTable(table, studentsList);
	document.body.appendChild(table);
