function csvDownload(){
	var tableData = [
	];

	var tableLength = document.getElementById('fullPublicationTable').rows.length;
	console.log(tableLength)
	var tableColLength = document.getElementById('fullPublicationTable').rows[0].cells.length;
//	console.log(tableColLength);	
	var buttonValue = undefined;
	var tableRow = undefined;
	var headerRow = [];
	var i;
	var j;
	var z;

	for (z = 1; z <= tableColLength - 1; z++) {
		headerRow.push(document.getElementById('fullPublicationTable').rows[0].cells.item(z).innerHTML);
	};
	tableData.push(headerRow);

	for (i = 1; i < tableLength; i++) {
		buttonValue = undefined; 
//		console.log(document.getElementById(i+'th checkbox').checked);
//		console.log(document.getElementById(i+'th checkbox'));
		console.log(i)
		if (document.getElementById(i+'th checkbox').checked == true){
			buttonValue = document.getElementById(i+'th checkbox').value;
			tableRow = [];
			for (j = 1; j < tableColLength - 1; j++) {
				tableRow.push(document.getElementById('fullPublicationTable').rows[i].cells.item(j).innerHTML);
//				console.log(i+"; "+j);
//				console.log(document.getElementById('fullPublicationTable').rows[i].cells.item(j).innerHTML);
			};
			tableData.push(tableRow);
		};
	};


	var csvContent = '';
	tableData.forEach(function(infoArray,index){
		dataString = infoArray.join(',');
		csvContent += index < tableData.length ? dataString + '\n' : dataString;
	});

	var todaysDate;
	todaysDate = new Date();
	var day = todaysDate.getDate();
	var month = todaysDate.getMonth() + 1;
	var year = todaysDate.getFullYear();
	if (day < 10) {
		day = '0' + day;
	};
	if (month < 10) {
		month = '0' + month;
	};
	var timestamp = month + "-" + day + "-" + year;


	var download = function(content, fileName, mimeType) {
		var a = document.createElement('a');
		mimeType = mimeType || 'application/octet-stream';

		if (navigator.msSaveBlob) {
			navigator.msSaveBlob(new Blob([content], {
				type: mimeType
			}), fileName);
		} else if (URL && 'download' in a) {
			a.href = URL.createObjectURL(new Blob([content], {
				type: mimeType
			}));
			a.setAttribute('download', fileName);
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		} else {
			location.href = 'tableData:application/octet-stream,' + encodeURIComponent(content);
		}
	}

	download(csvContent, 'Vivid Export ' + timestamp + '.csv', 'text/csv;encoding:utf-8');
}	