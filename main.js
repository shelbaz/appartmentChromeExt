// this is the current full URL for the page. 
var href = window.location.href;

//Store array of the sites we will be checking against for scrapping methods, otherwise,
// We will run thorugh a very rough RegExp and count on the user to auto fill more.
var craigslistSite = new RegExp("craigslist");
var kijijiSite = new RegExp("kijiji");
var siteArray = [craigslistSite,kijijiSite];
var globalSite; // THIS IS THE KEY TO BE SET BASED ON REGEX choseScrapper
var siteObject

/* Run regex on it to check which way we are going to scrap it. 
This is very primitive and will need to be changed because as of now,
Our extension will be sitting in the background on everypage and 
will only take action when our button is pressed. 
*/
function createScrapperObj(optionSite){

	// stupid flow method for creating the right object 
	if(optionSite=="craigslist"){

		var newsite = new craigslistScrapper;
		newsite.say();
		return newsite;
	}
	//else if (){}

}

function choseScrapper(currentSite,arrayOfSitesWeKnowOf){

	for (var i = 0; i < arrayOfSitesWeKnowOf.length; i++) {
		if(arrayOfSitesWeKnowOf[i].test(currentSite)){
		// we found the site, so set the global variable.
		// don't forget to trim the//'s because its regex'
		
		globalSite=arrayOfSitesWeKnowOf[i].toString();
		var globalSite = globalSite.substring(1, globalSite.length-1);
		console.log("choosing the: "+globalSite + " scrapper.");
		console.log(".........................................");
		siteObject= createScrapperObj(globalSite) // this is aglobally manipulated object

		console.log(".........................................");

		//console.log(globalSite) // works returns name without / / cause now its a string. 
		
		break;


		}
		else if(i==arrayOfSitesWeKnowOf.length-1)
		
		console.log("I got the whole way through and seems youre not on a site I can scrap well : (");
			
	}
}
choseScrapper(href,siteArray,createScrapperObj);

// function messaround(){
// 	siteObject.say();
// }
// messaround();


// function craigslistScrapper(){

// 	this.say = function(){
// 		console.log("Worked, created a craigslist object.")
// 	}

// }

var myList = [
  { "name": "abc", "age": 50 },
  { "age": "25", "hobby": "swimming" },
  { "name": "xyz", "hobby": "programming" }
];

var _table_ = document.createElement('table'),
    _tr_ = document.createElement('tr'),
    _th_ = document.createElement('th'),
    _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable(arr) {
     var table = _table_.cloneNode(false),
         columns = addAllColumnHeaders(arr, table);
     for (var i=0, maxi=arr.length; i < maxi; ++i) {
         var tr = _tr_.cloneNode(false);
         for (var j=0, maxj=columns.length; j < maxj ; ++j) {
             var td = _td_.cloneNode(false);
                 cellValue = arr[i][columns[j]];
             td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
 }

 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(arr, table)
 {
     var columnSet = [],
         tr = _tr_.cloneNode(false);
     for (var i=0, l=arr.length; i < l; i++) {
         for (var key in arr[i]) {
             if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key)===-1) {
                 columnSet.push(key);
                 var th = _th_.cloneNode(false);
                 th.appendChild(document.createTextNode(key));
                 tr.appendChild(th);
             }
         }
     }
     table.appendChild(tr);
     return columnSet;
 }