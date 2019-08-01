module.exports = function() {
    // Retrieve records from Airtable API	
	var Airtable = require('airtable');
    var airtableKey = "keyYAXeTNsAmE47gi";
    var airtableAppID = "appv4N6GhNWVSPgBe";
    var base = new Airtable({apiKey:"keyYAXeTNsAmE47gi"}).base("appv4N6GhNWVSPgBe");

    //Create empty table elemnts
    var createTable = document.createElement('table');
    createTable.setAttribute('id','fullPublicationTable');
    var createHeaderRow = document.createElement('tr');
    createHeaderRow.setAttribute('id','headerRow')
    var createBlankHeader = document.createElement('th');
    createBlankHeader.setAttribute('id','buttonSelectHeader')
    var createNameHeader = document.createElement('th');
    createNameHeader.innerHTML = "Name";
    createNameHeader.setAttribute('onClick','sortTable(1)');
    var createPublisherHeader = document.createElement('th');
    createPublisherHeader.innerHTML = "Publisher";
    createPublisherHeader.setAttribute('onClick', 'sortTable(2)')
    var createEditorialTypeHeader = document.createElement('th');
    createEditorialTypeHeader.innerHTML = "Editorial Type";
    createEditorialTypeHeader.setAttribute('onClick','sortTable(3)');
    var createStartPitchingHeader = document.createElement('th');
    createStartPitchingHeader.innerHTML = "Start Pitching";
    createStartPitchingHeader.setAttribute('onClick','sortTable(4)');
    var createClosingDateHeader = document.createElement('th');
    createClosingDateHeader.innerHTML = "Closing Date";
    createClosingDateHeader.setAttribute('onClick','sortTable(5)');
    var createOnSaleDateHeader = document.createElement('th');
    createOnSaleDateHeader.innerHTML = "On Sale / Event Date";
    createOnSaleDateHeader.setAttribute('onClick','sortTable(6)');
    var createLinkHeader = document.createElement('th');
    createLinkHeader.innerHTML = "Link";
    createLinkHeader.setAttribute('onClick','sortTable(7)');
    var createPropteryHeader = document.createElement('th');
    createPropteryHeader.innerHTML = "Property";
    createPropteryHeader.setAttribute('onClick','sortTable(8)');
    var createLocationHeader = document.createElement('th');
    createLocationHeader.innerHTML = "Location";
    createLocationHeader.setAttribute('onClick','sortTable(9)');
    var createVerticalHeader = document.createElement('th');
    createVerticalHeader.innerHTML = "Vertical / Topics";
    createVerticalHeader.setAttribute('onClick','sortTable(10)');
    var createTierHeader = document.createElement('th');
    createTierHeader.innerHTML = "Tier";
    createTierHeader.setAttribute('onClick','sortTable(11)');

    //Generate Table and header elements
    document.getElementById('table_container').appendChild(createTable);
    document.getElementById('fullPublicationTable').appendChild(createHeaderRow);
    document.getElementById('headerRow').appendChild(createBlankHeader);
    document.getElementById('headerRow').appendChild(createNameHeader);
    document.getElementById('headerRow').appendChild(createPublisherHeader);
    document.getElementById('headerRow').appendChild(createEditorialTypeHeader);    
    document.getElementById('headerRow').appendChild(createStartPitchingHeader);
    document.getElementById('headerRow').appendChild(createClosingDateHeader);
    document.getElementById('headerRow').appendChild(createOnSaleDateHeader);            
    document.getElementById('headerRow').appendChild(createLinkHeader);
    document.getElementById('headerRow').appendChild(createPropteryHeader);    
    document.getElementById('headerRow').appendChild(createLocationHeader);
    document.getElementById('headerRow').appendChild(createVerticalHeader);
    document.getElementById('headerRow').appendChild(createTierHeader);

    //Create empty variables
    var createTableRow = undefined;
    var createNameCol = undefined;
    var createPropertyCol = undefined;
    var createPublisherCol = undefined;
    var createVerticalCol = undefined;
    var createCategoryCol = undefined;
    var createEditorialTypeCol = undefined;
    var createStartPitchingCol = undefined;
    var createDailyCol = undefined;
    var createClosingDateCol = undefined;
    var createOnSaleDateCol = undefined;
    var createDescriptionCol = undefined;
    var createLocationCol = undefined;
    var createLinkCol = undefined;
    var createLink = undefined;
    var createTierCol = undefined; 
    var createCheckboxCol = undefined;
    var createCheckbox = undefined;
    var i = 0;

    //Start to pull in information from Airtable

   base('Master Editorial Calendar').select({
//        maxRecords: 1,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            i = i+1;    
            // Create new table row
            createTableRow = document.createElement('tr');
            createTableRow.setAttribute('id',i+'th row');
            // Create column entitities

            //Creates a checkbox selector that let's the user download a csv of file records
            createCheckboxCol = document.createElement('td');
            createCheckboxCol.setAttribute('id',i+'th button column');

            createCheckbox = document.createElement('input');
            createCheckbox.setAttribute('id',i+'th checkbox');
            createCheckbox.setAttribute('type', 'checkbox');
            createCheckbox.setAttribute('value',record.get('Name')+"provider"+record.get('Publisher'));

            //Creates columns from Airtabl
            createNameCol = document.createElement('td');
            createNameCol.innerHTML = record.get('Name');
            createNameCol.innerHTML = createNameCol.innerHTML.replace("undefined", "");

            createPublisherCol = document.createElement('td');
            createPublisherCol.innerHTML = record.get('Publisher');
            createPublisherCol.innerHTML = createPublisherCol.innerHTML.replace("undefined","");

            createEditorialTypeCol = document.createElement('td');
            createEditorialTypeCol.innerHTML = record.get('Edit Type');
            createEditorialTypeCol.innerHTML = createEditorialTypeCol.innerHTML.replace("undefined", "");                
            
            createStartPitchingCol = document.createElement('td');
            createStartPitchingCol.innerHTML = record.get('Start Pitching');
            createStartPitchingCol.innerHTML = createStartPitchingCol.innerHTML.replace("undefined", "");                                

            createClosingDateCol = document.createElement('td');
            createClosingDateCol.innerHTML = record.get('Closing Date');
            createClosingDateCol.innerHTML = createClosingDateCol.innerHTML.replace("undefined", "");

            createOnSaleDateCol = document.createElement('td');
            createOnSaleDateCol.innerHTML = record.get('On-Sale / Event Date');
            createOnSaleDateCol.innerHTML = createOnSaleDateCol.innerHTML.replace("undefined", "");            

			createLinkCol = document.createElement('td');
			createLinkCol.setAttribute('id',i+'th link');
			createLinkCol.innerHTML = record.get('Link');
            createLinkCol.innerHTML = createLinkCol.innerHTML.replace("undefined", "");

            createPropertyCol = document.createElement('td');
            createPropertyCol.innerHTML = record.get('Property');
            createPropertyCol.innerHTML = createPropertyCol.innerHTML.replace("undefined", "");

            createLocationCol = document.createElement('td');
            createLocationCol.innerHTML = record.get('Location');
            createLocationCol.innerHTML = createLocationCol.innerHTML.replace("undefined", "");

            createVerticalCol = document.createElement('td');
            createVerticalCol.innerHTML = record.get('Vertical / Topics');
            createVerticalCol.innerHTML = createVerticalCol.innerHTML.replace("undefined", "");
            createVerticalCol.innerHTML = createVerticalCol.innerHTML.replace(",", ";");

            createTierCol = document.createElement('td');
            createTierCol.innerHTML = record.get('Tier');
            createTierCol.innerHTML = createTierCol.innerHTML.replace("undefined", "");


            // Add created elements to page
            document.getElementById('fullPublicationTable').appendChild(createTableRow);
            document.getElementById(i+'th row').appendChild(createCheckboxCol);
            document.getElementById(i+'th button column').appendChild(createCheckbox);
            document.getElementById(i+'th row').appendChild(createNameCol);
            document.getElementById(i+'th row').appendChild(createPublisherCol);
            document.getElementById(i+'th row').appendChild(createEditorialTypeCol);
            document.getElementById(i+'th row').appendChild(createStartPitchingCol);
            document.getElementById(i+'th row').appendChild(createClosingDateCol);
            document.getElementById(i+'th row').appendChild(createOnSaleDateCol);
            document.getElementById(i+'th row').appendChild(createLinkCol);
            document.getElementById(i+'th row').appendChild(createPropertyCol);
			document.getElementById(i+'th row').appendChild(createLocationCol);
			document.getElementById(i+'th row').appendChild(createVerticalCol);
			document.getElementById(i+'th row').appendChild(createTierCol);          


		});
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }
    });		
}

