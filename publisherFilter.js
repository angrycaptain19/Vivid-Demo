function publisherFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("publisher-filter-input");
	filter = input.value.toUpperCase();
	table = document.getElementById('fullPublicationTable');
	tr = table.getElementsByTagName('tr');

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[2];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			} 
			}
		}
	}

function nameFilter() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("name-filter-input");
	filter = input.value.toUpperCase();
	table = document.getElementById('fullPublicationTable');
	tr = table.getElementsByTagName('tr');

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			} 
			}
		}
	}
