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


function startDateFilter() {
	var input_start, filter_start, input_end, filter_end, table, tr, td, i, dateValue;
	input_start = document.getElementById("startPitchingDateFilterStart");
	filter_start = input_start.value;
	input_end = document.getElementById("startPitchingDateFilterEnd");
	filter_end = input_end.value;	
//Add in placeholders for blank filter dates	
	if (filter_start < 1) {
		filter_start = "1900-01-01";
	};
	if (filter_end < 1) {
		filter_end = "1900-01-01";
	};	
	console.log("start date is: " + filter_start);
	console.log("end date is: " + filter_end);
	table = document.getElementById('fullPublicationTable');
	tr=table.getElementsByTagName('tr');

	for (i=0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[4];
		if (td) {
			dateValue = td.textContent || td.innerText;
			if (dateValue > filter_start && dateValue < filter_end ) {
				tr[i].style.display = "";				
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

//Filters on editorial type

function editorialFilter() {
	var table, tr, td, i, j, k, editorialType, editorialFilterCheck;
	var editorialFilterArray = [];
	//pull in all currently selected editorial types
	if (document.getElementById("editorial-type-broadcast").checked == true) {
		editorialFilterArray.push(document.getElementById("editorial-type-broadcast").value.toUpperCase());
	};
	if (document.getElementById("editorial-type-digital").checked == true) {
		editorialFilterArray.push(document.getElementById("editorial-type-digital").value.toUpperCase());
	};	
	if (document.getElementById("editorial-type-print").checked == true) {
		editorialFilterArray.push(document.getElementById("editorial-type-print").value.toUpperCase());	
	};	
	console.log(editorialFilterArray);
	//compare item rows with array of selected editorial types
	table = document.getElementById('fullPublicationTable');
	tr = table.getElementsByTagName('tr');

	for (i=0; i< tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];
		editorialFilterCheck = false;
		if (td) {
			editorialType = td.textContent || td.innerText;
			for (j=0; j < editorialFilterArray.length; j++) {
				if (editorialType.toUpperCase().indexOf(editorialFilterArray[j]) > -1) {
					editorialFilterCheck = true;
				}
			}
			if (editorialFilterCheck == true) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			} 
			};
		}

	if (editorialFilterArray.length == 0) {
		for (k=0; k < tr.length; k++) {
			tr[k].style.display = "";
		};
	};	
	}

//Filters on publisher vertical
function verticalFilter() {
	var table, tr, td, i, j, k, verticalType, verticalFilterCheck;
	var verticalFilterArray = [];
	//pull in all currently selected vertical types
	if (document.getElementById("vertical-type-advertising").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-advertising").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-beauty").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-beauty").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-business").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-business").value.toUpperCase());	
	};	
	if (document.getElementById("vertical-type-current").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-current").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-decor").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-decor").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-entertainment").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-entertainment").value.toUpperCase());	
	};	
	if (document.getElementById("vertical-type-gender").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-gender").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-government").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-government").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-headline").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-headline").value.toUpperCase());	
	};	
	if (document.getElementById("vertical-type-health").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-health").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-legal").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-legal").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-lifestyle").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-lifestyle").value.toUpperCase());	
	};	
	if (document.getElementById("vertical-type-local").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-local").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-media").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-media").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-real-estate").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-real-estate").value.toUpperCase());	
	};		
	if (document.getElementById("vertical-type-research").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-research").value.toUpperCase());	
	};	
	if (document.getElementById("vertical-type-retail").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-retail").value.toUpperCase());
	};
	if (document.getElementById("vertical-type-sports").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-sports").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-technology").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-technology").value.toUpperCase());	
	};		
	if (document.getElementById("vertical-type-travel").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-travel").value.toUpperCase());
	};	
	if (document.getElementById("vertical-type-youth").checked == true) {
		verticalFilterArray.push(document.getElementById("vertical-type-youth").value.toUpperCase());	
	};		

	console.log(verticalFilterArray);
	//compare item rows with array of selected vertical types
	table = document.getElementById('fullPublicationTable');
	tr = table.getElementsByTagName('tr');

	for (i=0; i< tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[10];
		verticalFilterCheck = false;
		if (td) {
			verticalType = td.textContent || td.innerText;
			for (j=0; j < verticalFilterArray.length; j++) {
				if (verticalType.toUpperCase().indexOf(verticalFilterArray[j]) > -1) {
					verticalFilterCheck = true;
				}
			}
			if (verticalFilterCheck == true) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			} 
			};
		}

	if (verticalFilterArray.length == 0) {
		for (k=0; k < tr.length; k++) {
			tr[k].style.display = "";
		};
	};	
	}




function tierFilter() {
	var table, tr, td, i, j, k, tierType, tierFilterCheck;
	var tierFilterArray = [];
	//pull in all currently selected editorial types
	if (document.getElementById("tier-1").checked == true) {
		tierFilterArray.push(document.getElementById("tier-1").value);
	};
	if (document.getElementById("tier-2").checked == true) {
		tierFilterArray.push(document.getElementById("tier-2").value);
	};	
	if (document.getElementById("tier-3").checked == true) {
		tierFilterArray.push(document.getElementById("tier-3").value);	
	};	
	if (document.getElementById("tier-4").checked == true) {
		tierFilterArray.push(document.getElementById("tier-4").value);
	};	
	if (document.getElementById("tier-5").checked == true) {
		tierFilterArray.push(document.getElementById("tier-5").value);	
	};		
	console.log(tierFilterArray);
	//compare item rows with array of selected tiers
	table = document.getElementById('fullPublicationTable');
	tr = table.getElementsByTagName('tr');

	for (i=0; i< tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[11];
		tierFilterCheck = false;
		if (td) {
			tierType = td.innerHTML;
			for (j=0; j < tierFilterArray.length; j++) {
				if (tierType.indexOf(tierFilterArray[j]) > -1) {
					tierFilterCheck = true;
				}
			}
			if (tierFilterCheck == true) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			} 
			};
		}

	if (tierFilterArray.length == 0) {
		for (k=0; k < tr.length; k++) {
			tr[k].style.display = "";
		};
	};	
	}	
