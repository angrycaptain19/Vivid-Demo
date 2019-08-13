function sortTable(header) {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("fullPublicationTable");
	switching = true;
	while (switching) {
		switching = false;
		rows = table.rows;
		for (i=1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("td")[header];
			y = rows[i + 1].getElementsByTagName("td")[header];
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			};

		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}

	}

}

