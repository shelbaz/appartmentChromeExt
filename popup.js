// var1=require( 'datatables.net-buttons/js/buttons.colVis.js' )(); // Column visibility
// var2=require( 'datatables.net-buttons/js/buttons.html5.js' )(); // HTML 5 file export
// var3=require( 'datatables.net-buttons/js/buttons.flash.js' )(); // Flash file export
// var4=require( 'datatables.net-buttons/js/buttons.print.js' )(); // Print view button
//var fs = require('fs');
var dataSet= [];

var myList = [
  {
  "title": "LARGE 5-1/2 AT GROUND FLOOR WITH BEAUTIFUL PRIVATE TERRACE",
  "price": "$2600",
  "housingType": "2br",
  "mapAddress": "692 Avenue Outremont",
  "mapLongitude": "-73.611247",
  "mapLatitude": "45.520017",
  "googleMaps": "https://maps.google.com/?q=loc%3A+%36%39%32+Avenue+Outremont+montreal+QC+CA"
},
{
  "title": "TEST 5-1/2 AT GROUND FLOOR WITH BEAUTIFUL PRIVATE TERRACE",
  "price": "$200000",
  "housingType": "6br",
  "mapAddress": "692 Avenue ok",
  "mapLongitude": "-73.yes",
  "mapLatitude": "45.",
  "googleMaps": "NA.9%32+Avenue+Outremont+montreal+QC+CA"
}
];

function jsonToValuesOnly(list){
  for (var i = 0; i < list.length; i++) {
    var flushToDS=[];
    flushToDS[0]=list[i].title;
    flushToDS[1]=list[i].price;
    flushToDS[2]=list[i].housingType;
    flushToDS[3]=list[i].mapAddress;
    flushToDS[4]=list[i].mapLongitude;
    flushToDS[5]=list[i].mapLatitude;
    flushToDS[6]=list[i].googleMaps;
    // console.log(list[i].title);
    // console.log(list[i].price);
    // console.log(list[i].housingType);
    // console.log(list[i].mapAddress);
    // console.log(list[i].mapLongitude);
    // console.log(list[i].mapLatitude);
    // console.log(list[i].googleMaps);
    // console.log(flushToDS)
    // console.log("i = " + i);
    dataSet[i] = flushToDS;
    }
  

}
function readyTable(data){
  jsonToValuesOnly(myList);
  console.log("done with setup, printing to page");

  $(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Title" },
            { title: "Price" },
            { title: "Capacity" },
            { title: "Address" },
            { title: "Longitude" },
            { title: "Latitude" },
            {title : "googleMaps"}
        ]
    } );
} );

}

readyTable();

// jsonToValuesOnly(myList);
// console.log("..........do i have valid ds?");
// console.log(dataSet);
// console.log(dataSet[0][0]);
// console.log(dataSet[1][0]);


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

// $(document).ready(function() {
//     $('#example').DataTable( {
//         data: dataSet,
//         columns: [
//             { title: "Name" },
//             { title: "Position" },
//             { title: "Office" },
//             { title: "Extn." },
//             { title: "Start date" },
//             { title: "Salary" }
//         ]
//     } );
// } );
// function JsonToTableExporter(){

//     fs.readFile('./Index.html', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;

//     // Invoke the next step here however you like
//     console.log(content);   // Put all of the code here (not the best solution)
//     //processFile();          // Or put the next step in a function and invoke it
// });

// }
// JsonToTableExporter();