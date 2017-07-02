// var1=require( 'datatables.net-buttons/js/buttons.colVis.js' )(); // Column visibility
// var2=require( 'datatables.net-buttons/js/buttons.html5.js' )(); // HTML 5 file export
// var3=require( 'datatables.net-buttons/js/buttons.flash.js' )(); // Flash file export
// var4=require( 'datatables.net-buttons/js/buttons.print.js' )(); // Print view button

// var myList = [
//   {
//   "title": "LARGE 5-1/2 AT GROUND FLOOR WITH BEAUTIFUL PRIVATE TERRACE",
//   "price": "$2600",
//   "housingType": "2br",
//   "mapAddress": "692 Avenue Outremont",
//   "mapLongitude": "-73.611247",
//   "mapLatitude": "45.520017",
//   "googleMaps": "https://maps.google.com/?q=loc%3A+%36%39%32+Avenue+Outremont+montreal+QC+CA"
// }
// ];

// // Builds the HTML Table out of myList.
// function buildHtmlTable(selector) {
//   var columns = addAllColumnHeaders(myList, selector);

//   for (var i = 0; i < myList.length; i++) {
//     var row$ = $('<tr/>');
//     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
//       var cellValue = myList[i][columns[colIndex]];
//       if (cellValue == null) cellValue = "";
//       row$.append($('<td/>').html(cellValue));
//     }
//     $(selector).append(row$);
//   }
// }

// // Adds a header row to the table and returns the set of columns.
// // Need to do union of keys from all records as some records may not contain
// // all records.
// function addAllColumnHeaders(myList, selector) {
//   var columnSet = [];
//   var headerTr$ = $('<tr/>');

//   for (var i = 0; i < myList.length; i++) {
//     var rowHash = myList[i];
//     for (var key in rowHash) {
//       if ($.inArray(key, columnSet) == -1) {
//         columnSet.push(key);
//         headerTr$.append($('<th/>').html(key));
//       }
//     }
//   }
//   $(selector).append(headerTr$);

//   return columnSet;
// }

$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    } );
} );