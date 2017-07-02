var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

// The URL we will scrape from - in our example Anchorman 2.

    url = 'https://montreal.craigslist.ca/apa/6198258114.html';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

			var title, price, housingType, mapLattitude, mapLongitude, listingBody, phoneNumber;
            var json = { title : "", price : "", housingType : "", mapLongitude : "", mapLattitude : "", listingBody : "", phoneNumber: ""};
        
            $('.header').filter(function(){
        		var data = $(this);
        		title = data.children().first().text();            
        		price = data.children().last().children().text();

        		json.title = title;
        		json.price = price;
    		})

        }
    })
})

app.listen('8081')

console.log('Magic happens on port 8081');

exports = module.exports = app;

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

function craigslistScrapper(){

	this.say = function(){
		console.log("Worked, created a craigslist object.")
	}

}
