// this is the current full URL for the page. 
var href = window.location.href;

//Store array of the sites we will be checking against for scrapping methods, otherwise,
// We will run thorugh a very rough RegExp and count on the user to auto fill more.
var craigslistSite = new RegExp("craigslist");
var kijijiSite = new RegExp("kijiji");
var siteArray = [craigslistSite,kijijiSite];
var globalSite; // THIS IS THE KEY TO BE SET BASED ON REGEX choseScrapper

/* Run regex on it to check which way we are going to scrap it. 
This is very primitive and will need to be changed because as of now,
Our extension will be sitting in the background on everypage and 
will only take action when our button is pressed. 
*/

function choseScrapper(currentSite,arrayOfSitesWeKnowOf){

	for (var i = 0; i < arrayOfSitesWeKnowOf.length; i++) {
		if(arrayOfSitesWeKnowOf[i].test(currentSite)){
		// we found the site, so set the global variable.
		// don't forget to trim the//'s because its regex'
		
		globalSite=arrayOfSitesWeKnowOf[i];
		console.log("choosing the: "+globalSite + " scrapper.");
		break;


		}
		else if(i==arrayOfSitesWeKnowOf.length-1)
		
		console.log("I got the whole way through and seems youre not on a site I can scrap well : (");
			
	}
}
choseScrapper(href,siteArray);