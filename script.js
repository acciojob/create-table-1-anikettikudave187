function insert_Row() {
  let table = document.getElementById('sampleTable');

  const row=table.insertRow(0);

	const cell1=row.insertCell(0);
	const cell2=row.insertCell(1);

	cell1.innerText="New Cell1";
	cell2.innerText="New Cell2";
}
